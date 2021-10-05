import React, { useEffect } from "react";
import { useParams } from "react-router";
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

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const stateUserId = useAppSelector((state) => state.user.userId);
  const repos = useAppSelector(userRepos);
  const user = useAppSelector(userDetails);
  const userReposStatus = useAppSelector((state) => state.user.userReposStatus);
  const userDetailsStatus = useAppSelector(
    (state) => state.user.userDetailsStatus
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
      <UserInfo user={user} status={userDetailsStatus} />
      <UserCharts repos={repos} user={user} status={userReposStatus} />
      <UserRepos repos={repos} status={userReposStatus} />
    </>
  );
};

export default UserDetailsPage;
