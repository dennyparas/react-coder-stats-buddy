import React, { useEffect } from "react";
import UsersSearchForm from "./UsersSearchForm";
import UsersSearchResults from "./UsersSearchResults";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import {
  clearUsersResults,
  getUsersAsync,
  saveUsersQueryParams,
} from "./UsersSlice";

const UsersPage: React.FC = () => {
  const stateUsersQueryParams = useAppSelector(
    (state) => state.users.queryParams
  );
  const dispatch = useAppDispatch();
  const queryParams = useLocation().search;

  let searchParams = new URLSearchParams(queryParams).get("q") || "";
  let locationParams = new URLSearchParams(queryParams).get("location") || "";
  let sortParams = new URLSearchParams(queryParams).get("sort") || "";
  let orderParams = new URLSearchParams(queryParams).get("order") || "";

  const fetchData = () => {
    if (
      searchParams ||
      (locationParams && queryParams !== stateUsersQueryParams)
    ) {
      dispatch(clearUsersResults());
      dispatch(
        getUsersAsync({
          query: searchParams,
          location: locationParams,
          page: 1,
          sort: sortParams,
          order: orderParams,
          perPage: 100,
        })
      );
      dispatch(saveUsersQueryParams(queryParams));
    }
  };

  useEffect(() => {
    if (queryParams === "") {
      dispatch(clearUsersResults());
      dispatch(saveUsersQueryParams(queryParams));
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, locationParams, sortParams, orderParams]);
  return (
    <>
      <UsersSearchForm
        searchParams={searchParams}
        locationParams={locationParams}
        sortParams={sortParams}
        orderParams={orderParams}
      />
      <UsersSearchResults
        searchParams={searchParams}
        locationParams={locationParams}
        sortParams={sortParams}
        orderParams={orderParams}
      />
    </>
  );
};

export default UsersPage;
