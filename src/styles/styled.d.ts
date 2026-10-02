import "styled-components";
import type { Theme } from "./theme";

declare module "styled-components" {
  // Module augmentation must use an interface for styled-components' DefaultTheme.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
