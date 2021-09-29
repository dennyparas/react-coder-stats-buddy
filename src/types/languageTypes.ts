export type Language = {
  name: string;
  type: string;
  extensions?: string[] | undefined;
  popular?: string | undefined;
};

export type Languages = {
  languages: Language[];
};
