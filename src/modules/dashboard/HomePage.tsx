import { useNavigate } from "react-router-dom";
import { StyledButton } from "components/reusable";
import { useEffect } from "react";
import { getUserThunk } from "modules/auth/authorizationAction";
import { signOut } from "modules/auth/authorizationSlice";
import { useAppDispatch } from "redux/reduxType";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <>
      <h1>Hello</h1>
      <StyledButton
        text="Log out"
        fullWidth={false}
        onClick={() => {
          dispatch(signOut());
          navigate("/login");
        }}
      />
    </>
  );
};
