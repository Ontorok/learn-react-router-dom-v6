import { Link, Outlet } from "react-router-dom";

const NavLayouts = () => {
  return (
    <div>
      <nav className="w-full bg-black text-white shadow py-4 px-6 flex flex-row justify-between items-baseline">
        <div className="mb-2 sm:mb-0">
          <Link to="/" className="text-xl">
            React-Router-Dom-V6
          </Link>
        </div>
        <div>
          <Link to="/" replace className="mr-2">
            Home
          </Link>
          <Link to="/about" className="mr-2">
            About
          </Link>
          <Link to="/contact" className="mr-2">
            Contact
          </Link>
          <Link to="/books" className="mr-0">
            Books
          </Link>
        </div>
      </nav>
      {<Outlet />}
    </div>
  );
};

export default NavLayouts;
