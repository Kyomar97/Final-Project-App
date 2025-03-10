import { Link } from "react-router-dom";

function HomePage() {
  // Datos de las organizaciones
  const organizations = [
    {
      id: 1,
      name: "Cruz Roja",
      description: "Ayuda humanitaria en situaciones de emergencia.",
      image: "https://via.placeholder.com/300x200?text=Cruz+Roja",
      link: "/projects/cruz-roja",
    },
    {
      id: 2,
      name: "Greenpeace",
      description: "Defensa del medio ambiente y la paz.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Greenpeace_logo.svg/1200px-Greenpeace_logo.svg.png",
      link: "/projects/greenpeace",
    },
    {
      id: 3,
      name: "Médicos Sin Fronteras",
      description: "Atención médica en zonas de conflicto y catástrofes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/M%C3%A9decins_Sans_Fronti%C3%A8res_Logo.svg/1200px-M%C3%A9decins_Sans_Fronti%C3%A8res_Logo.svg.png",
      link: "/projects/medicos-sin-fronteras",
    },
    {
      id: 4,
      name: "UNICEF",
      description: "Protección de los derechos de los niños.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/UNICEF_Logo.svg/1200px-UNICEF_Logo.svg.png",
      link: "/projects/unicef",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen p-4">
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
