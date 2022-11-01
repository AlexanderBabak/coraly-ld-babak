import { configureStore } from "@reduxjs/toolkit";
import userReducer from "modules/auth/authorizationSlice";
import pagesReducer from "modules/pages/pagesSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
