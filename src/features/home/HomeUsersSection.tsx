import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import UserList from "../../components/UserList";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { homeUsers, getHomeUsersAsync } from "./../home/HomeSlice";

const HomeUsersSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(homeUsers);
  const homeUsersStatus = useAppSelector((state) => state.home.homeUsersStatus);
  const homeUsersError = useAppSelector((state) => state.home.homeUsersError);

  useEffect(() => {
    if (!users.length)
      dispatch(
        getHomeUsersAsync({
          query: "",
          location: "",
          page: 1,
          sort: "followers",
          order: "desc",
          perPage: 12,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Most Followed Users
        </Typography>
      </Box>
      <UserList users={users} isLoading={homeUsersStatus === "loading"} />
      {homeUsersError && (
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Error loading users. Please try again later.
        </Typography>
      )}
    </Container>
  );
};

export default HomeUsersSection;
