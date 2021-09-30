import axios from "axios";

export const fetchUserDetails = async (name: string) => {
  try {
    const response = await axios(`https://api.github.com/users/${name}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUserRepos = async (name: string) => {
  try {
    const response = await axios(
      `https://api.github.com/users/${name}/repos?per_page=100`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
