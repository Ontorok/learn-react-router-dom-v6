import { Routes, Route } from "react-router-dom";
import Book from "../components/Book";
import BookLayout from "../components/Layouts/BookLayout";
import BookList from "../components/BookList";
import NewBook from "../components/NewBook";
import NavLayouts from "../components/Layouts/NavLayouts";

const BookRoutes = () => {
  return (
    <>
      <NavLayouts />
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Routes>
    </>
  );
};

export default BookRoutes;
