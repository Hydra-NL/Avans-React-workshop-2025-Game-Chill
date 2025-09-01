const primary = {
  dark: "#0D0D0D",
  main: "#1A1A1A",
  light: "#333333",
  contrastText: "#FFFFFF",
};

const secondary = {
  dark: "#2262CC",
  main: "#3888FF",
  light: "#8AB9FF",
  contrastText: "#FFFFFF",
};

const error = {
  dark: "#CC3A36",
  main: "#FF4A46",
  light: "#EA7F78",
  contrastText: "#FFFFFF",
};

const success = {
  dark: "#00953A",
  main: "#00C84B",
  light: "#77D47D",
  contrastText: "#FFFFFF",
};

const background = {
  default: "#121212",
  light: "#1E1E1E",
  paper: "#1A1A1A",
  primary: {
    main: "#1A1A1A",
    light: "#333333",
    contrastText: "#FFFFFF",
  },
};

const text = {
  primary: "#E0E0E0",
  secondary: "#B0B0B0",
};

const colorsDark = {
  primary,
  secondary,
  error,
  success,
  background,
  mode: "dark",
  text,
  action: {
    disabledBackground: "rgba(255, 255, 255, 0.12)",
  },
};

export default colorsDark;
