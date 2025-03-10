import axios from "axios";

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automáticamente incluir el token JWT en las cabeceras de cada solicitud
    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  // GET - Obtener todos los proyectos
  getAllProjects = async () => {
    return this.api.get("/projects");
  };

  // GET - Obtener proyectos por organización
  getProjectsByOrganization = async (organizationName) => {
    return this.api.get(`/projects/organization/${organizationName}`);
  };

  // POST - Crear un nuevo proyecto (solo admin)
  createProject = async (requestBody) => {
    return this.api.post("/projects", requestBody);
  };

  // PUT - Actualizar un proyecto (solo admin)
  updateProject = async (id, requestBody) => {
    return this.api.put(`/projects/${id}`, requestBody);
  };

  // DELETE - Eliminar un proyecto (solo admin)
  deleteProject = async (id) => {
    return this.api.delete(`/projects/${id}`);
  };

  // POST - Unirse a un proyecto
  joinProject = async (id) => {
    return this.api.post(`/projects/${id}/join`);
  };

  // PATCH - Abandonar un proyecto
  leaveProject = async (id) => {
    return this.api.patch(`/projects/${id}/leave`);
  };
}

const projectService = new ProjectService();

export default projectService;
