import { useForm } from "react-hook-form";
import { ResetEmailForm } from "./components/ResetEmailForm";

export const ResetEmailPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = ({ name, password }) => {
    console.log(name, password);
    reset();
  };
  return (
    <ResetEmailForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
    />
  );
};
