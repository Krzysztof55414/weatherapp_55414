import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import Favorites from "./pages/favorites";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#101c22", color: "#e0e0e0" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
