import { Container, Grid, Box, Skeleton } from "@mui/material";
import React from "react";

const UserInfoSkeletorLoader: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Skeleton
            variant="rectangular"
            sx={{
              margin: "auto",
              maxWidth: "30%",
              width: "100%",
              height: { xs: "100px", sm: "263px" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Skeleton width="35%" sx={{ margin: "auto" }} />
          <Skeleton width="85%" sx={{ margin: "auto" }} />
          <Skeleton width="55%" sx={{ margin: "auto" }} />
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px", width: { xs: "45%", md: "23.5%" } }}
              height={123}
            />
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px", width: { xs: "45%", md: "23.5%" } }}
              height={123}
            />
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px", width: { xs: "45%", md: "23.5%" } }}
              height={123}
            />
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px", width: { xs: "45%", md: "23.5%" } }}
              height={123}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserInfoSkeletorLoader;
