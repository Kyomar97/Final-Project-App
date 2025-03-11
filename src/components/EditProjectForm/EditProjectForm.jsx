import { useState } from "react";
import projectService from "../../services/project.service";

function CreateProjectForm({ onClose, onSuccess, organizationName, isAdmin }) {
  const [formData, setFormData] = useState({
    name: "",
    descripcion: "",
    organization: organizationName || "", // Puedes pasarla directamente si es necesario
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      alert("No tienes permisos para realizar esta acción");
      return;
    }

    setLoading(true);
    try {
      const requestBody = {
        ...formData,
        organization: organizationName, // Aseguramos que se pase bien la org
      };

      await projectService.createProject(requestBody);
      alert("Proyecto creado con éxito");

      onSuccess(); // Refrescar lista de proyectos
      onClose(); // Cerrar el formulario
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      alert("Error al crear el proyecto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md md:max-w-lg rounded-lg shadow-lg p-6">
        {/* Cabecera */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Crear Nuevo Proyecto</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
            ✕
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="label font-semibold">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Descripción</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows="4"
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Creando..." : "Crear Proyecto"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectForm;
