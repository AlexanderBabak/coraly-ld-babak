import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { StyledButton } from "components/reusable";
import { useEffect } from "react";
import { getUserThunk } from "modules/auth/authorizationAction";
import { signOut } from "modules/auth/authorizationSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

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
