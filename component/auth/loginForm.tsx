import { Button, CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "component/form/inputField";
import { MainLayout } from "component/layout/main.page";
import { LoginPayload } from "models/auth.page";
import Reacr from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export interface LoginFormProps {
  onSubmit: (payload: LoginPayload) => void;
}
export function LoginFrom({ onSubmit }: LoginFormProps) {
  const schema = yup
    .object({
      username: yup
        .string()
        .required("Please enter your username")
        .min(4, "username required at least 4 character"),
      password: yup
        .string()
        .required("Please enter your username")
        .min(6, "password required at least 6 character"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  async function handleLoginSubmit(payload: LoginPayload) {
    await onSubmit?.(payload);
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(handleLoginSubmit)}
      textAlign="right"
    >
      <InputField name="username" control={control} />
      <InputField type="password" name="password" control={control} />
      <Button
        disabled={isSubmitting}
        startIcon={
          isSubmitting ? (
            <CircularProgress color="inherit" size={"1em"} />
          ) : null
        }
        type="submit"
        variant="contained"
        sx={{ mt: 2 }}
      >
        {" "}
        Login{" "}
      </Button>
    </Box>
  );
}
