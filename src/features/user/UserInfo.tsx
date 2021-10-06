import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { format, parseISO } from "date-fns";
import React from "react";

import {
  GoOctoface,
  GoLocation,
  GoBriefcase,
  GoBrowser,
  GoCalendar,
} from "react-icons/go";
import { makeStyles } from "@mui/styles";
import UserInfoSkeletorLoader from "../../components/UserInfoSkeletonLoader";

const useStyles = makeStyles(() => ({
  GoIcon: {
    verticalAlign: "-2px",
    marginRight: "5px",
  },
  image: {
    height: "auto",
    width: "100%",
    maxWidth: "30%",
    margin: "auto",
    display: "block",
  },
}));

type UserInfoProps = {
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    hireable: boolean;
    bio?: string;
    twitter_username?: string;
    created_at: string;
  };
  status: string;
};

const UserInfo: React.FC<UserInfoProps> = ({ user, status }) => {
  const classes = useStyles();

  return (
    <>
      {status === "loading" && <UserInfoSkeletorLoader />}
      {status === "success" && (
        <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <img
                src={`${user.avatar_url}`}
                alt={user.login}
                loading="lazy"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {user.name && (
                <Typography
                  align="center"
                  sx={{
                    color: "#000",
                    fontFamily: "Poppins",
                    fontWeight: "fontWeightMedium",
                    textDecoration: "none",
                  }}
                  variant="h5"
                  color="#000"
                >
                  {user.name}
                </Typography>
              )}
              {user.bio && (
                <Typography
                  align="center"
                  sx={{
                    pt: "10px",
                    color: "#00000099",
                    fontFamily: "Poppins",
                    fontWeight: "fontWeightMedium",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#000",
                    },
                  }}
                  variant="body1"
                  color="text.secondary"
                >
                  {user.bio}
                </Typography>
              )}
              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {user.login && (
                  <Typography
                    component={Button}
                    href={user.html_url}
                    sx={{
                      pt: "10px",
                      mr: "10px",
                      mt: "10px",
                      color: "#00000099",
                      fontFamily: "Poppins",
                      textTransform: "lowercase",
                      fontWeight: "fontWeightMedium",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#000",
                        bgcolor: "#fff",
                      },
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    <GoOctoface className={classes.GoIcon} />
                    {user.login}
                  </Typography>
                )}
                {user.created_at && (
                  <Typography
                    sx={{
                      pt: "10px",
                      mr: "10px",
                      mt: "10px",
                      color: "#00000099",
                      fontFamily: "Poppins",
                      fontWeight: "fontWeightMedium",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#000",
                      },
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    <GoCalendar className={classes.GoIcon} />
                    Joined Github{" "}
                    {format(parseISO(user.created_at), "MMMM d, yyyy")}
                  </Typography>
                )}
                {user.location && (
                  <Typography
                    sx={{
                      pt: "10px",
                      mr: "10px",
                      mt: "10px",
                      color: "#00000099",
                      fontFamily: "Poppins",
                      fontWeight: "fontWeightMedium",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#000",
                      },
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    <GoLocation className={classes.GoIcon} />
                    {user.location}
                  </Typography>
                )}

                {user.blog && (
                  <Typography
                    sx={{
                      pt: "10px",
                      mr: "10px",
                      mt: "10px",
                      color: "#00000099",
                      fontFamily: "Poppins",
                      fontWeight: "fontWeightMedium",
                      textDecoration: "none",
                      textTransform: "lowercase",
                      "&:hover": {
                        color: "#000",
                      },
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    <GoBrowser className={classes.GoIcon} />
                    {user.blog}
                  </Typography>
                )}
                {user.company && (
                  <Typography
                    sx={{
                      pt: "10px",
                      mr: "10px",
                      mt: "10px",
                      color: "#00000099",
                      fontFamily: "Poppins",
                      fontWeight: "fontWeightMedium",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#000",
                      },
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    <GoBriefcase className={classes.GoIcon} />
                    {user.company}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default UserInfo;
