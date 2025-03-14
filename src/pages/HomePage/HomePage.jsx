import { Link } from "react-router-dom";

function HomePage() {
  // Datos de las organizaciones
  const organizations = [
    {
      id: 1,
      name: "Cruz Roja",
      description: "Ayuda humanitaria en situaciones de emergencia.",
      image:
        "data:image/png;base64,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",
      link: "/projects/cruz-roja",
    },
    {
      id: 2,
      name: "Greenpeace",
      description: "Defensa del medio ambiente y la paz.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRFvUFdRuN32RJ0xMQmZPxy0NnmRTkPs0jw&s",
      link: "/projects/greenpeace",
    },
    {
      id: 3,
      name: "Médicos Sin Fronteras",
      description: "Atención médica en zonas de conflicto y catástrofes.",
      image:
        "data:image/png;base64,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",
      link: "/projects/medicos-sin-fronteras",
    },
    {
      id: 4,
      name: "UNICEF",
      description: "Protección de los derechos de los niños.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQEKV8VPt6WAV2Lr0cZM-nkwoPkDNug6iwQ&s",
      link: "/projects/unicef",
    },
  ];

  return (
    <div className="flex flex-col bg-slate-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Organizaciones que necesitan tu ayuda
      </h1>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {organizations.map((org) => (
          <Link
            key={org.id}
            to={org.link}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
          >
            <figure className="px-4 pt-4 flex-grow">
              <img
                src={org.image}
                alt={org.name}
                className="rounded-xl h-64 w-full object-contain"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">{org.name}</h2>
              <p className="text-center">{org.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
