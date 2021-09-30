import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import homeLanguages from "./../../data/programming-languages.json";
import { Language } from "../../types/languageTypes";
import { Repo } from "../../types/reposTypes";
import { User } from "../../types/usersTypes";
import { fetchRepos } from "./../../services/reposService";
import { fetchUsers } from "../../services/usersService";

type HomeTypes = {
  homeLanguages: Language[];
  homeRepos: Repo[];
  homeUsers: User[];
  homeReposStatus: string;
  homeReposError: boolean;
  homeUsersStatus: string;
  homeUsersError: boolean;
};
const initialState: HomeTypes = {
  homeLanguages: homeLanguages,
  homeRepos: [],
  homeReposStatus: "idle",
  homeReposError: false,
  homeUsers: [],
  homeUsersStatus: "idle",
  homeUsersError: false,
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

export const getHomeUsersAsync = createAsyncThunk(
  "home/fetchHomeUsers",
  async ({
    query,
    location,
    page,
    sort,
    order,
    perPage,
  }: {
    query: string;
    location: string;
    page: number;
    sort: string;
    order: string;
    perPage: number;
  }) => {
    const response = await fetchUsers(
      query,
      location,
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
      })
      .addCase(getHomeUsersAsync.pending, (state) => {
        state.homeUsersStatus = "loading";
      })
      .addCase(getHomeUsersAsync.fulfilled, (state, action) => {
        state.homeUsersStatus = "success";
        state.homeUsers = state.homeUsers.concat(action.payload.items);
      })
      .addCase(getHomeUsersAsync.rejected, (state, action) => {
        state.homeUsersStatus = "failed";
        state.homeUsersError = true;
      });
  },
});

export const showPopularLanguages = (state: RootState) =>
  state.home.homeLanguages.filter((language) => language.popular === "true");

export const homeRepos = (state: RootState) => state.home.homeRepos;
export const homeUsers = (state: RootState) => state.home.homeUsers;

export default homeSlice.reducer;
