import { spawn } from "child_process";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import * as yup from "yup";

interface FormValues {
  email: "string";
  password: "string";
}
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});
export default function IndexReactHook() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    router.push("/");
  };
  return (
    <div>
      <h1>React Hook Form</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          defaultValue="trongtin3311@gmail.com"
          {...register("email")}
        />
        <br />
        <br />
        <input type="password" {...register("password", { required: true })} />
        <br />
        {errors.password && <span>This filde be required!!!</span>}
        <br />

        <button type="submit"> Send</button>
      </form>
    </div>
  );
}
