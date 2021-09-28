import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homeReducer from "./../features/home/HomeSlice";
import languagesReducer from "./../features/languages/LanguagesSlice";
import reposReducer from "./../features/repos/ReposSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    languages: languagesReducer,
    repos: reposReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
