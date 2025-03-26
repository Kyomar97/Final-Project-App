import { useState } from "react";
import actividadService from "../../services/actividad.service";

const ActivitySuggestions = ({ projectId }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuggestions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const suggestions = await actividadService.getSugerenciasDeIA(projectId);
      setSuggestions(suggestions);
    } catch (err) {
      setError("Error al obtener sugerencias. Por favor, inténtalo de nuevo.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-sm mt-6 border border-gray-200">
      <h3 className="text-lg font-medium text-gray-800 mb-3">
        ¿Necesitas ideas para actividades?
      </h3>

      <button
        onClick={fetchSuggestions}
        disabled={isLoading}
        className={`px-4 py-2 rounded-md text-white font-medium ${
          isLoading
            ? "bg-indigo-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        } transition-colors`}
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Generando...
          </span>
        ) : (
          "Obtener sugerencias de IA"
        )}
      </button>

      {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

      {suggestions.length > 0 && (
        <div className="mt-4 bg-white p-4 rounded-md shadow-xs border border-gray-100">
          <h4 className="font-medium text-gray-700 mb-2">
            Sugerencias generadas:
          </h4>
          <ul className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 mt-1 mr-2">
                  <svg
                    className="h-4 w-4 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">{suggestion}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Puedes usar estas sugerencias como inspiración para crear nuevas
              actividades.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivitySuggestions;
