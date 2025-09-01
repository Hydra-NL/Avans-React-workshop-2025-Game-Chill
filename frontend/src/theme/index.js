import { createTheme } from "@mui/material/styles";

import colorsDefault from "./colors/colors_default";
import colorsDark from "./colors/colors_dark";
import overrides from "./overrides";

const themeVariants = {
  darkTheme: "darkTheme",
  defaultTheme: "defaultTheme",
};

const colorsMap = {
  [themeVariants.defaultTheme]: colorsDefault,
  [themeVariants.darkTheme]: colorsDark,
};

export const gameChillTheme = ({ theme, prefersDarkMode }) => {
  const systemTheme = prefersDarkMode ? "darkTheme" : "defaultTheme";
  const finalTheme = theme?.appThemeState === "system" ? systemTheme : theme?.appThemeState;

  const themeOptions = {
    theme,
    palette: {
      ...colorsMap[themeVariants[finalTheme] || "defaultTheme"],
      overlay: "rgba(0,0,0,.8)",
    },
    components: overrides(colorsMap[themeVariants[finalTheme] || "defaultTheme"]),
    scrollbar: {
      "&::-webkit-scrollbar": {
        width: 10,
        background: "rgb(57 68 77) !important",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(255, 255, 255, 0.5) !important",
        borderRadius: 1,
      },
    },
    border: (color, width = 1, style = "solid") => `${width}px ${style} ${color}`,
  };

  return createTheme(themeOptions);
};

export default gameChillTheme;
