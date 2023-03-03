import fs from "fs";
import matter from "gray-matter";
import { Post } from "models/post";
import path from "path";

const BLOG_FOLDER = path.join(process.cwd(), "blog");

export async function getBlogList(): Promise<Post[]> {
  //read all markdown file
  const fileNameList = fs.readdirSync(BLOG_FOLDER);
  const postList: Post[] = [];
  for (const fileName of fileNameList) {
    const fileNamePath = path.join(BLOG_FOLDER, fileName);
    const fileContent = fs.readFileSync(fileNamePath, "utf8");
    const { data, excerpt, content } = matter(fileContent, {
      excerpt_separator: "<!-- truncate-->",
    });
    postList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      thumbailUrl: data.image,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: data.date,
      description: excerpt || "",
      mdContent: content,
    });
  }
  return postList;
}
