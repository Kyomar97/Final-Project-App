import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="h-16 flex items-center justify-between bg-slate-600 px-4">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <button className="btn btn-xs sm:btn-sm md:btn-md">Home</button>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {isLoggedIn && (
          <>
            <button
              onClick={logOutUser}
              className="btn btn-xs sm:btn-sm md:btn-md"
            >
              Logout
            </button>

            <Link to="/profile">
              <button className="btn btn-xs sm:btn-sm md:btn-md">
                Profile
              </button>
            </Link>

            <span className="text-white">{user && user.name}</span>
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
