import { createSlice } from "@reduxjs/toolkit";
import { ICard, IPage, ITableData } from "api/process/processDto";
import { getCardsThunk, getTableDataThunk } from "modules/process/processThunk";

interface pagesState {
  loadingCards: boolean;
  errorCards: string | undefined;
  activePageName: IPage["displayName"] | null;
  processCards: ICard[];
  isDrawerOpen: boolean;
  isCardOpen: boolean;
  tableData: ITableData[];
  loadingTableData: boolean;
  errorTableData: string | undefined;
}

const initialState: pagesState = {
  loadingCards: false,
  errorCards: undefined,
  activePageName: null,
  processCards: [],
  isDrawerOpen: false,
  isCardOpen: false,
  tableData: [],
  loadingTableData: false,
  errorTableData: undefined,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePageName = action.payload;
    },
    setDrawerOpen(state, action) {
      state.isDrawerOpen = action.payload;
    },
    setCardOpen(state, action) {
      state.isCardOpen = action.payload;
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
    // getTableData
    builder.addCase(getTableDataThunk.pending, (state) => {
      state.loadingTableData = true;
      state.errorTableData = "";
    });
    builder.addCase(getTableDataThunk.fulfilled, (state, action) => {
      state.loadingTableData = false;
      state.tableData = action.payload;
    });
    builder.addCase(getTableDataThunk.rejected, (state, action) => {
      state.loadingTableData = false;
      state.errorTableData = action.error.message;
    });
  },
});

export const { setActivePage, setDrawerOpen, setCardOpen } = pagesSlice.actions;
export default pagesSlice.reducer;
