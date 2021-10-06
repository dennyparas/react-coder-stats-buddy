import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import UserList from "../../components/UserList";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { homeUsers, getHomeUsersAsync } from "./../home/HomeSlice";
import { NavLink } from "react-router-dom";

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
          language: "",
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
          color="text.primary"
          gutterBottom
          variant="h6"
          component={NavLink}
          sx={{ fontFamily: "Poppins", textDecoration: "none" }}
          to={`users?language=Any&order=desc`}
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
