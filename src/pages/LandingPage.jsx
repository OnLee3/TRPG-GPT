import React from "react";
import { Link } from "react-router-dom";
import Typography from "../components/DesignSystem/Typography";
import Container from "../components/DesignSystem/Container";

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="heading" level={4}>
        Welcome to Our Game
      </Typography>
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
    </Container>
  );
};

export default LandingPage;
