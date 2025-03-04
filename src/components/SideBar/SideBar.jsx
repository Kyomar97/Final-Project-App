function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-full bg-slate-400 text-white w-64 shadow-lg z-50"
          onMouseLeave={onClose} // Cierra el sidebar al quitar el ratón
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Menú</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#proyectos"
                  className="block hover:bg-slate-700 p-2 rounded transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#sobre-cruz-roja"
                  className="block hover:bg-slate-700 p-2 rounded transition-colors"
                >
                  Sobre Cruz Roja
                </a>
              </li>
              <li>
                <a
                  href="#labor-en-canarias"
                  className="block hover:bg-slate-700 p-2 rounded transition-colors"
                >
                  Labor en Canarias
                </a>
              </li>
              <li>
                <a
                  href="#mis-proyectos"
                  className="block hover:bg-slate-700 p-2 rounded transition-colors"
                >
                  Mis Proyectos
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
