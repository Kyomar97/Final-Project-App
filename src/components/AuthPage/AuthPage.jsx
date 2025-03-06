import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function AuthPage() {
  // Estados formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Alternar entre Login y Signup --Boolean
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  // Cambio de estado
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  // Manejador de inicio de sesión
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/home");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  // Registro
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    authService
      .signup(requestBody)
      .then(() => {
        // Cambiar a login después del registro
        setIsLogin(true);
        // REset campos del formulario
        setEmail("");
        setPassword("");
        setName("");
        setErrorMessage(undefined);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  // Alternar entre Login y Signup
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Limpiar mensajes de error y campos
    setErrorMessage(undefined);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h1>

          <form
            onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />
            </div>

            {/* Solo para Sign Up */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {errorMessage && (
            <p className="mt-4 text-center text-red-600">{errorMessage}</p>
          )}

          {/* Enlace switch Login y Sign Up */}
          <p className="mt-6 text-center text-slate-700">
            {isLogin
              ? "Don't have an account yet? "
              : "Already have an account? "}
            <button
              onClick={toggleAuthMode}
              className="text-slate-900 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
