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
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/organization/cruz-roja" element={<ProjectsPage />} />
        <Route path="/organization/greenpeace" element={<ProjectsPage />} />
        <Route path="/organization/unicef" element={<ProjectsPage />} />
        <Route
          path="/organization/medicos-sin-fronteras"
          element={<ProjectsPage />}
        />

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
