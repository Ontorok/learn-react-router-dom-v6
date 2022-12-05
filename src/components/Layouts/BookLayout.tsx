import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
  return (
    <div className="flex justify-between p-5 gap-1">
      <div className="bg-sky-300 flex-1 p-4">
        <ul className="underline">
          <li>
            <Link to={"/books/1"}>Book One</Link>
          </li>
          <li>
            <Link to={"/books/2"}>Book Two</Link>
          </li>
          <li>
            <Link to={"/books/new"}>New Book</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookLayout;
