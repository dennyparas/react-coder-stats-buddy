import PieChart from "./charts/PieChart";
import { Container, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import DoughnutChart from "./charts/DoughnutChart";
import BarVerticalChart from "./charts/BarVerticalChart";
import { Repo } from "../../types/reposTypes";
import StatsCard from "../../components/StatsCard";
import BarHorizontalChart from "./charts/BarHorizontalChart";

type ChartsProps = {
  repos: Repo[];
  status: string;
  user: {
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    name: string;
  };
};

type LanguageProps = {
  [language: string]: { label: string; value: number; stars: number };
};

const UserCharts: React.FC<ChartsProps> = ({ repos, user, status }) => {
  const languages = repos.reduce<LanguageProps>((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsedLanguages = Object.values(languages).sort((a, b) => {
    return b.value - a.value;
  });

  const mostStarsPerLanguage = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .filter((lang) => lang.stars > 0)
    .map((item) => {
      return { ...item, value: item.stars };
    });

  const forkedRepos = repos
    .filter((repo) => repo.forks_count)
    .sort((a, b) => b.forks_count - a.forks_count);

  const getTopForkedRepos = forkedRepos.slice(0, 10);

  const getTotalForkedRepos = forkedRepos.reduce(
    (sum, a) => sum + a.forks_count,
    0
  );

  const starredRepos = repos
    .filter((repo) => repo.stargazers_count)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  const getTopStarredRepos = starredRepos.slice(0, 10);

  const getTotalStarredRepos = starredRepos.reduce(
    (sum, a) => sum + a.stargazers_count,
    0
  );

  return (
    <>
      <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {user.public_repos > 0 && (
            <StatsCard
              title="Public Repos (Pushed & Fork)"
              stats={user.public_repos}
            />
          )}
          {user.followers > 0 && (
            <StatsCard title="Followers" stats={user.followers} />
          )}
          {user.following > 0 && (
            <StatsCard title="Following" stats={user.following} />
          )}
          {user.public_gists > 0 && (
            <StatsCard title="Gist" stats={user.public_gists} />
          )}
        </Box>
        {repos.length > 0 && (
          <>
            <Typography
              align="center"
              sx={{
                mt: "20px",
                fontFamily: "Poppins",
                fontWeight: "fontWeightMedium",
              }}
              color="text.secondary"
              gutterBottom
            >
              The stats of {user.name} below are based on the latest{" "}
              {repos.length} pushed repos
            </Typography>
            <Box
              sx={{
                mt: "10px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Card
                sx={{
                  width: { xs: "100%", md: "36%" },
                  mr: "10px",
                  mt: "10px",
                  pl: "50px",
                  pr: "50px",
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
                    Main Languages
                  </Typography>
                  {mostUsedLanguages.length > 0 ? (
                    <PieChart data={mostUsedLanguages} />
                  ) : (
                    "No Data to show"
                  )}
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: { xs: "100%", md: "60%" },
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
                    Most Forked Repos
                  </Typography>
                  {getTopForkedRepos.length > 0 ? (
                    <BarVerticalChart data={getTopForkedRepos} />
                  ) : (
                    "No Data to show"
                  )}
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: { xs: "100%", md: "36%" },
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
                    Stars Per Language
                  </Typography>
                  {mostStarsPerLanguage.length > 0 ? (
                    <DoughnutChart data={mostStarsPerLanguage} />
                  ) : (
                    "No Data to show"
                  )}
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: { xs: "100%", md: "60%" },
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
                    Most Starred Repos
                  </Typography>
                  {getTopStarredRepos.length > 0 ? (
                    <BarHorizontalChart data={getTopStarredRepos} />
                  ) : (
                    "No Data to show"
                  )}
                </CardContent>
              </Card>
            </Box>

            <Box
              sx={{
                mt: "10px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {getTotalStarredRepos > 0 && (
                <StatsCard title="Total Stars" stats={getTotalStarredRepos} />
              )}
              {getTotalForkedRepos > 0 && (
                <StatsCard title="Total Forks" stats={getTotalForkedRepos} />
              )}
              {mostUsedLanguages.length > 0 && (
                <StatsCard
                  title="Main Language"
                  stats={mostUsedLanguages.length}
                />
              )}
              {repos.length > 0 && (
                <StatsCard title="Pushed Repos" stats={repos.length} />
              )}
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default UserCharts;
