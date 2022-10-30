import { useForm } from "react-hook-form";
import { ResetCompleteForm } from "./components/ResetCompleteForm";

export const ResetCompletePage = () => {
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
    <ResetCompleteForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
    />
  );
};
