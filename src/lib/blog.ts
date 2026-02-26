import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

export interface PostMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
  readingTime: string;
}

export function getBlogPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"));
  const allPosts = fileNames
    .map((fileName) => {
      try {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          metadata: data as PostMetadata,
          content,
          readingTime: readingTime(content).text,
        };
      } catch {
        return null;
      }
    })
    .filter((post): post is Post => post !== null);

  return allPosts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }
  let fileContents = "";

  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    return undefined;
  }

  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as PostMetadata,
    content,
    readingTime: readingTime(content).text,
  };
}
