import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { borderRadius, flex, fontText, padding } from "@/styles/mixins";
import theme from "@/styles/theme";
import "swiper/css";

export const SWrapper = styled.section`
  width: 100%;
`;

export const SSwiper = styled(Swiper)`
  width: 100%;
  height: 250px;

  @media (min-width: 600px) {
    height: clamp(300px, 45vw, 360px);
  }

  @media (min-width: 900px) {
    height: clamp(450px, 43vw, 620px);
  }
`;

export const SSwiperSlide = styled(SwiperSlide)`
`;

type CardTone = "peach" | "pink" | "lavender";

const cardTones: Record<CardTone, string> = {
  peach: theme.colors.foreground2,
  pink: theme.colors.foreground1,
  lavender: theme.colors.foreground3,
};

export const SSwiperCard = styled.div<{ $tone: CardTone }>`
  ${flex("center")}
  ${borderRadius("lg")}
  ${padding("sm")}
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ $tone }) => cardTones[$tone]};

  span {
    font-size: 30px;
  }

  .desktop-content {
    display: none;
  }

  p {
    color: ${theme.colors.colorMain};
    ${fontText("mdText")}
    text-align: center;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    p {
      font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    }
  }

  @media (min-width: 900px) {
    span {
      font-size: clamp(2.25rem, 4vw, 3.5rem);
    }

    p {
      font-size: clamp(1.35rem, 2.6vw, 2.2rem);
    }

    .tablet-content {
      display: none;
    }

    .desktop-content {
      display: block;
    }
  }
`;
