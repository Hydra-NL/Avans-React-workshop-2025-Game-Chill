const styles = theme => ({
  menu: {
    "& .MuiPaper-root": {
      maxHeight: 300,
      overflowY: "auto",
      "&": theme.scrollbar,
    },
  },
  dropDown: {
    zIndex: 1302,
    "& .MuiPopover-paper": {
      maxHeight: 300,
      overflowY: "auto",
      "&": theme.scrollbar,
    },
  },
  inputLabel: {
    background: theme.palette.background.primary.light,
    color: theme.palette.background.primary.contrastText,
  },
});

export default styles;
