import { useController } from "react-hook-form";
import { Fragment } from "react";

// Core
import { useTheme } from "@mui/material/styles";
import { Chip, CircularProgress, Autocomplete as Picker, Stack, TextField, Typography } from "@mui/material";

// Style
import styles from "./picker_base_field.style";

function PickerBase(props) {
  const {
    control,
    helperText,
    label,
    limit,
    loading,
    multiple = false,
    name,
    onChanged,
    options,
    required,
    setValue,
    ...rest
  } = props;

  const theme = useTheme();
  const classes = styles(theme);

  const { field: { value, ...inputProps } } = useController({
    name,
    control,
  });

  const getDefaultOptions = () => {
    if (!value) return [];
    if (multiple) {
      return (options || []).filter(option => value.includes(option.value)).map(option => ({
        value: option.value,
        textPrimary: option.textPrimary,
      }));
    }

    const selectedValue = (options || []).find(option => option.value === value);

    return {
      value: selectedValue?.value,
      textPrimary: selectedValue?.textPrimary,
      textSecondary: selectedValue?.textSecondary,
      startAdornment: selectedValue?.startAdornment,
    };
  };

  return (
    <Picker
      {...inputProps}
      {...rest}
      options={options}
      multiple={multiple}
      filterSelectedOptions
      value={getDefaultOptions()}
      getOptionLabel={option => option.textPrimary || ""}
      noOptionsText="No options"
      isOptionEqualToValue={(option, selectValue) => option.value === selectValue.value}
      onChange={(_, values) => {
        if (limit && values.length > limit) return values;
        const newValue = (values && (values.length > 0 ? values.map(v => v.value) : values.value)) || (Array.isArray(values) ? [] : null);
        if (onChanged) onChanged(values);
        return setValue(name, newValue, { shouldDirty: true, shouldValidate: true });
      }}
      renderOption={(params, option) => (
        <li {...params} key={option.value}>
          <Stack gap={1} alignItems="center">
            {option.startAdornment}
            <div>
              <Typography variant="body1">
                {option.textPrimary}
              </Typography>
              {option.textSecondary && (
                <Typography variant="body1">
                  {option.textSecondary}
                </Typography>
              )}
            </div>
          </Stack>
        </li>
      )}
      renderTags={(valueTag, getTagProps) => valueTag.map((option, index) => (
        <Chip
          {...getTagProps({ index })}
          key={option.value}
          variant="outlined"
          size="small"
          label={option.textPrimary}
        />
      ))}
      renderInput={params => (
        <TextField
          {...params}
          //! Stop adding "required" here it causes issues with submitting forms
          fullWidth
          label={(
            <Typography variant="body1" fontWeight="inherit">
              {label}
              {required && <Typography variant="inherit" display="inline" color="secondary" component="span"> *</Typography>}
            </Typography>
          )}
          size="small"
          margin="normal"
          helperText={helperText}
          placeholder={value?.length > 0 ? null : "Select"}
          slotProps={{
            input: {
              ...params.InputProps,
              onClick: event => !params.disabled && params.InputProps?.onClick?.(event),
              startAdornment: params.InputProps.startAdornment || getDefaultOptions()?.startAdornment,
              endAdornment: (
                <Fragment>
                  {loading && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            },

            htmlInput: {
              ...params.inputProps,
              autoComplete: "chrome-off",
            },

            inputLabel: {
              shrink: true,
              focused: false,
              className: `${value?.length && "MuiFormLabel-filled"} ${required && "Mui-required"}`,
            },
          }}
        />
      )}
      slotProps={{
        listbox: { sx: classes.listbox },
      }}
    />
  );
}

export default PickerBase;
