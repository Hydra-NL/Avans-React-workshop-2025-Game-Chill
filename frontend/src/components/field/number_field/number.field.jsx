import { useController } from "react-hook-form";

// Core
import { TextField as MuiTextField } from "@mui/material";

function NumberField(props) {
  const {
    control,
    maxLength,
    name,
    ...rest
  } = props;

  const { field: { onChange, value, ...inputProps } } = useController({
    name,
    control,
  });

  /* Only allow digits */
  const handleChange = newValue => (!newValue || /^[\d]*$/.test(newValue)) && onChange(newValue || null);

  return (
    <MuiTextField
      {...inputProps}
      {...rest}
      fullWidth
      size="small"
      margin="normal"
      variant="outlined"
      value={value ?? ""}
      onChange={event => handleChange(Number(event.target.value))}
      onPaste={event => {
        event.preventDefault();
        const newValue = parseInt(event.clipboardData.getData("text").replace(/\.|,/g, ""), 10);
        if (!Number.isNaN(newValue)) handleChange(newValue);
      }}
      slotProps={{
        htmlInput: {
          inputMode: "numeric",
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

export default NumberField;
