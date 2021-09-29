import axios from "axios";

export const fetchUsers = async (
  query: string,
  page: number,
  sort: string,
  order: string,
  perPage: number
) => {
  try {
    const response = await axios(
      `https://api.github.com/search/users?q=${query}+followers:%3E0&page=${page}&sort=${sort}&order=${order}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
