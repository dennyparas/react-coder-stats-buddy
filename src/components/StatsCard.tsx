import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type StatsCardProps = {
  title: string;
  stats: number;
};

const StatsCard: React.FC<StatsCardProps> = ({ title, stats }) => {
  return (
    <Card
      sx={{
        width: { xs: "45%", md: "23.5%" },
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
          {title}
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
          {stats}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
