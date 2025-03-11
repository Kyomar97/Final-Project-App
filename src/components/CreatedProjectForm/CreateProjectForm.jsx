import { useState } from "react";
import projectService from "../../services/project.service";

function ProjectForm({ isAdmin, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    descripcion: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      alert("No tienes permisos para realizar esta acción.");
      return;
    }

    setLoading(true);
    try {
      await projectService.createProject(formData);
      alert("Proyecto creado con éxito");
      onSuccess();
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      alert("Error al crear el proyecto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* CABECERA */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">Crear Nuevo Proyecto</h3>
          <button
            className="btn btn-sm btn-circle btn-ghost"
            onClick={onSuccess}
          >
            ✕
          </button>
        </div>

        {/* FORMULARIO CON SCROLL INTERNO */}
        <div className="p-4 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Nombre */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Nombre</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Descripción</span>
              </label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Botón de enviar */}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`btn btn-primary ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar Proyecto"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
