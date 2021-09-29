import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const UserCardContent = styled(CardContent)(`
  padding: 10px;
  &:last-child {
    padding-bottom: 10px;
  };
`);

type UserProps = {
  user: {
    login: string;
    avatar_url: string;
    url: string;
  };
};

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardMedia
        component="img"
        height="140"
        image={user.avatar_url}
        alt={user.login}
      />
      <UserCardContent>
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
          variant="subtitle1"
          color="text.secondary"
          component={NavLink}
          to={`user/${user.login}`}
        >
          {user.login}
        </Typography>
      </UserCardContent>
    </Card>
  );
};
export default UserCard;
