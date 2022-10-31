import { ResetParams } from "api/auth/authDto";
import { useForm } from "react-hook-form";
import { ResetCompleteForm } from "./components/ResetCompleteForm";

export const ResetCompletePage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResetParams>();

  const onSubmit = () => {};
  return (
    <ResetCompleteForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
    />
  );
};
