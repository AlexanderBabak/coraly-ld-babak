import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk } from "./authorizationAction";
import { IUserResponse } from "api/auth/authDto";

interface IAuth {
  user: IUserResponse | null;
  loadingAuth: boolean;
  errorAuth: string | undefined;
}

const initialState: IAuth = {
  user: JSON.parse(`${localStorage.getItem("user")}`) || null,
  loadingAuth: false,
  errorAuth: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    //getUser
    builder.addCase(getUserThunk.pending, (state) => {
      state.loadingAuth = true;
      state.errorAuth = "";
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.loadingAuth = false;
      state.user = action.payload;
    });
    builder.addCase(getUserThunk.rejected, (state, action) => {
      state.loadingAuth = false;
      state.errorAuth = action.error.message;
    });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
