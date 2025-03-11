import axios from "axios";

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  getAllProjects = async () => {
    return this.api.get("/projects");
  };
  getUserProjects = async () => {
    return this.api.get("/projects/mis-proyectos");
  };
  createProject = async (requestBody) => {
    return this.api.post("/projects", requestBody);
  };

  getProjectsByOrganization = async (organizationName) => {
    return this.api.get(`/projects/organization/${organizationName}`);
  };

  updateProject = async (id, requestBody) => {
    return this.api.put(`/projects/${id}`, requestBody);
  };

  deleteProject = async (id) => {
    return this.api.delete(`/projects/${id}`);
  };

  joinProject = async (id) => {
    return this.api.post(`/projects/${id}/join`);
  };

  leaveProject = async (id) => {
    return this.api.patch(`/projects/${id}/leave`);
  };

  getActividadesByProject = async (projectId) => {
    return this.api.get(`/projects/${projectId}/actividades`);
  };
}

const projectService = new ProjectService();

export default projectService;
