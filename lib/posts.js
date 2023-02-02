import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { client } from "./client";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  const data = await client.get({ endpoint: "blogs" });
  const allPostsData = data.contents;
  return allPostsData;
}

export async function getAllPostIds() {
  const data = await client.get({ endpoint: "blogs" });
  return data.contents.map((content) => {
    return {
      params: {
        id: content.id,
      },
    };
  });
}

export async function getPostData(id) {
  const data = await client.get({
    endpoint: "blogs",
    contentId: id,
  });
  return data;
}
