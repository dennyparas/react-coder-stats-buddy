import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Repos } from "../../types/reposTypes";
import { fetchRepos } from "./../../services/reposService";

const initialState: Repos = {
  repos: [],
  reposStatus: "idle",
  reposError: false,
  reposTotalCount: 0,
  reposCurrentPage: 0,
  queryParams: "",
};

export const getReposAsync = createAsyncThunk(
  "repos/fetchRepos",
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

export const reposSlice = createSlice({
  name: "reposSlice",
  initialState,
  reducers: {
    clearReposResults: (state) => {
      state.repos = [];
      state.reposTotalCount = 0;
      state.reposError = false;
      state.reposStatus = "idle";
      state.reposCurrentPage = 0;
    },
    saveReposQueryParams: (state, action: PayloadAction<string>) => {
      state.queryParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReposAsync.pending, (state) => {
        state.reposStatus = "loading";
        state.reposError = false;
      })
      .addCase(getReposAsync.fulfilled, (state, action) => {
        state.reposStatus = "success";
        state.reposTotalCount = action.payload.total_count;
        state.repos = state.repos.concat(action.payload.items);
        state.reposCurrentPage += 1;
      })
      .addCase(getReposAsync.rejected, (state, action) => {
        state.reposStatus = "failed";
        state.reposError = true;
      });
  },
});

export const { clearReposResults, saveReposQueryParams } = reposSlice.actions;

export const repoListState = (state: RootState) => state.repos.repos;

export default reposSlice.reducer;
