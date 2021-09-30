import axios from "axios";

export const fetchRepos = async (
  query: string,
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
      `https://api.github.com/search/repositories?q=${query}stars:>=1${languageParam}&page=${page}&sort=${sort}&order=${order}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
