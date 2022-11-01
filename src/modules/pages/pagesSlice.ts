import { createSlice } from "@reduxjs/toolkit";
import { Page } from "interfaces/pageInterface";

interface pagesState {
  loadingPages: boolean;
  error: string | null;
  activePageName: Page["displayName"] | null;
}

const initialState: pagesState = {
  loadingPages: false,
  error: null,
  activePageName: null,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePageName = action.payload;
    },
  },
});

export const { setActivePage } = pagesSlice.actions;
export default pagesSlice.reducer;
