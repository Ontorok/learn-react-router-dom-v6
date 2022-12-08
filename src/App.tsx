import { RouterProvider, createBrowserRouter } from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostLoader } from "./pages/BlogPosts";
import NewPostPage, { action as newPostAction } from "./pages/NewPost";
import PostDetailPage, {
  loader as blodPostDetailLoader,
} from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: "/blog",
        element: <BlogLayout />,

        children: [
          { index: true, element: <BlogPostsPage />, loader: blogPostLoader },
          {
            path: ":id",
            element: <PostDetailPage />,
            loader: blodPostDetailLoader,
          },
          { path: "new", element: <NewPostPage />, action: newPostAction },
        ],
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<WelcomePage />} />
//       <Route path="/blog" element={<BlogLayout />}>
//         <Route index element={<BlogPostsPage />} loader={blogPostLoader} />
//         <Route path=":id" element={<PostDetailPage />} />
//       </Route>
//       <Route path="/blog/new" element={<NewPostPage />} />
//     </Route>
//   )
// );

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <RootLayout></RootLayout>
    // </BrowserRouter>
  );
}

export default App;
