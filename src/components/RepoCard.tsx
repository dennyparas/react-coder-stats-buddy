import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { GoRepo, GoRepoForked, GoStar, GoCode } from "react-icons/go";
import { Button } from "@mui/material";

const RepoIcon = styled(GoRepo)(`
    vertical-align: -2px;
    margin-right: 5px;
`);

const RepoCardContent = styled(CardContent)(`
    padding: 10px;
    &:last-child {
        padding-bottom: 10px;
    };
`);

const RepoCardDesc = styled(Typography)(`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
    height: 45px;
    font-family: "Poppins"
`);

type repoProps = {
  repo: {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    license: {
      name: string;
    };
    html_url: string;
  };
};

const RepoCard: React.FC<repoProps> = ({ repo }) => {
  return (
    <Card sx={{ width: "auto" }} variant="outlined">
      <RepoCardContent>
        <Button
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            padding: "0",
            color: "#00000099",
          }}
          href={repo.html_url}
        >
          <RepoIcon size="0.9em" />
          {repo.name}
        </Button>

        <Typography
          sx={{ fontFamily: "Poppins", fontSize: "14px" }}
          color="#989898"
        >
          {repo.license ? repo.license.name : "No License"}
        </Typography>

        <RepoCardDesc variant="body2" color="text.secondary">
          {repo.description ? repo.description : "No description"}
        </RepoCardDesc>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          <Chip size="small" icon={<GoStar />} label={repo.stargazers_count} />
          <Chip
            size="small"
            icon={<GoRepoForked />}
            label={repo.forks_count || 0}
          />
          {repo.language && (
            <Chip size="small" icon={<GoCode />} label={repo.language} />
          )}
        </Stack>
      </RepoCardContent>
    </Card>
  );
};
export default RepoCard;
