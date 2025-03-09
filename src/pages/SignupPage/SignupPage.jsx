/* import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    authService
      .signup(requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Sign Up
        </h1>

        <form onSubmit={handleSignupSubmit} className="space-y-6">
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

          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            Sign Up
          </button>
        </form>

        {errorMessage && (
          <p className="mt-4 text-center text-red-600">{errorMessage}</p>
        )}

        <p className="mt-6 text-center text-slate-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-slate-900 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
 */
