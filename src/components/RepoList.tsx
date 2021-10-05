import { Grid } from "@mui/material";
import React from "react";
import { Repo } from "../types/reposTypes";
import RepoCard from "./RepoCard";
import RepoListSkeletonLoader from "./RepoListSkeletonLoader";

type RepoListProps = {
  repos: Repo[];
  isLoading: boolean;
};

const RepoList: React.FC<RepoListProps> = ({ repos, isLoading }) => {
  return (
    <Grid container spacing={2}>
      {repos.length > 0 &&
        repos.map((repo: Repo, index: number) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={4}>
            <RepoCard repo={repo} />
          </Grid>
        ))}
      {isLoading && <RepoListSkeletonLoader />}
    </Grid>
  );
};

export default RepoList;
