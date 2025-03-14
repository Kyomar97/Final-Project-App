import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import actividadService from "../../services/actividad.service";
import { AuthContext } from "../../context/auth.context";

function ActividadesPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [actividades, setActividades] = useState([]);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [inscrito, setInscrito] = useState({});
  const { user } = useContext(AuthContext);

  const isAdmin = user && user.rol === "admin";

  useEffect(() => {
    loadActividades();
  }, [projectId]);

  const loadActividades = () => {
    actividadService
      .getActividadesByProject(projectId)
      .then((response) => {
        setActividades(response.data);

        // Verificar actividades en las que está inscrito el usuario
        actividadService
          .getMisActividades()
          .then((misActividades) => {
            const misActividadesIds = misActividades.data.map((act) => act._id);
            const inscritoObj = {};
            response.data.forEach((act) => {
              inscritoObj[act._id] = misActividadesIds.includes(act._id);
            });
            setInscrito(inscritoObj);
          })
          .catch((error) =>
            console.error("Error obteniendo mis actividades:", error)
          );
      })
      .catch((error) => {
        console.error("Error al obtener las actividades:", error);
      });
  };

  const handleCardClick = (actividad) => {
    setActividadSeleccionada(
      actividad._id === actividadSeleccionada ? null : actividad._id
    );
  };

  const handleInscribirse = (actividadId, e) => {
    e.stopPropagation();
    actividadService
      .inscribirseEnActividad(actividadId)
      .then(() => {
        setInscrito({ ...inscrito, [actividadId]: true });
      })
      .catch((error) => console.error("Error al inscribirse:", error));
  };

  const handleDesinscribirse = (actividadId, e) => {
    e.stopPropagation();
    actividadService
      .desinscribirseDeActividad(actividadId)
      .then(() => {
        setInscrito({ ...inscrito, [actividadId]: false });
      })
      .catch((error) => console.error("Error al desinscribirse:", error));
  };

  const handleCrearActividad = () => {
    navigate(`/proyectos/${projectId}/actividades/crear`);
  };

  const handleEditarActividad = (actividadId, e) => {
    e.stopPropagation();
    navigate(`/proyectos/${projectId}/actividades/${actividadId}/editar`);
  };

  const handleEliminarActividad = (actividadId, e) => {
    e.stopPropagation();
    if (
      window.confirm(
        "¿Estás seguro de que deseas eliminar esta actividad? Esta acción no se puede deshacer."
      )
    ) {
      actividadService
        .deleteActividad(actividadId)
        .then(() => {
          setActividades(actividades.filter((act) => act._id !== actividadId));
          setActividadSeleccionada(null);
        })
        .catch((error) =>
          console.error("Error al eliminar la actividad:", error)
        );
    }
  };

  // Función para mostrar icono según categoría
  const getCategoriaIcon = (categoria) => {
    const iconos = {
      educacion: "📚",
      salud: "🏥",
      medioambiente: "🌱",
      derechos_humanos: "⚖️",
      desarrollo_comunitario: "🏘️",
      emergencias: "🚨",
      cultura: "🎭",
      deporte: "⚽",
      inclusion_social: "🤝",
      administrativa: "📊",
      comunicacion: "📣",
      tecnologia: "💻",
      otra: "🔍",
    };
    return iconos[categoria] || "📋";
  };

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-50 relative">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Actividades del Proyecto
      </h1>

      {/* Listado de actividades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actividades.map((actividad) => (
          <div
            key={actividad._id}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 
                      ${
                        actividadSeleccionada === actividad._id
                          ? "md:col-span-2 lg:col-span-3 transform scale-105"
                          : "hover:shadow-lg hover:translate-y-1"
                      }`}
            onClick={() => handleCardClick(actividad)}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">
                    {getCategoriaIcon(actividad.categoria)}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {actividad.name}
                  </h2>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold 
                              ${
                                actividad.tipoDeActividad === "presencial"
                                  ? "bg-green-100 text-green-800"
                                  : actividad.tipoDeActividad === "virtual"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                >
                  {actividad.tipoDeActividad.charAt(0).toUpperCase() +
                    actividad.tipoDeActividad.slice(1)}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{actividad.descripcion}</p>

              {/* Detalles expandidos */}
              {actividadSeleccionada === actividad._id && (
                <div className="mt-4 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Detalles
                      </h3>
                      <p>
                        <span className="font-medium">Categoría:</span>{" "}
                        {actividad.categoria.replace("_", " ")}
                      </p>
                      <p>
                        <span className="font-medium">Frecuencia:</span>{" "}
                        {actividad.frecuencia}
                      </p>
                      <p>
                        <span className="font-medium">Duración:</span>{" "}
                        {actividad.duracionEstimada.horas}{" "}
                        {actividad.duracionEstimada.unidadTiempo}
                        {actividad.duracionEstimada.horas > 1 ? "s" : ""}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Requisitos
                      </h3>
                      {actividad.habilidadesRequeridas &&
                      actividad.habilidadesRequeridas.length > 0 ? (
                        <p>
                          <span className="font-medium">Habilidades:</span>{" "}
                          {actividad.habilidadesRequeridas.join(", ")}
                        </p>
                      ) : (
                        <p>No se requieren habilidades específicas</p>
                      )}

                      {actividad.conocimientosNecesarios &&
                        actividad.conocimientosNecesarios.length > 0 && (
                          <p>
                            <span className="font-medium">Conocimientos:</span>{" "}
                            {actividad.conocimientosNecesarios.join(", ")}
                          </p>
                        )}
                    </div>
                  </div>

                  {actividad.objetivos && actividad.objetivos.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Objetivos
                      </h3>
                      <ul className="list-disc pl-5">
                        {actividad.objetivos.map((objetivo, index) => (
                          <li key={index} className="text-gray-600">
                            {objetivo}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {actividad.contactoResponsable && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Contacto
                      </h3>
                      <p>
                        <span className="font-medium">Responsable:</span>{" "}
                        {actividad.contactoResponsable.nombre}
                      </p>
                      {actividad.contactoResponsable.email && (
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          {actividad.contactoResponsable.email}
                        </p>
                      )}
                    </div>
                  )}

                  {actividad.ubicacion && actividad.ubicacion.direccion && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Ubicación
                      </h3>
                      <p>{actividad.ubicacion.direccion}</p>
                      {actividad.ubicacion.notas && (
                        <p className="text-gray-500 text-sm">
                          {actividad.ubicacion.notas}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Botones de administración */}
                  {isAdmin && (
                    <div className="flex justify-end mt-4 space-x-2">
                      <button
                        onClick={(e) => handleEditarActividad(actividad._id, e)}
                        className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Editar
                      </button>
                      <button
                        onClick={(e) =>
                          handleEliminarActividad(actividad._id, e)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Eliminar
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 flex justify-end">
                {!inscrito[actividad._id] ? (
                  <button
                    onClick={(e) => handleInscribirse(actividad._id, e)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Inscribirse
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleDesinscribirse(actividad._id, e)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Desinscribirse
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {actividades.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No hay actividades disponibles en este proyecto
          </p>
        </div>
      )}

      {/* Botón flotante para crear actividad (solo admin) */}
      {isAdmin && (
        <button
          onClick={handleCrearActividad}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
          aria-label="Crear nueva actividad"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-in-out forwards;
  }
`;
document.head.appendChild(style);

export default ActividadesPage;
