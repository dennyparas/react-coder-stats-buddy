import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
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
import { useAppSelector } from "../../hooks/reduxHooks";
import { userDetails } from "./UserDetailsSlice";
import ErrorDialog from "../../components/ErrorDialog";

const useStyles = makeStyles(() => ({
  GoIcon: {
    verticalAlign: "-2px",
    marginRight: "5px",
  },
  image: {
    height: "auto",
    width: "100%",
    margin: "auto",
    display: "block",
  },
}));

const UserInfo: React.FC = () => {
  const classes = useStyles();
  const userDetailsStatus = useAppSelector(
    (state) => state.user.userDetailsStatus
  );
  const userDetailsError = useAppSelector(
    (state) => state.user.userDetailsError
  );

  const user = useAppSelector(userDetails);

  return (
    <>
      {userDetailsStatus === "loading" && <UserInfoSkeletorLoader />}
      <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <img
              src={`${user.avatar_url}`}
              alt={user.login}
              loading="lazy"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            {user.name && (
              <Typography
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
            {user.login && (
              <Typography
                sx={{
                  color: "#00000099",
                  fontFamily: "Poppins",
                  fontWeight: "fontWeightMedium",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#000",
                  },
                }}
                variant="h6"
                color="text.secondary"
              >
                <GoOctoface className={classes.GoIcon} />
                {user.login}
              </Typography>
            )}
            {user.bio && (
              <Typography
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
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
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
            <Box
              sx={{
                mt: "10px",
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                flexWrap: "wrap",
              }}
            >
              {user.public_repos > 0 && (
                <Card
                  sx={{
                    width: { xs: "45%", sm: "22%" },
                    mr: "10px",
                    mt: "10px",
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      align="center"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Repositories
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      variant="h5"
                      align="center"
                      component="div"
                    >
                      {user.public_repos}
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {user.followers > 0 && (
                <Card
                  sx={{
                    width: { xs: "45%", sm: "22%" },
                    mr: "10px",
                    mt: "10px",
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      align="center"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Followers
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      variant="h5"
                      align="center"
                      component="div"
                    >
                      {user.followers}
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {user.following > 0 && (
                <Card
                  sx={{
                    width: { xs: "45%", sm: "22%" },
                    mr: "10px",
                    mt: "10px",
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      align="center"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Following
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      variant="h5"
                      align="center"
                      component="div"
                    >
                      {user.following}
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {user.public_gists > 0 && (
                <Card
                  sx={{
                    width: { xs: "45%", sm: "22%" },
                    mr: "10px",
                    mt: "10px",
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      align="center"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Gists
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "fontWeightMedium",
                      }}
                      variant="h5"
                      align="center"
                      component="div"
                    >
                      {user.public_gists}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
      {userDetailsError && <ErrorDialog error={userDetailsError} />}
    </>
  );
};

export default UserInfo;
