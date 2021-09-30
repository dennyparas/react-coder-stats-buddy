import { Grid } from "@mui/material";
import React from "react";
import { User } from "../types/usersTypes";
import UserCard from "./UserCard";
import UserListSkeletonLoader from "./UserListSkeletonLoader";

type UserListProps = {
  users: User[];
  isLoading: boolean;
};

const UserList: React.FC<UserListProps> = ({ users, isLoading }) => {
  return (
    <Grid container spacing={2}>
      {users.map((user: User, index: number) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCard user={user} />
        </Grid>
      ))}
      {isLoading && <UserListSkeletonLoader />}
    </Grid>
  );
};

export default UserList;
