import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between mb-10 pb-5 border-b-2">
      <Link to="/">
        <span className="font-semibold text-2xl text-stone-800 font-bold ">
          Users
        </span>
      </Link>
      <nav className="flex items-center gap-5">
        <Link to="/" className="text-emerald-600 font-medium">
          Home
        </Link>
        <Link to="/" className="text-emerald-600 font-medium">
          Users
        </Link>
        <Link to="" className="text-emerald-600 font-medium">
          New User
        </Link>
      </nav>
    </header>
  );
};

export default Header;
