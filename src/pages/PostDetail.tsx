import { useLoaderData } from "react-router-dom";

import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

type postDetailProps = {
  title: string;
  body: any;
};

function PostDetailPage() {
  const post = useLoaderData() as postDetailProps;
  return <BlogPost title={post.title} text={post.body} />;
}

export default PostDetailPage;

export function loader(request: any) {
  const postId = request.params.id;
  return getPost(postId);
}
