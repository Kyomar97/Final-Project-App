import { useState } from "react";
import projectService from "../../services/project.service";

function CreateProjectForm({ onClose, onSuccess, organizationName, isAdmin }) {
  const [formData, setFormData] = useState({
    name: "",
    descripcion: "",
    organizacion: organizationName || "", // 👈 cambia aquí el nombre al correcto
    objetivo: "",
    ubicacion: {
      isla: "",
      municipio: "",
    },
    fecha_inicio: "",
    fecha_fin: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Para ubicacion (isla y municipio)
    if (name === "isla" || name === "municipio") {
      setFormData((prev) => ({
        ...prev,
        ubicacion: {
          ...prev.ubicacion,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      alert("No tienes permisos para realizar esta acción");
      return;
    }

    console.log("Datos que enviamos al backend:", formData);

    // Validación simple en frontend
    if (
      !formData.name ||
      !formData.descripcion ||
      !formData.organizacion ||
      !formData.objetivo ||
      !formData.ubicacion.isla ||
      !formData.ubicacion.municipio ||
      !formData.fecha_inicio ||
      !formData.fecha_fin
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);

    try {
      const response = await projectService.createProject(formData);

      console.log("Proyecto creado:", response.data);

      alert("Proyecto creado con éxito ✅");

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error al crear el proyecto:", error);

      if (error.response) {
        console.log("Error response:", error.response);
        alert(
          `Error ${error.response.status}: ${
            error.response.data.message || "Algo salió mal"
          }`
        );
      } else {
        alert(`Error desconocido: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md md:max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Crear Nuevo Proyecto</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
            ✕
          </button>
        </div>

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

          <div>
            <label className="label font-semibold">Objetivo</label>
            <textarea
              name="objetivo"
              value={formData.objetivo}
              onChange={handleChange}
              rows="2"
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Isla</label>
            <input
              type="text"
              name="isla"
              value={formData.ubicacion.isla}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Municipio</label>
            <input
              type="text"
              name="municipio"
              value={formData.ubicacion.municipio}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Fecha de Inicio</label>
            <input
              type="date"
              name="fecha_inicio"
              value={formData.fecha_inicio}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Fecha de Fin</label>
            <input
              type="date"
              name="fecha_fin"
              value={formData.fecha_fin}
              onChange={handleChange}
              className="input input-bordered w-full"
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
