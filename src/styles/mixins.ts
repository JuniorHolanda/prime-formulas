import { css } from "styled-components";
import theme from "./theme";

export type Spacing = keyof typeof theme.spacing;
export type BorderRadius = keyof typeof theme.borderRadius;
export type FontTextSize = Extract<keyof typeof theme.fontSize, `${string}Text`>;
export type FontTitleSize = Extract<keyof typeof theme.fontSize, `${string}Title`>;
export type FlexAlignment = "center" | "left" | "right";

const justifyContent: Record<FlexAlignment, string> = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};

export const flex = (alignment: FlexAlignment = "center") => css`
  display: flex;
  align-items: center;
  justify-content: ${justifyContent[alignment]};
`;

export const borderRadius = (size: BorderRadius) => css`
  border-radius: ${theme.borderRadius[size]};
`;

export const fontText = (size: FontTextSize) => css`
  font-size: ${theme.fontSize[size]};
`;

export const fontTitle = (size: FontTitleSize) => css`
  font-size: ${theme.fontSize[size]};
`;

/** Applies uniform outer spacing using margin. */
export const space = (size: Spacing) => css`
  margin: ${theme.spacing[size]};
`;

export const gap = (size: Spacing) => css`
  gap: ${theme.spacing[size]};
`;

export const padding = (size: Spacing) => css`
  padding: ${theme.spacing[size]};
`;
