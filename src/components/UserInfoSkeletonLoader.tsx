import { Container, Grid, Box, Skeleton } from "@mui/material";
import React from "react";

const UserInfoSkeletorLoader: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Skeleton
            variant="rectangular"
            width="90%"
            height={263}
            sx={{ margin: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Skeleton width="35%" />
          <Skeleton width="25%" />
          <Skeleton width="85%" />
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "flex-start",
            }}
          >
            <Skeleton width="25%" sx={{ mr: "10px", mt: "10px" }} />
            <Skeleton width="25%" sx={{ mr: "10px", mt: "10px" }} />
            <Skeleton width="25%" sx={{ mr: "10px", mt: "10px" }} />
            <Skeleton width="25%" sx={{ mr: "10px", mt: "10px" }} />
          </Box>
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px" }}
              width="22%"
              height={123}
            />
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px" }}
              width="22%"
              height={123}
            />
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px" }}
              width="22%"
              height={123}
            />
            <Skeleton
              variant="rectangular"
              sx={{ mr: "10px", mt: "10px" }}
              width="22%"
              height={123}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserInfoSkeletorLoader;
