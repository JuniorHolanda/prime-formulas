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

export const SSecondaryBannerMain = styled.section`
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
    height: clamp(520px, 83vw, 620px);
    min-height: 0;
    padding: 10px;
    text-align: left;
  }

  @media (min-width: 900px) {
    height: clamp(510px, 49.5vw, 720px);
    padding: 3.5vw;
  }
`;

export const SSecondaryBannerImage = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  height: 50%;
  bottom: 0;
  top: auto;

  img {
    object-fit: contain;
    object-position: top;
  }

  @media (min-width: 600px) {
    inset: 0 0 0 auto;
    width: 68%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: center 45%;
    }
  }

  @media (min-width: 900px) {
    width: 62%;

    img {
      object-position: center 48%;
    }
  }
`;

export const SSecondaryBannerTitle = styled.h2`
  color: ${theme.colors.colorMain};
  ${fontTitle("smTitle")}
  font-weight: 800;
  line-height: 1.3;

  @media (min-width: 600px) {
    width: 48%;
    margin: 0;
    font-size: clamp(2rem, 5vw, 2.6rem);
    line-height: 1.22;
  }

  @media (min-width: 900px) {
    width: 58%;
    font-size: clamp(3rem, 5.1vw, 4.4rem);
    line-height: 1.08;
  }
`;

export const SSecondaryBannerDescription = styled.p`
  ${fontText("mdText")};
  font-weight: 600;
  color: ${theme.colors.colorMain};
  line-height: 1.4;

  @media (min-width: 600px) {
    width: 48%;
    margin: 10px 0 0;
    font-size: clamp(1rem, 2.3vw, 1.2rem);
  }

  @media (min-width: 900px) {
    width: 58%;
    margin-top: 18px;
    font-size: clamp(1.4rem, 2.35vw, 2rem);
  }
`;

export const SSecondaryBannerSecondaryDescription = styled.p`
  ${fontText("smText")};
  font-weight: 400;
  color: ${theme.colors.colorMain};
  line-height: 1.4;
  margin-top: 10px;

  @media (min-width: 600px) {
    width: 48%;
    margin-top: 10px;
    font-size: clamp(0.95rem, 2.2vw, 1.1rem);
  }

  @media (min-width: 900px) {
    width: 58%;
    margin-top: 14px;
    font-size: clamp(1rem, 1.45vw, 1.25rem);
  }
`;

export const SSecondaryBannerButtonContainer = styled.div`
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

export const SSecondaryBannerConsultLink = styled(Link)`
  ${consultActionStyles}
  text-decoration: none;
`;

export const SSecondaryBannerConsultButton = styled.button`
  ${consultActionStyles}
`;
