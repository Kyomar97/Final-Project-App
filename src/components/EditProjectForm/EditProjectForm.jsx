import { useState, useEffect } from "react";
import projectService from "../../services/project.service";

function EditProjectForm({
  project,
  onClose,
  onSuccess,
  organizationName,
  isAdmin,
}) {
  const [formData, setFormData] = useState({
    name: "",
    descripcion: "",
    organizacion: organizationName || "",
    objetivo: "",
    ubicacion: { isla: "", municipio: "" },
    fecha_inicio: "",
    fecha_fin: "",
    estado: "pendiente",
    beneficiarios: 0,
    recursos: {
      presupuesto: 0,
      financiadores: [],
      voluntarios: 0,
    },
  });

  const [loading, setLoading] = useState(false);
  const [financiadorInput, setFinanciadorInput] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await projectService.api.get(
          `/projects/${project._id}`
        );
        const fetchedProject = response.data;

        setFormData({
          name: fetchedProject.name || "",
          descripcion: fetchedProject.descripcion || "",
          organizacion: fetchedProject.organizacion || organizationName,
          objetivo: fetchedProject.objetivo || "",
          ubicacion: {
            isla: fetchedProject.ubicacion?.isla || "",
            municipio: fetchedProject.ubicacion?.municipio || "",
          },
          fecha_inicio: fetchedProject.fecha_inicio?.slice(0, 10) || "",
          fecha_fin: fetchedProject.fecha_fin?.slice(0, 10) || "",
          estado: fetchedProject.estado || "pendiente",
          beneficiarios: fetchedProject.beneficiarios || 0,
          recursos: {
            presupuesto: fetchedProject.recursos?.presupuesto || 0,
            financiadores: fetchedProject.recursos?.financiadores || [],
            voluntarios: fetchedProject.recursos?.voluntarios || 0,
          },
        });
      } catch (error) {
        console.error("Error al cargar el proyecto:", error);
        alert("No se pudo cargar el proyecto.");
      } finally {
        setLoading(false);
      }
    };

    if (project._id) {
      fetchProject();
    }
  }, [project._id, organizationName]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("ubicacion.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        ubicacion: {
          ...prev.ubicacion,
          [field]: value,
        },
      }));
    } else if (name.startsWith("recursos.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        recursos: {
          ...prev.recursos,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addFinanciador = () => {
    if (financiadorInput.trim() === "") return;

    setFormData((prev) => ({
      ...prev,
      recursos: {
        ...prev.recursos,
        financiadores: [...prev.recursos.financiadores, financiadorInput],
      },
    }));

    setFinanciadorInput("");
  };

  const removeFinanciador = (index) => {
    setFormData((prev) => {
      const updatedFinanciadores = [...prev.recursos.financiadores];
      updatedFinanciadores.splice(index, 1);
      return {
        ...prev,
        recursos: {
          ...prev.recursos,
          financiadores: updatedFinanciadores,
        },
      };
    });
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
        organizacion: organizationName,
      };

      await projectService.updateProject(project._id, requestBody);

      alert("Proyecto actualizado con éxito");

      if (onSuccess) onSuccess();
      onClose();
    } catch (error) {
      console.error("Error al actualizar el proyecto:", error);
      alert("Error al actualizar el proyecto");
    } finally {
      setLoading(false);
    }
  };

  // NUEVO: Eliminar Proyecto
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este proyecto? Esta acción eliminará también sus actividades y usuarios inscritos."
    );

    if (!confirmDelete) return;

    setLoading(true);
    try {
      await projectService.deleteProject(project._id);

      alert("Proyecto eliminado con éxito");

      if (onSuccess) onSuccess();
      onClose();
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
      alert("Error al eliminar el proyecto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Editar Proyecto</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
            ✕
          </button>
        </div>

        {loading ? (
          <p>Cargando proyecto...</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Nombre */}
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

            {/* Descripción */}
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

            {/* Objetivo */}
            <div>
              <label className="label font-semibold">Objetivo</label>
              <textarea
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                rows="3"
                className="textarea textarea-bordered w-full"
              />
            </div>

            {/* Ubicación */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label font-semibold">Isla</label>
                <input
                  type="text"
                  name="ubicacion.isla"
                  value={formData.ubicacion.isla}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <label className="label font-semibold">Municipio</label>
                <input
                  type="text"
                  name="ubicacion.municipio"
                  value={formData.ubicacion.municipio}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Fechas */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label font-semibold">Fecha de Inicio</label>
                <input
                  type="date"
                  name="fecha_inicio"
                  value={formData.fecha_inicio}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <label className="label font-semibold">Fecha de Fin</label>
                <input
                  type="date"
                  name="fecha_fin"
                  value={formData.fecha_fin}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Estado */}
            <div>
              <label className="label font-semibold">Estado</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="pendiente">Pendiente</option>
                <option value="en progreso">En Progreso</option>
                <option value="completado">Completado</option>
              </select>
            </div>

            {/* Beneficiarios */}
            <div>
              <label className="label font-semibold">
                Número de Beneficiarios
              </label>
              <input
                type="number"
                name="beneficiarios"
                value={formData.beneficiarios}
                onChange={handleChange}
                className="input input-bordered w-full"
                min="0"
              />
            </div>

            {/* Recursos */}
            <div>
              <label className="label font-semibold">Presupuesto (€)</label>
              <input
                type="number"
                name="recursos.presupuesto"
                value={formData.recursos.presupuesto}
                onChange={handleChange}
                className="input input-bordered w-full"
                min="0"
              />
            </div>

            {/* Financiadores */}
            <div>
              <label className="label font-semibold">Financiadores</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={financiadorInput}
                  onChange={(e) => setFinanciadorInput(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Añadir financiador"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addFinanciador}
                >
                  Agregar
                </button>
              </div>
              <ul className="list-disc pl-5">
                {formData.recursos.financiadores.map((fin, index) => (
                  <li key={index} className="flex justify-between items-center">
                    {fin}
                    <button
                      type="button"
                      onClick={() => removeFinanciador(index)}
                      className="btn btn-xs btn-error"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Voluntarios */}
            <div>
              <label className="label font-semibold">
                Número de Voluntarios
              </label>
              <input
                type="number"
                name="recursos.voluntarios"
                value={formData.recursos.voluntarios}
                onChange={handleChange}
                className="input input-bordered w-full"
                min="0"
              />
            </div>

            {/* Botones */}
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className={`btn btn-primary flex-1 ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Actualizando..." : "Actualizar Proyecto"}
              </button>

              {/* Botón Eliminar solo para Admin */}
              {isAdmin && (
                <button
                  type="button"
                  className="btn btn-error flex-1"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  {loading ? "Eliminando..." : "Eliminar Proyecto"}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditProjectForm;
