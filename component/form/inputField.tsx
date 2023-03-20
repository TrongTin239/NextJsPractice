import { TextField, TextFieldProps } from "@mui/material";
import { Control, useController } from "react-hook-form";

export type InputFieldProps = TextFieldProps & {
  name: string;
  label?: string;
  control: Control<any>;
};
export function InputField({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value: externalValue,
  ref: externalRef,
  ...rest
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      id="outlined-basic"
      label={name}
      fullWidth
      size="small"
      name={name}
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={!!error}
      helperText={error?.message}
      inputRef={ref}
      {...rest}
    ></TextField>
  );
}
