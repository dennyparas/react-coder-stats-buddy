import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import UserList from "../../components/UserList";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { userListState, getUsersAsync } from "./UsersSlice";
import ErrorDialog from "../../components/ErrorDialog";

type ParamsProps = {
  searchParams: string;
  locationParams: string;
  sortParams: string;
  orderParams: string;
};

const UsersSearchResults: React.FC<ParamsProps> = ({
  searchParams,
  locationParams,
  sortParams,
  orderParams,
}) => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(userListState);
  const usersCurrentPage = useAppSelector(
    (state) => state.users.usersCurrentPage
  );
  const usersStatus = useAppSelector((state) => state.users.usersStatus);
  const usersError = useAppSelector((state) => state.users.usersError);
  const usersTotalCount = useAppSelector(
    (state) => state.users.usersTotalCount
  );
  const totalUsersPages = Math.ceil(usersTotalCount / 100);

  const loadMore = () => {
    dispatch(
      getUsersAsync({
        query: searchParams,
        location: locationParams,
        page: usersCurrentPage + 1,
        sort: sortParams,
        order: orderParams,
        perPage: 100,
      })
    );
  };

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        {usersTotalCount > 0 && usersStatus === "success" && (
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontFamily: "Poppins" }}
          >
            {usersTotalCount} User{usersTotalCount > 1 ? `s` : ""} found
          </Typography>
        )}
        {usersTotalCount === 0 && usersStatus === "success" && (
          <Typography
            align="center"
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontFamily: "Poppins" }}
          >
            We could not find any users matching your
            {searchParams ? ` ${searchParams}` : " query"}
          </Typography>
        )}
      </Box>

      <UserList users={users} isLoading={usersStatus === "loading"} />

      {totalUsersPages > usersCurrentPage && (
        <Stack spacing={2} direction="row">
          <Button
            color="warning"
            size="medium"
            sx={{
              margin: "20px auto",
              bgcolor: "warning.dark",
              fontFamily: "Poppins",
            }}
            onClick={loadMore}
            disabled={usersStatus === "loading"}
            variant="contained"
          >
            Load More Users
          </Button>
        </Stack>
      )}

      {usersError && <ErrorDialog error={usersError} />}
    </Container>
  );
};

export default UsersSearchResults;
