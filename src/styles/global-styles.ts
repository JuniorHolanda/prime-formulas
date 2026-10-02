import { createGlobalStyle } from "styled-components";
import theme from "@/styles/theme";

const SGlobalStyles = createGlobalStyle`
  :root {
    --background: ${theme.colors.background};
    --foreground: ${theme.colors.texts};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: ${theme.colors.dark.background};
      --foreground: ${theme.colors.dark.texts};
    }

    html {
      color-scheme: dark;
    }
  }

  html {
    height: 100%;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    color: var(--foreground);
    background: var(--background);
    font-family: var(--font-primary), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default SGlobalStyles;
