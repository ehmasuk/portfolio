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

export type MdxDocType = {
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string;
  readingTime: string;
  tags: string[];
  image: string;
  category: "blog" | "component";
};

export type BlogType = MdxDocType;

export type BlogCardType = Omit<BlogType, "content">;

export type ComponentType = Omit<MdxDocType, "readingTime">;

export type ComponentCardType = Pick<ComponentType, "title" | "description" | "image" | "slug" | "date" | "category">;
