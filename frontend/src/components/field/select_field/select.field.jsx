import { useController } from "react-hook-form";

// Core
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

// Style
import styles from "./select_field.style";

function SelectField(props) {
  const {
    control,
    label,
    loading,
    name,
    onChanged,
    options = [],
    required,
    ...rest
  } = props;

  const theme = useTheme();
  const classes = styles(theme);

  const { field: { onChange, value, ...inputProps } } = useController({
    name,
    control,
  });

  return (
    <FormControl margin="normal" fullWidth>
      <InputLabel shrink required={required} focused={false}>
        {label}
      </InputLabel>
      <Select
        {...inputProps}
        {...rest}
        value={value ?? ""}
        required={required}
        label={label}
        size="small"
        displayEmpty
        fullWidth
        notched
        MenuProps={{ sx: classes.menu }}
        onChange={event => {
          onChange(event.target.value);
          if (onChanged) onChanged(event.target.value);
        }}
      >
        {(options || []).map(item => (
          <MenuItem
            key={item.value || `${item.value}-${name}`}
            value={(item.value === 0 ? "0" : item.value)}
          >
            <div>
              <Typography variant="body1">
                {item.textPrimary}
              </Typography>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
