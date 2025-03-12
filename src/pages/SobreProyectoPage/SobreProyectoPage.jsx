import React from "react";

function SobreProyecto() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <header className="bg-slate-700 py-8 px-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-100">
            Sobre VolunTrack
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            VolunTrack nace con el objetivo de transformar la gestión del
            voluntariado para organizaciones de todos los tamaños. Nuestra
            plataforma facilita la labor de los gestores y ofrece una
            experiencia más fluida y personalizada a los voluntarios,
            permitiéndoles encontrar y participar en proyectos que realmente les
            apasionen.
          </p>

          <div className="flex items-center justify-center my-8">
            <div className="bg-slate-700 p-5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-slate-200"
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
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            ¿Qué Hacemos?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-slate-400 pl-4">
              <h3 className="text-lg font-medium text-slate-700 mb-2">
                Para Organizaciones
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Simplificamos la gestión de voluntarios, proyectos y
                actividades. Nuestra plataforma permite organizar recursos,
                realizar seguimiento de la participación y optimizar el impacto
                social de cada iniciativa.
              </p>
            </div>
            <div className="border-l-4 border-slate-400 pl-4">
              <h3 className="text-lg font-medium text-slate-700 mb-2">
                Para Voluntarios
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ofrecemos una experiencia personalizada donde pueden descubrir,
                seleccionar y comprometerse con proyectos alineados con sus
                valores e intereses, todo desde una interfaz intuitiva y
                accesible.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Características Principales
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-slate-600 mt-1 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-600">
                Gestión integral de proyectos y actividades de voluntariado
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-slate-600 mt-1 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-600">
                Registro y seguimiento de horas de voluntariado
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-slate-600 mt-1 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-600">
                Búsqueda y filtrado avanzado de oportunidades
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-slate-600 mt-1 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-600">
                Perfiles personalizados para voluntarios y organizaciones
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-slate-600 mt-1 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-600">
                Comunicación directa entre gestores y voluntarios
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Somos un equipo apasionado por el impacto social y la tecnología,
            comprometidos con crear herramientas que faciliten y potencien la
            labor del voluntariado en todo el mundo.
          </p>

          {/* Enlaces a Github y Linkdn (ya estan puestos los enlaces) */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/in/sebna-omar-gutiérrez-rodríguez-7099231b3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SobreProyecto;
