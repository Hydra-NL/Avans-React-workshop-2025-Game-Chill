import { useController } from "react-hook-form";

// Core
import { InputAdornment, TextField as MuiTextField } from "@mui/material";

function NumberField(props) {
  const {
    control,
    endAdornment,
    helperText,
    maxLength,
    name,
    startAdornment,
    ...rest
  } = props;

  const { formState: { errors }, field: { onChange, value, ...inputProps } } = useController({
    name,
    control,
  });

  /* Only allow digits */
  const handleChange = newValue => (!newValue || /^[\d]*$/.test(newValue)) && onChange(newValue || null);
  const errorText = errors?.[name];

  // TODO: Remove this try to find a better way to handle this
  const errorContext = errorText?.message && typeof errorText.message === "object" && { context: errorText.message.context };

  return (
    <MuiTextField
      {...inputProps}
      {...rest}
      fullWidth
      size="small"
      margin="normal"
      variant="outlined"
      error={!!errorText}
      value={value ?? ""}
      onChange={event => handleChange(event.target.value)}
      helperText={errorContext || (errorText && errorText.message) || helperText}
      onPaste={event => {
        event.preventDefault();
        const newValue = parseInt(event.clipboardData.getData("text").replace(/\.|,/g, ""), 10);
        if (!Number.isNaN(newValue)) handleChange(newValue);
      }}
      slotProps={{
        input: {
          startAdornment: startAdornment && (
            <InputAdornment position="start">
              {startAdornment}
            </InputAdornment>
          ),
          endAdornment: endAdornment && (
            <InputAdornment position="end">
              {endAdornment}
            </InputAdornment>
          ),
        },

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
