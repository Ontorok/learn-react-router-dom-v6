import "./App.css";
import { Link, Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/Home";

import NotFound from "./components/NotFound";
import BookRoutes from "./routes/BookRoutes";
import NavLayouts from "./components/Layouts/NavLayouts";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <NavLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    { path: "/books/*", element: <BookRoutes /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <div>{routes}</div>;
}

export default App;
