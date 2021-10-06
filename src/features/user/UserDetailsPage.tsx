import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import UserCharts from "./UserCharts";
import {
  getUserDetailsAsync,
  getUserReposAsync,
  saveUserId,
  clearUserInfo,
} from "./UserDetailsSlice";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";
import { userRepos, userDetails } from "./UserDetailsSlice";
import { Typography } from "@mui/material";

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const stateUserId = useAppSelector((state) => state.user.userId);
  const repos = useAppSelector(userRepos);
  const user = useAppSelector(userDetails);
  const userReposStatus = useAppSelector((state) => state.user.userReposStatus);
  const userDetailsStatus = useAppSelector(
    (state) => state.user.userDetailsStatus
  );
  const userDetailsNotFound = useAppSelector(
    (state) => state.user.userDetailsNotFound
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId !== stateUserId) {
      dispatch(clearUserInfo());
      dispatch(getUserDetailsAsync(userId));
      dispatch(getUserReposAsync(userId));
      dispatch(saveUserId(userId));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {!userId && <Redirect to="/users" />}
      <UserInfo user={user} status={userDetailsStatus} />
      <UserCharts repos={repos} user={user} status={userReposStatus} />
      <UserRepos repos={repos} status={userReposStatus} />
      {userDetailsNotFound && (
        <Typography
          align="center"
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          User not found
        </Typography>
      )}
    </>
  );
};

export default UserDetailsPage;
