import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LanguageList from "../../components/LanguageList";
import { useAppSelector } from "../../hooks/reduxHooks";
import { showAllTopLanguages } from "./HomeSlice";

const HomeLanguagesSection: React.FC = () => {
  const homeLanguages = useAppSelector(showAllTopLanguages);
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Popular Programming Language
        </Typography>
      </Box>
      <LanguageList languages={homeLanguages} />
    </Container>
  );
};

export default HomeLanguagesSection;
