import { useEffect, useState } from "react";

// Core
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { gameChillTheme } from "../theme";

function ThemeProvider(props) {
  const { children } = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [appThemeState, setAppTheme] = useState(prefersDarkMode);

  useEffect(() => {
    setAppTheme(localStorage.getItem("appTheme"));
  }, [setAppTheme]);

  const setThemeVariant = newThemeVariant => {
    if (newThemeVariant !== localStorage.getItem("appTheme")) {
      localStorage.setItem("appTheme", newThemeVariant);
      setAppTheme(newThemeVariant);
    }
  };

  const customThemeValues = {
    theme: { appThemeState, setThemeVariant },
    prefersDarkMode,
  };

  return (
    <MuiThemeProvider theme={gameChillTheme(customThemeValues)}>
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
