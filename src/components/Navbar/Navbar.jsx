import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar({ onOpenSidebar }) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center bg-slate-600 p-4">
      {/* Ícono de menú */}
      <div className="cursor-pointer" onMouseEnter={onOpenSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-slate-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Resto del Navbar */}
      <div className="flex space-x-4">
        <Link to="/">
          <button className="btn btn-xs sm:btn-sm md:btn-md">Home</button>
        </Link>

        {isLoggedIn && (
          <>
            <button onClick={logOutUser}>Logout</button>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            <span>{user && user.name}</span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup">
              <button className="btn btn-xs sm:btn-sm md:btn-md">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-xs sm:btn-sm md:btn-md">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
