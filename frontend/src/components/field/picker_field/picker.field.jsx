// Core
import PickerBase from "./picker_base.field";

function PickerField(props) {
  const {
    options,
    ...rest
  } = props;

  const getOptions = () => {
    if (!options) return [];

    return options.map(option => ({
      value: option.value,
      textPrimary: option.textPrimary,
      textSecondary: option.textSecondary || "",
    }));
  };

  return (
    <PickerBase
      {...rest}
      disableClearable
      options={getOptions()}
    />
  );
}

export default PickerField;
