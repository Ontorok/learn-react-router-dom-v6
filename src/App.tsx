import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostLoader } from "./pages/BlogPosts";
import NewPostPage from "./pages/NewPost";
import PostDetailPage from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <WelcomePage /> }],
  },
  {
    path: "/blog",
    element: <BlogLayout />,
    children: [
      { index: true, element: <BlogPostsPage />, loader: blogPostLoader },
      { path: ":id", element: <PostDetailPage /> },
      { path: "new", element: <NewPostPage /> },
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
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    // <BrowserRouter>
    //   <RootLayout></RootLayout>
    // </BrowserRouter>
  );
}

export default App;
