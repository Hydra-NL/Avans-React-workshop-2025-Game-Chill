const overrides = palette => ({
  MuiDialogContent: {
    defaultProps: {
      dividers: true,
    },
    styleOverrides: {
      root: {
        padding: 24,
        backgroundColor: palette.background.paper,
        borderTop: "unset",
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "16px 24px",
        backgroundColor: palette.background.paper,
      },
    },
  },
});

export default overrides;
