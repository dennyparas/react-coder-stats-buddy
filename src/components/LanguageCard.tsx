import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const LanguageCardContent = styled(CardContent)(`
  padding: 10px;
  &:last-child {
    padding-bottom: 10px;
  }
`);

type languageProps = {
  language: {
    name: string;
  };
};

const LanguageCard: React.FC<languageProps> = ({ language }) => {
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <LanguageCardContent>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "fontWeightMedium",
            textDecoration: "none",
            "&:hover": {
              color: "#000",
            },
            display: "block",
          }}
          align="center"
          variant="subtitle1"
          color="text.secondary"
          component={NavLink}
          to={`/repos?language=${encodeURIComponent(language.name)}`}
        >
          {language.name}
        </Typography>
      </LanguageCardContent>
    </Card>
  );
};
export default LanguageCard;
