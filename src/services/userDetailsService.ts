import axios from "axios";

export const fetchUserDetails = async (name: string) => {
  // try {
  //   const response = await axios(`https://api.github.com/users/${name}`);
  //   return response;
  // } catch (error) {
  //   throw error;
  // }

  const response = await axios(`https://api.github.com/users/${name}`);
  return response;
};

export const fetchUserRepos = async (name: string) => {
  try {
    const response = await axios(
      `https://api.github.com/users/${name}/repos?per_page=100&sort=pushed`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
