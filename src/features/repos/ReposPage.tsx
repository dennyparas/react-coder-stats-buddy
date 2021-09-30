import React, { useEffect } from "react";
import ReposSearchForm from "./ReposSearchForm";
import ReposSearchResults from "./ReposSearchResults";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import {
  clearReposResults,
  getReposAsync,
  saveReposQueryParams,
} from "./ReposSlice";

const ReposPage: React.FC = () => {
  const stateReposQueryParams = useAppSelector(
    (state) => state.repos.queryParams
  );
  const dispatch = useAppDispatch();
  const queryParams = useLocation().search;

  let searchParams = new URLSearchParams(queryParams).get("q") || "";
  let languageParams = new URLSearchParams(queryParams).get("language") || "";
  let sortParams = new URLSearchParams(queryParams).get("sort") || "";
  let orderParams = new URLSearchParams(queryParams).get("order") || "";

  const fetchData = () => {
    if (
      searchParams ||
      (languageParams && queryParams !== stateReposQueryParams)
    ) {
      const language = languageParams === "Any" ? " " : languageParams;
      dispatch(clearReposResults());
      dispatch(
        getReposAsync({
          query: searchParams,
          language: language,
          page: 1,
          sort: sortParams,
          order: orderParams,
          perPage: 100,
        })
      );
      dispatch(saveReposQueryParams(queryParams));
    }
  };

  useEffect(() => {
    if (queryParams === "") {
      dispatch(clearReposResults());
      dispatch(saveReposQueryParams(queryParams));
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, languageParams, sortParams, orderParams]);
  return (
    <>
      <ReposSearchForm
        searchParams={searchParams}
        languageParams={languageParams}
        sortParams={sortParams}
        orderParams={orderParams}
      />
      <ReposSearchResults
        searchParams={searchParams}
        languageParams={languageParams}
        sortParams={sortParams}
        orderParams={orderParams}
      />
    </>
  );
};

export default ReposPage;
