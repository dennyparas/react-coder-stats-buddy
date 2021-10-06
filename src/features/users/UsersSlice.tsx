import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Users } from "../../types/usersTypes";
import { fetchUsers } from "./../../services/usersService";

const initialState: Users = {
  users: [],
  usersStatus: "idle",
  usersError: false,
  usersTotalCount: 0,
  usersCurrentPage: 0,
  queryParams: "",
};

export const getUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async ({
    query,
    location,
    language,
    page,
    sort,
    order,
    perPage,
  }: {
    query: string;
    location: string;
    language: string;
    page: number;
    sort: string;
    order: string;
    perPage: number;
  }) => {
    const response = await fetchUsers(
      query,
      location,
      language,
      page,
      sort,
      order,
      perPage
    );
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    clearUsersResults: (state) => {
      state.users = [];
      state.usersTotalCount = 0;
      state.usersError = false;
      state.usersStatus = "idle";
      state.usersCurrentPage = 0;
    },
    saveUsersQueryParams: (state, action: PayloadAction<string>) => {
      state.queryParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.usersError = false;
        state.usersStatus = "loading";
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.usersStatus = "success";
        state.usersTotalCount = action.payload.total_count;
        state.users = state.users.concat(action.payload.items);
        state.usersCurrentPage += 1;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.usersStatus = "failed";
        state.usersError = true;
      });
  },
});

export const { clearUsersResults, saveUsersQueryParams } = usersSlice.actions;

export const userListState = (state: RootState) => state.users.users;

export default usersSlice.reducer;
