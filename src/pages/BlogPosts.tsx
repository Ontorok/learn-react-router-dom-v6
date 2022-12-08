import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";
import { sleep } from "../util/common";

function BlogPostsPage() {
  const posts = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={posts} />
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}
