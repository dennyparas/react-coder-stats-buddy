import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import UserCard from "../../components/UserCard";

const HomeUsersSection: React.FC = () => {
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
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <UserCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeUsersSection;
