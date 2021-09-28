import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import RepoList from "../../components/RepoList";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { homeRepos, getHomeReposAsync } from "./../home/HomeSlice";

const HomeReposSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const repos = useAppSelector(homeRepos);
  const homeReposStatus = useAppSelector((state) => state.home.homeReposStatus);
  const homeReposError = useAppSelector((state) => state.home.homeReposError);

  useEffect(() => {
    if (!repos.length)
      dispatch(
        getHomeReposAsync({
          query: "",
          language: "",
          page: 1,
          sort: "stars",
          order: "desc",
          perPage: 9,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "25px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Most starred repos
        </Typography>
      </Box>
      <RepoList repos={repos} isLoading={homeReposStatus === "loading"} />
      {homeReposError && <h1>Error</h1>}
    </Container>
  );
};

export default HomeReposSection;
