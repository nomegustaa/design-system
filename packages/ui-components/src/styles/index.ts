import { createStitches } from '@stitches/react';
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  lineHeights,
  radius,
} from '@ignite-ui-ds/tokens';

export const {
  styled,
  css,
  keyframes,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    space,
    lineHeights,
    radii: radius,
    sizes: space,
  },
});
