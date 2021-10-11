import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    orange: "#FF7100",
    orangeAlpha: {
      50: "rgba(255, 133, 0, 0.02)",
      100: "rgba(255, 133, 0, 0.04)",
      200: "rgba(255, 133, 0, 0.08)",
      300: "rgba(255, 133, 0, 0.16)",
      400: "rgba(255, 133, 0, 0.24)",
      500: "rgba(255, 133, 0, 0.36)",
      600: "rgba(255, 133, 0, 0.48)",
      700: "rgba(255, 133, 0, 0.64)",
      800: "rgba(255, 133, 0, 0.80)",
    },
    darkBlue: "#3396B6",
    darkBlueAlpha: {
      50: "rgba(51, 150, 182, 0.02)",
      100: "rgba(51, 150, 182, 0.04)",
      200: "rgba(51, 150, 182, 0.08)",
      300: "rgba(51, 150, 182, 0.16)",
      400: "rgba(51, 150, 182, 0.24)",
      500: "rgba(51, 150, 182, 0.36)",
      600: "rgba(51, 150, 182, 0.48)",
      700: "rgba(51, 150, 182, 0.64)",
      800: "rgba(51, 150, 182, 0.80)",
    },
    backgroundGrey: "#F6F6FA",
  },
};

const fonts = {
  heading: "Open Sans",
  body: "Open Sans",
};

const fontSizes = {
  xs: "0.6rem",
  sm: "0.8rem",
  md: "1rem", // 12px normal text
  xl: "1.6rem", // 20px heading 3
  "2xl": "2rem", // 24px heading 2
  "3xl": "2.3rem", // 28px heading 1
  "4xl": "3rem", // custom very large
  "5xl": "4rem", // custom very large
};

const Button = {
  baseStyle: {
    margin: "1",
    whiteSpace: "normal", // necessary to allow for line breaks
    wordWrap: "break-word",
    borderRadius: "none",
    fontWeight: "normal",
  },
  variants: {
    active: {
      backgroundColor: "brand.orangeAlpha.600",
      border: "1px solid",
      borderColor: "brand.orange",
      fontWeight: "bold",
    },
  },
};

const Tabs = {
  parts: ["tabpanel", "tab"],
  baseStyle: {
    tabpanel: {
      bg: "white",
      my: 1,
      borderRadius: "lg",
    },
    tab: {
      bg: "white",
      p: 3,
      fontSize: "md",
      _selected: {
        color: "brand.darkBlue",
      },
    },
  },
  variants: {},
  defaultProps: { size: "", variant: "" },
};

const Input = {
  parts: ["field"],
  baseStyle: {
    field: {
      margin: "1",
      p: "2",
      backgroundColor: "whiteAlpha.700",
      outline: "1px solid",
      outlineColor: "brand.darkBlueAlpha.200",
      border: "none",
    },
  },
  variants: {
    fakeInput: {
      field: {
        pointerEvents: "none",
      },
    },
  },
  defaultProps: {
    size: "",
    variant: "",
  },
};

const Heading = {
  baseStyle: {
    color: "brand.darkBlue",
  },
  sizes: {
    lg: {
      fontSize: "lg",
      color: "black",
      mt: "5",
      mb: "1",
    },
    xl: {
      fontSize: "xl",
      mt: "7",
      mb: "3",
    },
    "2xl": {
      fontSize: "2xl",
      mt: "7",
      mb: "3",
    },
  },
};

export const bundestagTheme = extendTheme({
  components: {
    Button,
    Input,
    Heading,
    Tabs,
  },
  colors,
  fonts,
  fontSizes,
  layerStyles: {
    errorGlow: {
      outline: "1px solid #E53E3E",
      boxShadow: "0 0 10px #E53E3E",
    },
    amiguityContainerHighlight: {
      outline: "1px solid #FF7100",
      boxShadow: "0 0 10px #FF7100",
    },
  },
});
