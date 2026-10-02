import styled from "styled-components";
import Image from "next/image";
import { flex, gap } from "@/styles/mixins";
import theme from "@/styles/theme";

export const SPage = styled.div`
  min-height: 100svh;
  background-color: ${theme.colors.background};
  font-family: var(--font-primary), sans-serif;
`;

export const SHeader = styled.header`
  ${flex("center")}
  width: 100%;
  height: clamp(68px, 18vw, 92px);
  background-color: ${theme.colors.colorMain};

  @media (min-width: 600px) {
    height: 100px;
  }

  @media (min-width: 900px) {
    height: clamp(120px, 6vw, 185px);
  }
`;

export const SHeaderLogo = styled(Image)`
  display: block;
  width: clamp(140px, 45vw, 180px);
  height: auto;
  filter: brightness(0) saturate(100%) invert(69%) sepia(42%) saturate(610%)
    hue-rotate(8deg) brightness(93%) contrast(91%);

  @media (min-width: 600px) {
    width: clamp(180px, 24vw, 240px);
  }

  @media (min-width: 900px) {
    width: clamp(150px, 6vw, 320px);
  }
`;

export const SMain = styled.main`
  ${flex("center")}
  ${gap("lg")}
  flex-direction: column;
  min-height: 100svh;
  width: 100%;
  padding: ${theme.spacing.sm};

  @media (min-width: 600px) {
    gap: 40px;
    padding: 10px;
  }

  @media (min-width: 900px) {
    gap: 32px;
    padding: 22px;
  }
`;

