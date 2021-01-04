import { theme as defaultTheme } from "@chakra-ui/react";

const TodoTheme = {
  colors: {
    light: {
      100: "hsl(  0,  0%, 98%)", // Very Light Gray
      200: "hsl(236, 33%, 92%)", // Very Light Grayish Blue
      300: "hsl(233, 11%, 84%)", // Light Grayish Blue
      500: "hsl(220, 98%, 61%)", // Bright Blue
      600: "hsl(236,  9%, 61%)", // Dark Grayish Blue
      700: "hsl(235, 19%, 35%)", // Very Dark Grayish Blue
    },
    dark: {
      200: "hsl(236, 33%, 92%)", // Light Grayish Blue (hover)
      300: "hsl(234, 39%, 85%)", // Light Grayish Blue
      400: "hsl(234, 11%, 52%)", // Dark Grayish Blue
      500: "hsl(220, 98%, 61%)", // Bright Blue
      600: "hsl(233, 14%, 35%)", // Very Dark Grayish Blue
      700: "hsl(237, 14%, 26%)", // Very Dark Grayish Blue
      800: "hsl(235, 24%, 19%)", // Very Dark Desaturated Blue
      900: "hsl(235, 21%, 11%)", // Very Dark Blue
    },
    gradient: {
      start: "hsl(192, 100%, 67%)",
      end: "hsl(280, 87%, 65%)",
    },
  },
  fonts: {
    body: "'Josefin Sans', " + defaultTheme.fonts.body,
    heading: "'Josefin Sans', " + defaultTheme.fonts.body,
  },
  styles: {
    global: ({ colorMode }) => {
      return {
        ".todo-list-item-dragging": {
          border: "0px !important",
          backgroundColor: colorMode === "light" ? "white" : "dark.800",
          height: { base: "52px !important", md: "60px !important" },
          shadow: "dark-lg",
        },
      };
    },
  },
};

export default TodoTheme;
