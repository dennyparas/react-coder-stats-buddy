import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LanguageList from "../../components/LanguageList";
import { useAppSelector } from "../../hooks/reduxHooks";
import { showAllLanguages, showPopularLanguages } from "./LanguagesSlice";

const LanguagesPage: React.FC = () => {
  const allLanguages = useAppSelector(showAllLanguages);
  const popularLanguages = useAppSelector(showPopularLanguages);
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Popular
        </Typography>
      </Box>
      <LanguageList languages={popularLanguages} />
      <Box sx={{ mt: "15px", mb: "15px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Everything
        </Typography>
      </Box>
      <LanguageList languages={allLanguages} />
    </Container>
  );
};

export default LanguagesPage;
