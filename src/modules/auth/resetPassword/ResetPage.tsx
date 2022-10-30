import { useForm } from "react-hook-form";
import { ResetForm } from "./components/ResetForm";

export const ResetPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    reset();
  };
  return (
    <ResetForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
    />
  );
};
