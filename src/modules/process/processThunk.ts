import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCards } from "api/process/processService";

export const getCardsThunk = createAsyncThunk("processCards", async () => {
  const response = await getCards();
  return response;
});
