import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar({ onToggleSidebar }) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Detener la propagación
    onToggleSidebar();
  };

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <div className="navbar bg-slate-600 shadow-sm p-4">
      {/* Botón de menú hamburguesa */}
      {isLoggedIn && (
        <div className="flex-none">
          <div
            className="btn btn-ghost btn-circle text-white hover:bg-slate-700"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Logo y nombre de la web (centrado) */}
      <div className="flex-1 flex justify-center">
        <Link
          to={isLoggedIn ? "/home" : "/"}
          className="flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-slate-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {/* Nombre de la web */}
          <span className="text-xl font-bold text-slate-200">VolunTrack</span>
        </Link>
      </div>

      {/* Avatar y dropdown (solo visible si está logueado) */}
      {isLoggedIn && (
        <div className="flex-none dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full bg-slate-200 flex items-center justify-center">
              {user && user.name ? (
                <span className="text-xl font-bold text-gray-700">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-400 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/profile"
                className="text-slate-800 hover:text-slate-900"
              >
                Perfil
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-slate-800 hover:text-slate-900"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
