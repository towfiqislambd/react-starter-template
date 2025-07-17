import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-12 bg-blue-600 text-white py-4 text-xl flex justify-between items-center">
      <p>Navbar</p>
      <Link
        to={"/auth/register"}
        className="px-5 py-2 rounded bg-gray-600 cursor-pointer"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Navbar;
