import styled, { css } from "styled-components";
import Link from "next/link";
import {
  borderRadius,
  flex,
  fontText,
  fontTitle,
  padding,
} from "@/styles/mixins";
import theme from "@/styles/theme";

export const SBannerMain = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: min(760px, calc(100svh - 12px));
  min-height: 380px;
  overflow: hidden;
  ${borderRadius("lg")}
  ${padding("md")}
  background-color: ${theme.colors.foreground1};
  text-align: center;

  @media (min-width: 600px) {
    align-items: flex-start;
    justify-content: center;
    height: min(58vw, 430px);
    min-height: 380px;
    gap: 0;
    padding: 10px;
    text-align: left;
  }

  @media (min-width: 900px) {
    height: min(49.5vw, 760px);
    min-height: 500px;
    padding: 3.5vw;
  }
`;

export const SContainerBannerImg = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;

  img {
    object-fit: cover;
    object-position: center center;
  }

  @media (min-width: 600px) {
    left: auto;
    right: 0;
    width: 64%;

    img {
      object-position: center 45%;
    }
  }

  @media (min-width: 900px) {
    width: 63%;

    img {
      object-position: center 45%;
    }
  }
`;

export const SBannerTitle = styled.h1`
  color: ${theme.colors.colorMain};
  ${fontTitle("smTitle")}
  font-weight: 800;
  line-height: 1.3;

  @media (min-width: 600px) {
    width: 48%;
    margin: 0;
    font-size: clamp(2rem, 5vw, 2.35rem);
    line-height: 1.45;
  }

  @media (min-width: 900px) {
    width: 54%;
    font-size: clamp(3rem, 5.2vw, 4.4rem);
    line-height: 1.08;
  }
`;

export const SBannerDescription = styled.p`
  ${fontText("mdText")};
  font-weight: 600;
  color: ${theme.colors.colorMain};
  line-height: 1.4;

  .desktop-copy {
    display: none;
  }

  @media (min-width: 600px) {
    width: 46%;
    margin: 10px 0 0;
    font-size: clamp(1rem, 2.4vw, 1.2rem);
    line-height: 1.4;
  }

  @media (min-width: 900px) {
    width: 54%;
    margin-top: 18px;
    font-size: clamp(1.35rem, 2.4vw, 2rem);
    line-height: 1.4;

    .tablet-copy {
      display: none;
    }

    .desktop-copy {
      display: block;
    }
  }
`;

export const SContainerButton = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  height: 100%;

  @media (min-width: 600px) {
    align-items: center;
    width: 35%;
    height: auto;
    margin-top: 12px;
  }

  @media (min-width: 900px) {
    width: min(330px, 25vw);
    margin-top: 18px;
  }
`;

const consultActionStyles = css`
  ${flex("center")};
  ${padding("md")};
  ${borderRadius("lg")};
  ${fontText("mdText")};
  font-weight: 500;
  letter-spacing: 1px;
  width: 100%;
  height: fit-content;
  border: 0;
  background-color: ${theme.colors.colorMain};
  color: ${theme.colors.foreground1};
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;

  &:hover {
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.colorMain};
  }

  @media (min-width: 600px) {
    padding: 10px 14px;
    border-radius: 999px;
  }
`;

export const SConsultLink = styled(Link)`
  ${consultActionStyles}
  text-decoration: none;
`;

export const SConsultButton = styled.button`
  ${consultActionStyles}
`;
