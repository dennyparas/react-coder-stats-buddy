import React from "react";
import { Grid } from "@mui/material";
import LanguageCard from "./LanguageCard";
import { Language, Languages } from "../types/languageTypes";

const LanguageList: React.FC<Languages> = ({ languages }) => {
  return (
    <Grid container spacing={2}>
      {languages.map((language: Language, index: number) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={2}>
          <LanguageCard language={language} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LanguageList;
