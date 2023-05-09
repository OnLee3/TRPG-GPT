import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Our Game</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/forgot-password">Forgot Password</Link>
          </li>
          <li>
            <Link to="/reset-password">Reset Password</Link>
          </li>
          <li>
            <Link to="/game-lobby">Game Lobby</Link>
          </li>
          <li>
            <Link to="/characters">Character Management</Link>
          </li>
          <li>
            <Link to="/characters/create">Create Character</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
