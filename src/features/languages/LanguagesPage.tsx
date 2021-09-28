import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LanguageList from "../../components/LanguageList";
import { useAppSelector } from "../../hooks/reduxHooks";
import { showAllLanguages } from "./LanguagesSlice";

const LanguagesPage: React.FC = () => {
  const languages = useAppSelector(showAllLanguages);
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: "25px", mb: "15px" }}>
      <Box sx={{ mt: "15px", mb: "15px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins" }}
        >
          Programming Language List
        </Typography>
      </Box>

      <LanguageList languages={languages} />
    </Container>
  );
};

export default LanguagesPage;
