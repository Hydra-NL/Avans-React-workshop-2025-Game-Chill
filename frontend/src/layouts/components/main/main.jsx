// Core
import { useTheme } from "@mui/material/styles";

// Style
import styles from "./main.style";

function Main(props) {
  const {
    children,
  } = props;

  const theme = useTheme();
  const classes = styles(theme);

  return (
    <main css={classes.main}>
      {children}
    </main>
  );
}

export default Main;
