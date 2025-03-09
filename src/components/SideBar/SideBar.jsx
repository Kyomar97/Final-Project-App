import React from "react";

function Sidebar({ isOpen, onToggle }) {
  // Detener la propagación del evento
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    onToggle();
  };

  // Si no está abierto, no renderizar nada
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay transparente que cubre toda la pantalla */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* El sidebar en sí */}
      <div className="fixed top-0 left-0 h-full bg-slate-400 text-white w-64 shadow-lg z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="text-white hover:text-gray-200"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

          <h2 className="text-xl font-semibold mb-6 text-center">Menú</h2>
          <ul className="space-y-4">
            <li className="border-b border-slate-600 pb-4">
              <a
                href="#proyectos"
                className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                Proyectos
              </a>
            </li>
            <li className="border-b border-slate-600 pb-4">
              <a
                href="#sobre-cruz-roja"
                className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                Sobre Cruz Roja
              </a>
            </li>
            <li className="border-b border-slate-600 pb-4">
              <a
                href="#labor-en-canarias"
                className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                Labor en Canarias
              </a>
            </li>
            <li>
              <a
                href="#mis-proyectos"
                className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                Mis Proyectos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
