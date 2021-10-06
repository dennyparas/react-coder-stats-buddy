import axios from "axios";

export const fetchUsers = async (
  query: string,
  location: string,
  language: string,
  page: number,
  sort: string,
  order: string,
  perPage: number
) => {
  try {
    const languageParam = language
      ? `+language:"${encodeURIComponent(language)}"`
      : "";
    const response = await axios(
      `https://api.github.com/search/users?q=${query}+followers:%3E0+location:${location}${languageParam}&page=${page}&sort=${sort}&order=${order}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
