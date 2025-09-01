const styles = theme => ({
  card: {
    display: "flex",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },

  cardMedia: {
    height: 210,
    width: 140,
    flexShrink: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  clickableTitle: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underline",
    "&:hover": {
      color: "rgba(99, 30, 50, 1)",
    },
  },

  deleteButton: {
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
