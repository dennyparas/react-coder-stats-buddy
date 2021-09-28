import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import homeLanguages from "./../../data/top-programming-languages.json";
import { Language } from "../../types/languageTypes";
import { Repo } from "../../types/reposTypes";
import { fetchRepos } from "./../../services/reposService";

type HomeTypes = {
  homeLanguages: Language[];
  homeRepos: Repo[];
  homeReposStatus: string;
  homeReposError: boolean;
};
const initialState: HomeTypes = {
  homeLanguages,
  homeRepos: [],
  homeReposStatus: "idle",
  homeReposError: false,
};

export const getHomeReposAsync = createAsyncThunk(
  "home/fetchHomeRepos",
  async ({
    query,
    language,
    page,
    sort,
    order,
    perPage,
  }: {
    query: string;
    language: string;
    page: number;
    sort: string;
    order: string;
    perPage: number;
  }) => {
    const response = await fetchRepos(
      query,
      language,
      page,
      sort,
      order,
      perPage
    );
    return response.data;
  }
);

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeReposAsync.pending, (state) => {
        state.homeReposStatus = "loading";
      })
      .addCase(getHomeReposAsync.fulfilled, (state, action) => {
        state.homeReposStatus = "success";
        state.homeRepos = state.homeRepos.concat(action.payload.items);
      })
      .addCase(getHomeReposAsync.rejected, (state, action) => {
        state.homeReposStatus = "failed";
        state.homeReposError = true;
      });
  },
});

export const showAllTopLanguages = (state: RootState) =>
  state.home.homeLanguages;

export const homeRepos = (state: RootState) => state.home.homeRepos;

export default homeSlice.reducer;
