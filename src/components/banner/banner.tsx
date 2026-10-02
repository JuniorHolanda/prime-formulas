import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";
import {
  SBannerDescription,
  SBannerMain,
  SBannerTitle,
  SConsultButton,
  SConsultLink,
  SContainerBannerImg,
  SContainerButton,
} from "./banner.styles";

export type BannerProps = {
  imageSrc: ImageProps["src"];
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
  linkText: string;
  href?: string;
  imageSizes?: string;
  preload?: boolean;
};

export default function Banner({
  imageSrc,
  imageAlt,
  title,
  description,
  linkText,
  href,
  imageSizes =
    "(min-width: 900px) 63vw, (min-width: 600px) 64vw, calc(100vw - 20px)",
  preload = false,
}: BannerProps) {
  return (
    <SBannerMain>
      <SContainerBannerImg>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={imageSizes}
          quality={100}
          preload={preload}
        />
      </SContainerBannerImg>

      <SBannerTitle>{title}</SBannerTitle>
      <SBannerDescription>{description}</SBannerDescription>

      <SContainerButton>
        {href ? (
          <SConsultLink href={href}>{linkText}</SConsultLink>
        ) : (
          <SConsultButton type="button">{linkText}</SConsultButton>
        )}
      </SContainerButton>
    </SBannerMain>
  );
}
