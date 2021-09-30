import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import RepoList from "../../components/RepoList";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { repoListState, getReposAsync } from "./ReposSlice";
import ErrorDialog from "../../components/ErrorDialog";

type ParamsProps = {
  searchParams: string;
  languageParams: string;
  sortParams: string;
  orderParams: string;
};

const ReposSearchResults: React.FC<ParamsProps> = ({
  searchParams,
  languageParams,
  sortParams,
  orderParams,
}) => {
  const dispatch = useAppDispatch();

  const repos = useAppSelector(repoListState);
  const reposCurrentPage = useAppSelector(
    (state) => state.repos.reposCurrentPage
  );
  const reposStatus = useAppSelector((state) => state.repos.reposStatus);
  const reposError = useAppSelector((state) => state.repos.reposError);
  const reposTotalCount = useAppSelector(
    (state) => state.repos.reposTotalCount
  );
  const totalReposPages = Math.ceil(reposTotalCount / 100);

  const loadMore = () => {
    dispatch(
      getReposAsync({
        query: searchParams,
        language: languageParams,
        page: reposCurrentPage + 1,
        sort: sortParams,
        order: orderParams,
        perPage: 100,
      })
    );
  };

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        {reposTotalCount > 0 && reposStatus === "success" && (
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontFamily: "Poppins" }}
          >
            {reposTotalCount} Repository results
          </Typography>
        )}
        {reposTotalCount === 0 && reposStatus === "success" && (
          <Typography
            align="center"
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontFamily: "Poppins" }}
          >
            We could not find any repositories matching your
            {searchParams ? ` ${searchParams}` : " query"}
          </Typography>
        )}
      </Box>

      <RepoList repos={repos} isLoading={reposStatus === "loading"} />

      {totalReposPages > reposCurrentPage && (
        <Stack spacing={2} direction="row">
          <Button
            color="warning"
            size="medium"
            sx={{
              margin: "20px auto",
              bgcolor: "warning.dark",
              fontFamily: "Poppins",
            }}
            onClick={loadMore}
            disabled={reposStatus === "loading"}
            variant="contained"
          >
            Load More Repositories
          </Button>
        </Stack>
      )}

      {reposError && <ErrorDialog error={reposError} />}
    </Container>
  );
};

export default ReposSearchResults;
