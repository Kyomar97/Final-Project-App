import { useParams } from "react-router-dom";

function ProjectsPage() {
  // Obtener el nombre de la organización desde la URL
  const { organizationName } = useParams();

  // Datos de proyectos (simulados)
  const projects = [
    { id: 1, name: "Proyecto 1", description: "Descripción del proyecto 1." },
    { id: 2, name: "Proyecto 2", description: "Descripción del proyecto 2." },
    { id: 3, name: "Proyecto 3", description: "Descripción del proyecto 3." },
  ];

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Proyectos de {organizationName}
      </h1>

      {/* Listado de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
