import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import GameLobby from "./pages/GameLobby/GameLobby";
import { isAuthenticated } from "./services/apiService";
import CharacterManagement from "./pages/CharacterManagement/CharacterManagement";
import CharacterCreation from "./pages/CharacterManagement/CharacterCreation";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/game-lobby"
          element={isAuthenticated() ? <GameLobby /> : <Navigate to="/login" />}
        />
        <Route path="/characters" element={<CharacterManagement />} />
        <Route path="/characters/create" element={<CharacterCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
