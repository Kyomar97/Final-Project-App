import axios from "axios";

class ActividadService {
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

  // POST - Crear una nueva actividad para un proyecto (solo admin)
  createActividad = async (projectId, requestBody) => {
    return this.api.post(`/actividades/${projectId}/actividades`, requestBody);
  };

  // GET - Obtener actividades de un proyecto específico
  getActividadesByProject = async (projectId) => {
    return this.api.get(`/actividades/${projectId}/actividades`);
  };

  // POST - Inscribirse en una actividad
  inscribirseEnActividad = async (actividadId) => {
    return this.api.post(`/actividades/${actividadId}/inscribirse`);
  };

  // PATCH - Desinscribirse de una actividad
  desinscribirseDeActividad = async (actividadId) => {
    return this.api.patch(`/actividades/${actividadId}/desinscribirse`);
  };

  // GET - Obtener actividades en las que está inscrito el usuario
  getMisActividades = async () => {
    return this.api.get(`/actividades/mis-actividades`);
  };

  // PUT - Actualizar una actividad (solo admin)
  updateActividad = async (actividadId, requestBody) => {
    return this.api.put(`/actividades/${actividadId}`, requestBody);
  };

  // DELETE - Eliminar una actividad (solo admin)
  deleteActividad = async (actividadId) => {
    return this.api.delete(`/actividades/${actividadId}`);
  };

  // GET - Obtener sugerencias de IA Gemini para actividades
  getSugerencias = async (projectId) => {
    try {
      const response = await this.api.get(
        `/projects/${projectId}/suggest-tasks`
      );
      return response.data.suggestions;
    } catch (error) {
      console.error("Error obteniendo sugerencias de IA:", error);
      throw error;
    }
  };
}

const actividadService = new ActividadService();

export default actividadService;
