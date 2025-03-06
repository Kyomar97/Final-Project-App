import AuthPage from "../../components/AuthPage/AuthPage";

function IntroPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-ms brightness-50"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/fotos-premium/diversidad-equidad-e-inclusion-ninos-ilustracion-concepto-fondo_916191-97212.jpg')",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8">
          <AuthPage />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
