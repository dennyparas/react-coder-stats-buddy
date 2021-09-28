import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import reptile from "./../images/contemplative-reptile.jpeg";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const UserCardContent = styled(CardContent)(`
  padding: 10px;
  &:last-child {
    padding-bottom: 10px;
  };
  
`);

const UserCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardMedia
        component="img"
        height="140"
        image={reptile}
        alt="green iguana"
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
          to="/"
        >
          Mac Miller
        </Typography>
      </UserCardContent>
    </Card>
  );
};
export default UserCard;
