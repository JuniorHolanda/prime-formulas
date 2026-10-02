"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";
import openingAnimation from "@/lotties/principal.json";
import { useOpeningScreenContext } from "./opening-screen-context";
import { SOpeningAnimation, SOpeningScreen } from "./opening-screen.styles";

const DotLottieReact = dynamic(
  async () => {
    const dotLottieModule = await import("@lottiefiles/dotlottie-react");
    dotLottieModule.setWasmUrl("/dotlottie-player.wasm");
    return dotLottieModule.DotLottieReact;
  },
  { ssr: false },
);

const animationData = JSON.stringify(openingAnimation);

type PlayerListeners = {
  player: DotLottie;
  onLoad: () => void;
  onLoadError: () => void;
};

export default function OpeningScreen() {
  const { complete } = useOpeningScreenContext();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [visible, setVisible] = useState(true);
  const pageLoadedRef = useRef(false);
  const playerListeners = useRef<PlayerListeners | null>(null);
  const finishTimeout = useRef<number | null>(null);
  const closing = pageLoaded && animationFinished;

  const finishAfterCurrentCycle = useCallback((player: DotLottie) => {
    player.setLoop(false);

    if (finishTimeout.current !== null) {
      window.clearTimeout(finishTimeout.current);
    }

    const remainingFrames = Math.max(
      player.totalFrames - player.currentFrame,
      0,
    );
    const remainingDuration = (remainingFrames / openingAnimation.fr) * 1000;

    finishTimeout.current = window.setTimeout(() => {
      player.pause();
      setAnimationFinished(true);
    }, remainingDuration);
  }, []);

  const handlePlayerRef = useCallback((player: DotLottie | null) => {
    const currentListeners = playerListeners.current;

    if (currentListeners) {
      currentListeners.player.removeEventListener("load", currentListeners.onLoad);
      currentListeners.player.removeEventListener(
        "loadError",
        currentListeners.onLoadError,
      );
      playerListeners.current = null;
    }
    if (finishTimeout.current !== null) {
      window.clearTimeout(finishTimeout.current);
      finishTimeout.current = null;
    }

    if (!player) return;

    const onLoad = () => {
      player.setFrame(0);
      if (pageLoadedRef.current) player.setLoop(false);
      player.play();
      if (pageLoadedRef.current) finishAfterCurrentCycle(player);
    };

    const onLoadError = () => setAnimationFinished(true);

    player.addEventListener("load", onLoad);
    player.addEventListener("loadError", onLoadError);

    playerListeners.current = { player, onLoad, onLoadError };

    if (player.isLoaded) onLoad();
  }, [finishAfterCurrentCycle]);

  useEffect(() => {
    const markPageLoaded = () => {
      pageLoadedRef.current = true;
      setPageLoaded(true);
      const player = playerListeners.current?.player;

      if (player?.isLoaded) finishAfterCurrentCycle(player);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      markPageLoaded();
    } else {
      window.addEventListener("load", markPageLoaded, { once: true });
    }

    return () => {
      window.removeEventListener("load", markPageLoaded);
      document.body.style.overflow = previousOverflow;
    };
  }, [finishAfterCurrentCycle]);

  useEffect(() => {
    if (!closing) return;

    const timeout = window.setTimeout(() => {
      setVisible(false);
      complete();
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [closing, complete]);

  if (!visible) return null;

  return (
    <SOpeningScreen
      $closing={closing}
      role="status"
      aria-live="polite"
      aria-hidden={closing}
    >
      <span className="sr-only">Carregando Prime Fórmulas</span>
      <SOpeningAnimation>
        <DotLottieReact
          data={animationData}
          autoplay={false}
          loop
          renderConfig={{ autoResize: true }}
          dotLottieRefCallback={handlePlayerRef}
          style={{ width: "100%", height: "100%" }}
        />
      </SOpeningAnimation>
    </SOpeningScreen>
  );
}
