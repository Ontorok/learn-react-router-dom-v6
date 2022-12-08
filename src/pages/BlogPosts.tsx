import { useEffect, useState, Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const loaderdata = useLoaderData() as { post: any };
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderdata.post}
          errorElement={<p>Error loading blog post</p>}
        >
          {(posts) => <Posts blogPosts={posts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return defer({ post: getPosts() });
}
