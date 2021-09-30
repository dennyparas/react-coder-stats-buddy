import { Card, Grid, Skeleton } from "@mui/material";
import React from "react";

const UserCardSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 545, p: "10px" }} variant="outlined">
      <Skeleton variant="rectangular" width="100%" height={143} />
      <Skeleton width="85%" />
    </Card>
  );
};

const UserListSkeletonLoader: React.FC = () => {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <Grid key={i} item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCardSkeleton />
        </Grid>
      ))}
    </>
  );
};

export default UserListSkeletonLoader;
