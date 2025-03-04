function Footer() {
  return (
    <footer className="bg-slate-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Enlaces a GitHub y LinkedIn */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/tu-usuario-de-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tu-perfil-de-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Datos de contacto de Cruz Roja */}
          <a
            href="https://www.cruzroja.es/canarias"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            Cruz Roja Canarias
          </a>

          {/* Aviso legal y protección de datos */}
          <div className="flex items-center space-x-4">
            <a
              href="/aviso-legal"
              className="hover:text-slate-300 transition-colors"
            >
              Aviso Legal
            </a>
            <a
              href="/proteccion-datos"
              className="hover:text-slate-300 transition-colors"
            >
              Protección de Datos
            </a>
          </div>

          {/* Derechos de autor */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cruz Roja Canarias. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
