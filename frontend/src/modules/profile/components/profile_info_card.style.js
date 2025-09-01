const styles = theme => ({
  card: {
    position: "relative",
  },
  chipStatus: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  avatar: {
    width: 100,
    height: 100,
    border: theme.border(theme.palette.common.white, 2),
    boxShadow: 3,
  },
  persona: {
    display: "flex",
    marginTop: -95,
    marginBottom: theme.spacing(3),
  },
});

export default styles;
