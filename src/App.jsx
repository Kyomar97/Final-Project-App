import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/SideBar/SideBar";

import IntroPage from "./pages/IntroPage/IntroPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ActividadesPage from "./pages/ActividadesPage/ActividadesPage";
// Importa las nuevas páginas (necesitarás crearlas)
import SobreProyectoPage from "./pages/SobreProyectoPage/SobreProyectoPage";
/* import LaborCanariasPage(cambiar nombre y rutas) from "./pages/LaborCanariasPage/LaborCanariasPage";
import MisProyectosPage(cambiar nombres y rutas) from "./pages/MisProyectosPage/MisProyectosPage";
 */
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="App">
      <Navbar onToggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <Routes>
        <Route path="/" element={<IntroPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/projects/:organizationName" element={<ProjectsPage />} />
        <Route
          path="/projects/:projectId/actividades"
          element={<ActividadesPage />}
        />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        {/* Nuevas rutas para el sidebar */}
        {/*  <Route path="/proyectos" element={<ProjectsPage />} /> */}
        <Route path="/sobre-proyecto" element={<SobreProyectoPage />} />
        {/* <Route path="/labor-en-canarias" element={<LaborCanariasPage />} /> */}
        <Route
          path="/mis-proyectos"
          element={<IsPrivate>{/* <MisProyectosPage /> */}</IsPrivate>}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
