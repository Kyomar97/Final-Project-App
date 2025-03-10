import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectService from "../../services/project.service";

function ProjectsPage() {
  // Obtener el nombre de la organización desde la URL
  const { organizationName } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Obtener los proyectos de la organización seleccionada
    projectService
      .getProjectsByOrganization(organizationName)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los proyectos:", error);
      });

    projectService
      .joinProject("someProjectId") // Cambia "someProjectId" por el ID real del proyecto
      .then((response) => console.log("Unido al proyecto:", response.data))
      .catch((error) => console.error("Error al unirse al proyecto:", error));
  }, [organizationName]);

  const formattedOrganizationName = organizationName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Proyectos de {formattedOrganizationName}
      </h1>

      {/* Listado de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id} // Usar _id en lugar de id (según el modelo de MongoDB)
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.descripcion}</p>
              <button
                onClick={() => {
                  // Llamar a joinProject cuando el usuario haga clic en el botón
                  projectService
                    .joinProject(project._id)
                    .then((response) => {
                      console.log("Unido al proyecto:", response.data);
                      alert("Te has unido al proyecto con éxito");
                    })
                    .catch((error) => {
                      console.error("Error al unirse al proyecto:", error);
                      alert("Error al unirse al proyecto");
                    });
                }}
                className="btn btn-primary mt-4"
              >
                Unirse al proyecto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
