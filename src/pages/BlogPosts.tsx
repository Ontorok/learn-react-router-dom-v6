import { useEffect, useState } from "react";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";
import { sleep } from "../util/common";

function BlogPostsPage() {
  const [error, setError] = useState();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (err: any) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadPosts();
  }, []);

  const PreLoader = () => (
    <div className="flex justify-center items-center">Loading...</div>
  );

  return (
    <>
      <h1>Our Blog Posts</h1>
      {isLoading && <PreLoader />}
      {error && <p>{error}</p>}
      {!error && posts && <Posts blogPosts={posts} />}
    </>
  );
}

export default BlogPostsPage;
