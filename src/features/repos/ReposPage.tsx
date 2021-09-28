import React, { useEffect } from "react";
import ReposSearchForm from "./ReposSearchForm";
import ReposSearchResults from "./ReposSearchResults";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import { clearReposResults, getReposAsync } from "./ReposSlice";

const ReposPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const queryParams = useLocation().search;

  let searchParams = new URLSearchParams(queryParams).get("q") || "";
  let languageParams = new URLSearchParams(queryParams).get("language") || "";
  let sortParams = new URLSearchParams(queryParams).get("sort") || "";
  let orderParams = new URLSearchParams(queryParams).get("order") || "";

  const fetchData = () => {
    dispatch(clearReposResults());
    if (searchParams || languageParams) {
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
    }
  };

  useEffect(() => {
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
