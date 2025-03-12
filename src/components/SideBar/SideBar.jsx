import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onToggle }) {
  const navigate = useNavigate();

  // Detener la propagación del evento
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    onToggle();
  };

  // Función para navegar y cerrar el sidebar
  const handleNavigation = (path) => {
    navigate(path);
    onToggle(); // Cierra el sidebar después de navegar
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay transparente que cubre toda la pantalla */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* El sidebar en sí */}
      <div className="fixed top-0 left-0 h-full bg-slate-700 text-slate-200 w-64 shadow-lg z-50 overflow-y-auto transition-transform duration-300">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            {/* Logo y nombre */}
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-200"
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
              <span className="font-medium">VolunTrack</span>
            </div>

            {/* Botón cerrar con efecto hover */}
            <button
              onClick={onToggle}
              className="text-slate-200 hover:text-white hover:bg-slate-600 p-1 rounded transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-8">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/proyectos"
                  className="flex items-center px-4 py-3 text-slate-200 hover:bg-slate-600 rounded transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-proyecto"
                  className="flex items-center px-4 py-3 text-slate-200 hover:bg-slate-600 rounded transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Sobre el Proyecto
                </Link>
              </li>
              <li>
                <Link
                  to="/labor-en-canarias"
                  className="flex items-center px-4 py-3 text-slate-200 hover:bg-slate-600 rounded transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
                    />
                  </svg>
                  Labor en Canarias
                </Link>
              </li>
              <li>
                <Link
                  to="/mis-proyectos"
                  className="flex items-center px-4 py-3 text-slate-200 hover:bg-slate-600 rounded transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  Mis Proyectos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
