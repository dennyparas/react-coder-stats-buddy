import React from "react";
import { Box, Container, Typography } from "@mui/material";
import RepoList from "../../components/RepoList";
import { useAppSelector } from "../../hooks/reduxHooks";
import { userRepos } from "./UserDetailsSlice";
import ErrorDialog from "../../components/ErrorDialog";

const UserRepos: React.FC = () => {
  const repos = useAppSelector(userRepos);
  const userReposStatus = useAppSelector((state) => state.user.userReposStatus);
  const userReposError = useAppSelector((state) => state.user.userReposError);
  return (
    <>
      <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
        <Box sx={{ mt: "15px", mb: "15px" }}>
          {userReposStatus === "success" && (
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontFamily: "Poppins" }}
            >
              {repos.length > 0 ? "Top Repositories" : "User has no repository"}
            </Typography>
          )}
        </Box>

        <RepoList repos={repos} isLoading={userReposStatus === "loading"} />
      </Container>
      {userReposError && <ErrorDialog error={userReposError} />}
    </>
  );
};

export default UserRepos;
