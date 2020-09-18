import { ThemeProvider } from "@react-navigation/native";
import {
  createTheme,
  createText,
  BaseTheme,
  VariantProps,
  createRestyleComponent,
  SpacingProps,
  spacing,
  createVariant,
  createBox,
} from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme: BaseTheme = {
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    body: "rgba(12, 13, 52, 0.7)",
    grey: "rgba(12, 13, 52, 0.05)",
    white: "white",
    lightGrey: "#F4F0EF",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      color: "title",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "body",
    },
    button: { fontSize: 15, lineHeight: 24, color: "body" },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
