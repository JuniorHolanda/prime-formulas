import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";
import {
  SSecondaryBannerButtonContainer,
  SSecondaryBannerConsultButton,
  SSecondaryBannerConsultLink,
  SSecondaryBannerDescription,
  SSecondaryBannerImage,
  SSecondaryBannerMain,
  SSecondaryBannerSecondaryDescription,
  SSecondaryBannerTitle,
} from "./secondary-banner.styles";

export type SecondaryBannerProps = {
  imageSrc: ImageProps["src"];
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
  secondaryDescription: ReactNode;
  linkText: string;
  href?: string;
  imageSizes?: string;
  preload?: boolean;
};

export default function SecondaryBanner({
  imageSrc,
  imageAlt,
  title,
  description,
  secondaryDescription,
  linkText,
  href,
  imageSizes =
    "(min-width: 900px) 62vw, (min-width: 600px) 68vw, calc(100vw - 20px)",
  preload = false,
}: SecondaryBannerProps) {
  return (
    <SSecondaryBannerMain>
      <SSecondaryBannerImage>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={imageSizes}
          quality={100}
          preload={preload}
        />
      </SSecondaryBannerImage>

      <SSecondaryBannerTitle>{title}</SSecondaryBannerTitle>
      <SSecondaryBannerDescription>{description}</SSecondaryBannerDescription>
      <SSecondaryBannerSecondaryDescription>
        {secondaryDescription}
      </SSecondaryBannerSecondaryDescription>

      <SSecondaryBannerButtonContainer>
        {href ? (
          <SSecondaryBannerConsultLink href={href}>
            {linkText}
          </SSecondaryBannerConsultLink>
        ) : (
          <SSecondaryBannerConsultButton type="button">
            {linkText}
          </SSecondaryBannerConsultButton>
        )}
      </SSecondaryBannerButtonContainer>
    </SSecondaryBannerMain>
  );
}
