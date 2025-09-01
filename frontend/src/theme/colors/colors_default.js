const primary = {
  dark: "#B71C1C",
  main: "#E53935",
  light: "#EF5350",
  contrastText: "#FFFFFF",
};

const secondary = {
  dark: "#880E4F",
  main: "#EC407A",
  light: "#F48FB1",
  contrastText: "#FFFFFF",
};

const error = {
  dark: "#D32F2F",
  main: "#F44336",
  light: "#FFCDD2",
  contrastText: "#FFFFFF",
};

const success = {
  dark: "#388E3C",
  main: "#66BB6A",
  light: "#C8E6C9",
  contrastText: "#FFFFFF",
};

const background = {
  default: "#FBFBFB",
  disabled: "#F0F0F0",
  light: "#FFFFFF",
  primary: {
    main: primary.main,
    light: primary.light,
    contrastText: primary.contrastText,
  },
};

const text = {
  primary: "#1A1A1A",
  secondary: "#555555",
  disabled: "#BDBDBD",
};

const colorsDefault = {
  primary,
  secondary,
  error,
  success,
  background,
  text,
  action: {
    disabledBackground: "rgba(166, 166, 166, 0.2)",
  },
};
export default colorsDefault;
