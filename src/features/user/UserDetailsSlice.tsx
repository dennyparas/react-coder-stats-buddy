import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserDetails } from "../../types/userDetailsTypes";
import {
  fetchUserDetails,
  fetchUserRepos,
} from "./../../services/userDetailsService";

const initialState: UserDetails = {
  userDetails: {
    login: "",
    avatar_url: "",
    html_url: "",
    name: "",
    company: "",
    blog: "",
    location: "",
    email: "",
    hireable: false,
    bio: "",
    twitter_username: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
  },
  userDetailsStatus: "idle",
  userDetailsNotFound: false,
  userDetailsError: false,
  userRepos: [],
  userReposStatus: "idle",
  userReposError: false,
  userId: "",
};

export const getUserDetailsAsync = createAsyncThunk(
  "users/fetchUserDetail",
  async (userId: string) => {
    const response = await fetchUserDetails(userId);
    return response.data;
  }
);

export const getUserReposAsync = createAsyncThunk(
  "users/fetchUserRepos",
  async (userId: string) => {
    const response = await fetchUserRepos(userId);
    return response.data;
  }
);

export const userDetailsSlice = createSlice({
  name: "userDetailsSlice",
  initialState,
  reducers: {
    saveUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    clearUserInfo: (state) => {
      state.userDetails = initialState.userDetails;
      state.userDetailsError = false;
      state.userDetailsStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetailsAsync.pending, (state) => {
        state.userDetailsError = false;
        state.userDetailsStatus = "loading";
      })
      .addCase(getUserDetailsAsync.fulfilled, (state, action) => {
        state.userDetailsStatus = "success";
        state.userDetails = action.payload;
      })
      .addCase(getUserDetailsAsync.rejected, (state, action) => {
        state.userDetailsNotFound =
          action.error.message === "Request failed with status code 404"
            ? true
            : false;
        state.userDetailsStatus = "failed";
        state.userDetailsError = true;
      })
      .addCase(getUserReposAsync.pending, (state) => {
        state.userReposError = false;
        state.userRepos = initialState.userRepos;
        state.userReposStatus = "loading";
      })
      .addCase(getUserReposAsync.fulfilled, (state, action) => {
        state.userReposStatus = "success";
        state.userRepos = action.payload;
      })
      .addCase(getUserReposAsync.rejected, (state, action) => {
        state.userReposStatus = "failed";
        state.userReposError = true;
      });
  },
});

export const userDetails = (state: RootState) => state.user.userDetails;
export const userRepos = (state: RootState) =>
  state.user.userRepos.filter((repo) => !repo.fork);
export const { saveUserId, clearUserInfo } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
