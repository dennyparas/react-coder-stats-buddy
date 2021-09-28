export type Repo = {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  license: {
    name: string;
  };
  html_url: string;
};

export type Repos = {
  repos: Repo[];
  reposStatus: string;
  reposError: boolean;
  reposTotalCount: number;
  reposCurrentPage: number;
};
