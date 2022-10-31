import { LoginParams } from "api/auth/authDto";
import { useForm } from "react-hook-form";
import { ResetForm } from "./components/ResetForm";

export const ResetPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginParams>();

  const onSubmit = () => {};
  return (
    <ResetForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
    />
  );
};
