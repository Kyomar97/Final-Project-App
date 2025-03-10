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

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="App">
      <Navbar onToggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <Routes>
        {/* Página de introducción */}
        <Route path="/" element={<IntroPage />} />

        {/* Página de inicio */}
        <Route path="/home" element={<HomePage />} />

        {/* Página de proyectos (dinámica según la organización) */}
        <Route path="/projects/:organizationName" element={<ProjectsPage />} />

        {/* Página de perfil (privada) */}
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
