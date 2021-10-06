import React from "react";
import { Box, Container, Typography } from "@mui/material";
import RepoList from "../../components/RepoList";

import { Repo } from "../../types/reposTypes";

type ReposProps = {
  repos: Repo[];
  status: string;
};

const UserRepos: React.FC<ReposProps> = ({ repos, status }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
        <Box sx={{ mt: "15px", mb: "15px" }}>
          {status === "success" && (
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontFamily: "Poppins" }}
            >
              {repos.length > 0
                ? `Pushed Repos (${repos.length})`
                : "User has no pushed repository"}
            </Typography>
          )}
        </Box>

        <RepoList repos={repos} isLoading={status === "loading"} />
      </Container>
    </>
  );
};

export default UserRepos;
