import { Typography } from "@mui/material";
import React from "react";

const PageNotFound: React.FC = () => {
  return (
    <>
      <Typography
        align="center"
        gutterBottom
        variant="h4"
        component="div"
        sx={{ fontFamily: "Poppins", mt: "50px" }}
      >
        Sorry, Page not found
      </Typography>
    </>
  );
};

export default PageNotFound;
