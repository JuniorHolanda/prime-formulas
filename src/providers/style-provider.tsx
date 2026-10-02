"use client";

import { useState, type ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import theme from "@/styles/theme";

type StyleProviderProps = {
  children: ReactNode;
};

export default function StyleProvider({ children }: StyleProviderProps) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const content = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (typeof window !== "undefined") {
    return content;
  }

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {content}
    </StyleSheetManager>
  );
}
