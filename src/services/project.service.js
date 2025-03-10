import axios from "axios";

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
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

  // GET - Obtener un proyecto específico por ID
  getProjectById = async (id) => {
    return this.api.get(`/api/projects/${id}`);
  };

  // POST - Crear un nuevo proyecto (solo admin)
  createProject = async (requestBody) => {
    return this.api.post("/api/projects", requestBody);
  };

  // PUT - Actualizar un proyecto (solo admin)
  updateProject = async (id, requestBody) => {
    return this.api.put(`/api/projects/${id}`, requestBody);
  };

  // DELETE - Eliminar un proyecto (solo admin)
  deleteProject = async (id) => {
    return this.api.delete(`/api/projects/${id}`);
  };

  // POST - Unirse a un proyecto
  joinProject = async (id) => {
    return this.api.post(`/api/projects/${id}/join`);
  };

  // PATCH - Abandonar un proyecto
  leaveProject = async (id) => {
    return this.api.patch(`/api/projects/${id}/leave`);
  };
}

const projectService = new ProjectService();

export default projectService;
