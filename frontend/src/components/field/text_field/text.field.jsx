import { useController } from "react-hook-form";

// Core
import { TextField as MuiTextField } from "@mui/material";

function TextField(props) {
  const {
    control,
    endAdornment,
    maxLength,
    name,
    ...rest
  } = props;

  const { field: { value, ...inputProps } } = useController({
    name,
    control,
  });

  return (
    <MuiTextField
      {...inputProps}
      {...rest}
      fullWidth
      size="small"
      margin="normal"
      variant="outlined"
      value={value || ""}
      slotProps={{
        htmlInput: {
          maxLength,
        },
        inputLabel: {
          shrink: true,
          focused: false,
        },
      }}
    />
  );
}

export default TextField;
