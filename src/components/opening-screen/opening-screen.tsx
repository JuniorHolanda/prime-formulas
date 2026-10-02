"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";
import openingAnimation from "@/lotties/lottie-opening.json";
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
  onLoop: () => void;
  onLoad: () => void;
  onLoadError: () => void;
};

export default function OpeningScreen() {
  const { complete } = useOpeningScreenContext();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [minimumLoopsFinished, setMinimumLoopsFinished] = useState(false);
  const [visible, setVisible] = useState(true);
  const playerListeners = useRef<PlayerListeners | null>(null);
  const closing = pageLoaded && minimumLoopsFinished;

  const handlePlayerRef = useCallback((player: DotLottie | null) => {
    const currentListeners = playerListeners.current;

    if (currentListeners) {
      currentListeners.player.removeEventListener("loop", currentListeners.onLoop);
      currentListeners.player.removeEventListener("load", currentListeners.onLoad);
      currentListeners.player.removeEventListener(
        "loadError",
        currentListeners.onLoadError,
      );
      playerListeners.current = null;
    }

    if (!player) return;

    let completedLoops = 0;

    const onLoop = () => {
      completedLoops += 1;

      if (completedLoops >= 2) {
        setMinimumLoopsFinished(true);
      }
    };

    const onLoad = () => {
      completedLoops = 0;
      player.setFrame(0);
      player.play();
    };

    const onLoadError = () => setMinimumLoopsFinished(true);

    player.addEventListener("loop", onLoop);
    player.addEventListener("load", onLoad);
    player.addEventListener("loadError", onLoadError);

    playerListeners.current = { player, onLoop, onLoad, onLoadError };

    if (player.isLoaded) onLoad();
  }, []);

  useEffect(() => {
    const markPageLoaded = () => setPageLoaded(true);
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

      const currentListeners = playerListeners.current;

      if (currentListeners) {
        currentListeners.player.removeEventListener(
          "loop",
          currentListeners.onLoop,
        );
        currentListeners.player.removeEventListener(
          "load",
          currentListeners.onLoad,
        );
        currentListeners.player.removeEventListener(
          "loadError",
          currentListeners.onLoadError,
        );
      }
    };
  }, []);

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
