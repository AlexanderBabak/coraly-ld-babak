import { createSlice } from "@reduxjs/toolkit";
import { ICard, IPage } from "api/process/processDto";
import { getCardsThunk } from "modules/process/processThunk";

interface pagesState {
  loadingCards: boolean;
  errorCards: string | undefined;
  activePageName: IPage["displayName"] | null;
  processCards: ICard[];
}

const initialState: pagesState = {
  loadingCards: false,
  errorCards: undefined,
  activePageName: null,
  processCards: [],
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePageName = action.payload;
    },
  },
  extraReducers: (builder) => {
    //getCards
    builder.addCase(getCardsThunk.pending, (state) => {
      state.loadingCards = true;
      state.errorCards = "";
    });
    builder.addCase(getCardsThunk.fulfilled, (state, action) => {
      state.loadingCards = false;
      state.processCards = action.payload;
    });
    builder.addCase(getCardsThunk.rejected, (state, action) => {
      state.loadingCards = false;
      state.errorCards = action.error.message;
    });
  },
});

export const { setActivePage } = pagesSlice.actions;
export default pagesSlice.reducer;
