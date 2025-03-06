function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-full bg-slate-400 text-white w-64 shadow-lg z-50"
          onMouseLeave={onClose} // Cierra el sidebar al quitar el ratón
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6 text-center">Menú</h2>
            <ul className="space-y-4">
              <li className="border-b border-slate-600 pb-4">
                <a
                  href="#proyectos"
                  className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
                >
                  Proyectos
                </a>
              </li>
              <li className="border-b border-slate-600 pb-4">
                <a
                  href="#sobre-cruz-roja"
                  className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
                >
                  Sobre Cruz Roja
                </a>
              </li>
              <li className="border-b border-slate-600 pb-4">
                <a
                  href="#labor-en-canarias"
                  className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
                >
                  Labor en Canarias
                </a>
              </li>
              <li>
                <a
                  href="#mis-proyectos"
                  className="block text-center p-2 rounded-lg transition-colors hover:bg-slate-700 hover:shadow-md"
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
