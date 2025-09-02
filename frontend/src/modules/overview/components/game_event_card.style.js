// 2.2. Style the card with Material-UI components
const styles = theme => ({
  card: {
    // Styling for the Card goes here
  },

  cardMedia: {
    // Styling for the CardMedia goes here
  },

  // Use the classes below or add more
  clickableTitle: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underline",
    "&:hover": {
      color: "rgba(99, 30, 50, 1)",
    },
  },

  button: {
    color: "#d32f2f",
    padding: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: "#ffebee",
    },
  },

  detailItem: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    color: "#555",
  },

});

export default styles;
