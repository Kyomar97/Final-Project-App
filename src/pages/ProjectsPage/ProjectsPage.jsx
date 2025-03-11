import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectService from "../../services/project.service";
import { AuthContext } from "../../context/auth.context";
import EditProjectForm from "../../components/EditProjectForm/EditProjectForm";
import CreateProjectForm from "../../components/CreatedProjectForm/CreateProjectForm";

function ProjectsPage() {
  const { organizationName } = useParams();
  const [projects, setProjects] = useState([]);
  const [joinedProjects, setJoinedProjects] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchProjects = () => {
    projectService
      .getProjectsByOrganization(organizationName)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los proyectos:", error);
      });
  };

  useEffect(() => {
    fetchProjects();

    projectService
      .getUserProjects()
      .then((response) => {
        const projectIds = response.data.map((project) => project._id);
        setJoinedProjects(projectIds);
      })
      .catch((error) => {
        console.error("Error al obtener los proyectos del usuario:", error);
      });
  }, [organizationName]);

  const handleJoinProject = (projectId) => {
    projectService
      .joinProject(projectId)
      .then(() => {
        alert("Te has unido al proyecto con éxito");
        setJoinedProjects((prev) => [...prev, projectId]);
      })
      .catch((error) => {
        console.error("Error al unirse al proyecto:", error);
        alert("Error al unirse al proyecto");
      });
  };

  const handleLeaveProject = (projectId) => {
    projectService
      .leaveProject(projectId)
      .then(() => {
        alert("Has abandonado el proyecto con éxito");
        setJoinedProjects((prev) => prev.filter((id) => id !== projectId));
      })
      .catch((error) => {
        console.error("Error al abandonar el proyecto:", error);
        alert("Error al abandonar el proyecto");
      });
  };

  const handleEditClick = (project) => {
    setProjectToEdit(project);
    setEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    setEditModalOpen(false);
    setProjectToEdit(null);
    fetchProjects(); // Refresca la lista después de editar
  };

  const handleCreateSuccess = () => {
    setCreateModalOpen(false);
    fetchProjects(); // Refresca la lista después de crear
  };

  const formattedOrganizationName = organizationName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col min-h-screen p-4 relative">
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Proyectos de {formattedOrganizationName}
      </h1>

      {/* BOTÓN "+" SOLO PARA ADMIN */}
      {user?.rol === "admin" && (
        <button
          onClick={() => setCreateModalOpen(true)}
          className="btn btn-primary fixed bottom-10 right-10 z-40 rounded-full w-14 h-14 text-3xl shadow-lg"
        >
          +
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.descripcion}</p>

              {joinedProjects.includes(project._id) ? (
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigate(`/actividades/${project._id}`)}
                    className="btn btn-secondary mt-4"
                  >
                    Ver Actividades
                  </button>
                  <button
                    onClick={() => handleLeaveProject(project._id)}
                    className="btn btn-error mt-4"
                  >
                    Abandonar Proyecto
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleJoinProject(project._id)}
                  className="btn btn-primary mt-4"
                >
                  Unirse al proyecto
                </button>
              )}

              {/* BOTÓN DE EDITAR SOLO PARA ADMIN */}
              {user?.rol === "admin" && (
                <button
                  onClick={() => handleEditClick(project)}
                  className="btn btn-warning mt-2"
                >
                  Editar Proyecto
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE EDITAR */}
      {editModalOpen && (
        <EditProjectForm
          isAdmin={user?.rol === "admin"}
          project={projectToEdit}
          onClose={() => setEditModalOpen(false)}
          onSuccess={handleEditSuccess}
        />
      )}

      {/* MODAL DE CREAR */}
      {createModalOpen && (
        <CreateProjectForm
          isAdmin={user?.rol === "admin"}
          organizationName={organizationName}
          onClose={() => setCreateModalOpen(false)}
          onSuccess={handleCreateSuccess}
        />
      )}
    </div>
  );
}

export default ProjectsPage;
