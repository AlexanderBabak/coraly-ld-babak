export type LoginSubmitProps = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => void;

export type RegisterSubmitProps = ({ email }: { email: string }) => void;

export type CompleteSubmitProps = ({ password }: { password: string }) => void;
