export type User = {
  login: string;
  avatar_url: string;
  url: string;
};

export type Users = {
  users: User[];
  usersStatus: string;
  usersError: boolean;
  usersTotalCount: number;
  usersCurrentPage: number;
  queryParams: string;
};
