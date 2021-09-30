import { Repo } from "./reposTypes";

export type UserDetails = {
  userDetails: {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    hireable: boolean;
    bio?: string;
    twitter_username?: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
  };
  userDetailsStatus: string;
  userDetailsError: boolean;
  userRepos: Repo[];
  userReposStatus: string;
  userReposError: boolean;
  userId: string;
};
