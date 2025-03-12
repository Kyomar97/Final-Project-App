import AuthPage from "../../components/AuthPage/AuthPage";

function IntroPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo con blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/fotos-premium/diversidad-equidad-e-inclusion-ninos-ilustracion-concepto-fondo_916191-97212.jpg')",
        }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen p-4">
        {/* Hero con frase de bienvenida y descripción */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Bienvenidos Voluntarios
          </h1>
          <p className="text-lg lg:text-xl text-white opacity-90">
            Únete a nuestra plataforma y forma parte de un cambio significativo.
            Aquí podrás encontrar oportunidades de voluntariado, gestionar tu
            participación y conectarte con comunidades que necesitan tu ayuda.
          </p>
        </div>

        {/* Componente de autenticación */}
        {/* <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-8"> */}
        <AuthPage />
        {/* </div> */}
      </div>
    </div>
  );
}

export default IntroPage;
