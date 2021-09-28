import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./features/home/HomePage";
import LanguagesPage from "./features/languages/LanguagesPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar";
import ReposPage from "./features/repos/ReposPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Poppins"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/languages">
            <LanguagesPage />
          </Route>
          <Route path="/repos">
            <ReposPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
