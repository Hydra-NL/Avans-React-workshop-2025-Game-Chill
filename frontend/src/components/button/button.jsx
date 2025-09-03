import { useTheme } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

// Style
import styles from "./button.style";

function Button(props) {
  const {
    children,
    ...rest
  } = props;

  const theme = useTheme();
  const classes = styles(theme);

  return (
    <MuiButton {...rest} css={classes.button}>
      {children}
    </MuiButton>
  );
}

export default Button;
