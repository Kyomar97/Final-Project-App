import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/SideBar/SideBar";

import IntroPage from "./pages/IntroPage/IntroPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="App">
      <Navbar onOpenSidebar={handleOpenSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />

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
