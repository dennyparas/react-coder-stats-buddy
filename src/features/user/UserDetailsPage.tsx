import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  getUserDetailsAsync,
  getUserReposAsync,
  saveUserId,
  clearUserInfo,
} from "./UserDetailsSlice";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const stateUserId = useAppSelector((state) => state.user.userId);

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
      <UserInfo />
      <UserRepos />
    </>
  );
};

export default UserDetailsPage;
