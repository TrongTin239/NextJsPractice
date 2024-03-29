import { ReactNode } from "react";

export interface Post {
  id: number | string;
  title: string;
  publishedDate: string;
  tagList: string[];
  description: string;

  slug: string;
  author?: Author;
  mdContent?: string;
  htmlContent?: string;
  thumbailUrl?: string;
}
export interface Author {
  name: string;
  title: string;
  profileUrl: string;
  avatarUrl: string;
}
