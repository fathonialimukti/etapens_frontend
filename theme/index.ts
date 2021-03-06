import { createTheme } from '@nextui-org/react';

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
};

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    fonts,
    colors: {
      shadow: "#0072F5",
    }
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    fonts,
    colors: {
      shadow: "#BC8EE9",
    },
  }
});
