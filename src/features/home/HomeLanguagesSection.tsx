import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LanguageList from "../../components/LanguageList";
import { useAppSelector } from "../../hooks/reduxHooks";
import { showPopularLanguages } from "./HomeSlice";
import { NavLink } from "react-router-dom";

const HomeLanguagesSection: React.FC = () => {
  const homeLanguages = useAppSelector(showPopularLanguages);
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        <Typography
          color="text.primary"
          gutterBottom
          variant="h6"
          component={NavLink}
          sx={{ fontFamily: "Poppins", textDecoration: "none" }}
          to={`/languages`}
        >
          Popular Programming Language
        </Typography>
      </Box>
      <LanguageList languages={homeLanguages} />
    </Container>
  );
};

export default HomeLanguagesSection;
