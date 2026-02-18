export type ExperienceType = {
  id: number;
  companyName: string;
  position: string;
  responsibilities: string[];
  workingPeriod: string;
  skills: string[];
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  sourceCode?: string;
  liveDemo?: string;
  category: string;
  favicon: string;
};

export type BlogType = {
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string;
  readingTime: string;
  tags: string[];
  image: string;
  isPublished: boolean;
};

export type BlogCardType = Omit<BlogType, "content">;
