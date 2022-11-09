import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCards, getTableData } from "api/process/processService";

export const getCardsThunk = createAsyncThunk("processCards", async () => {
  const response = await getCards();
  return response;
});

export const getTableDataThunk = createAsyncThunk("tabledata", async () => {
  const response = await getTableData();
  return response;
});
