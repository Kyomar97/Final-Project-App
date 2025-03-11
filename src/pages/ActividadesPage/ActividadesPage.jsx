import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectService from "../../services/project.service";

function ActividadesPage() {
  const { projectId } = useParams();
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    // Obtener las actividades del proyecto seleccionado
    projectService
      .getActividadesByProject(projectId)
      .then((response) => {
        setActividades(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las actividades:", error);
      });
  }, [projectId]);

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Actividades del Proyecto
      </h1>

      {/* Listado de actividades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actividades.map((actividad) => (
          <div
            key={actividad._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body">
              <h2 className="card-title">{actividad.name}</h2>
              <p>{actividad.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActividadesPage;
