import { extendTheme } from '@chakra-ui/react';

/**
 * Minimal Chakra theme: the visual system lives in src/index.css so it can
 * mirror the established portfolio styling exactly. Chakra provides the CSS
 * reset, colour-mode config and font tokens.
 */
export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    body: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  },
  colors: {
    accent: '#64f4d2',
    accent2: '#8b7bff',
  },
  styles: {
    global: {
      body: {
        bg: '#070710',
        color: '#e8e8f0',
      },
    },
  },
});
