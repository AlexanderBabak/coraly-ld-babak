import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../api/auth/authService";

export const getUserThunk = createAsyncThunk("users/1", async () => {
  const response = await getUser();
  localStorage.setItem("user", JSON.stringify(response));
  return response;
});
