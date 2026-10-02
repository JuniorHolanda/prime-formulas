import styled from "styled-components";
import theme from "@/styles/theme";

export const SOpeningScreen = styled.div<{ $closing: boolean }>`
  position: fixed;
  z-index: 10000;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: ${theme.colors.foreground2};
  opacity: ${({ $closing }) => ($closing ? 0 : 1)};
  visibility: ${({ $closing }) => ($closing ? "hidden" : "visible")};
  pointer-events: ${({ $closing }) => ($closing ? "none" : "auto")};
  transition: opacity 250ms ease, visibility 250ms ease;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const SOpeningAnimation = styled.div`
  width: min(88vw, 50vh, 800px);
  aspect-ratio: 1;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
