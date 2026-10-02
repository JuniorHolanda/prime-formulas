"use client";

import { motion, useReducedMotion } from "motion/react";
import { SSwiper, SSwiperCard, SSwiperSlide, SWrapper } from "./benefits-slider.styles";

const benefits = [
  {
    emoji: "🐶",
    tone: "peach",
    text: "Medicamentos na medida certa para seu melhor amigo",
    desktopEmoji: "\uD83D\uDC08\uD83D\uDC8A",
    desktopText:
      "Manipulamos medicamentos de acordo com as necessidades do seu animal",
  },
  {
    emoji: "💊🐈",
    tone: "pink",
    text: "Manipulamos medicamentos de acordo com as necessidades do seu animal",
    desktopEmoji: "\uD83D\uDC36",
    desktopText: "Medicamentos na medida certa para seu melhor amigo",
  },
  {
    emoji: "🐱",
    tone: "lavender",
    text: "Com diversas opções para ajudar no tratamento, na prevenção e na manutenção da saúde.",
  },
] as const;

export default function BenefitsSlider() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SWrapper>
      <SSwiper
        slidesPerView={1.5}
        spaceBetween={10}
        breakpoints={{
          600: { slidesPerView: 2.3, spaceBetween: 10, allowTouchMove: true },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
            allowTouchMove: false,
            grabCursor: false,
          },
        }}
      >
        {benefits.map((benefit, index) => (
          <SSwiperSlide key={benefit.tone}>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.3,
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <SSwiperCard $tone={benefit.tone}>
                <span className="tablet-content">
                  {benefit.emoji}
                </span>
                <span className="desktop-content">
                  {"desktopEmoji" in benefit ? benefit.desktopEmoji : benefit.emoji}
                </span>
                <p className="tablet-content">
                  {benefit.text}
                </p>
                <p className="desktop-content">
                  {"desktopText" in benefit ? benefit.desktopText : benefit.text}
                </p>
              </SSwiperCard>
            </motion.div>
          </SSwiperSlide>
        ))}
      </SSwiper>
    </SWrapper>
  );
}
