import React from "react";
import HomeSearchForm from "./HomeSearchForm";
import HomeLanguagesSection from "./HomeLanguagesSection";
import HomeReposSection from "./HomeReposSection";
import HomeUsersSection from "./HomeUsersSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeSearchForm />
      <HomeUsersSection />
      <HomeLanguagesSection />
      <HomeReposSection />
    </>
  );
};

export default HomePage;
