import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Languages } from "../../types/languageTypes";
import languages from "./../../data/programming-languages.json";

const initialState: Languages = {
  languages,
};

export const languagesSlice = createSlice({
  name: "languagesSlice",
  initialState,
  reducers: {},
});

export const showAllLanguages = (state: RootState) => state.languages.languages;

export default languagesSlice.reducer;
