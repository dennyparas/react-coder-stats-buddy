import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import RepoList from "../../components/RepoList";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { homeRepos, getHomeReposAsync } from "./../home/HomeSlice";
import { NavLink } from "react-router-dom";

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
          color="text.primary"
          gutterBottom
          variant="h6"
          component={NavLink}
          sx={{ fontFamily: "Poppins", textDecoration: "none" }}
          to={`/repos?language=Any&sort=stars&order=desc`}
        >
          Most starred repos
        </Typography>
      </Box>
      <RepoList repos={repos} isLoading={homeReposStatus === "loading"} />
      {homeReposError && (
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Error loading repos. Please try again later.
        </Typography>
      )}
    </Container>
  );
};

export default HomeReposSection;
