import { Card, Grid, Skeleton } from "@mui/material";
import React from "react";

const RepoCardSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 545, p: "10px" }} variant="outlined">
      <Skeleton width="80%" />
      <Skeleton width="85%" />
      <Skeleton width="70%" />
      <Skeleton width="70%" />
      <Skeleton width="30%" />
    </Card>
  );
};

const RepoListSkeletonLoader: React.FC = () => {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => (
        <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={4}>
          <RepoCardSkeleton />
        </Grid>
      ))}
    </>
  );
};

export default RepoListSkeletonLoader;
