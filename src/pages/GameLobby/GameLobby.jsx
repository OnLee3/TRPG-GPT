import React, { useEffect, useState } from "react";
import {
  createGameSession,
  joinGameSession,
  getGameSessions,
} from "../../services/apiService";
import GameSession from "./GameSession";
import Typography from "../../components/DesignSystem/Typography";
import Button from "../../components/DesignSystem/Button";
import Container from "../../components/DesignSystem/Container";
import { useNavigate } from "react-router-dom";

const GameLobby = () => {
  const [gameSessions, setGameSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGameSessions().then(setGameSessions);
  }, []);

  const handleCreateSession = async () => {
    const newGameSession = await createGameSession("New Game Session");
    setGameSessions([...gameSessions, newGameSession]);
  };

  const handleJoinSession = async (sessionId) => {
    const gameSession = gameSessions.find(
      (session) => session._id === sessionId
    );
    const userId = localStorage.getItem("user_id");

    if (gameSession.players.includes(userId)) {
      alert("You have already joined this game session.");
    } else {
      await joinGameSession(sessionId);
    }
    navigate(`/game/${sessionId}`);
  };

  return (
    <Container>
      <Typography variant="heading" level={4}>
        Game Lobby
      </Typography>
      <Button onClick={handleCreateSession}>Create Game Session</Button>
      <ul>
        {gameSessions.map((gameSession) => (
          <GameSession
            key={gameSession._id}
            gameSession={gameSession}
            onJoin={handleJoinSession}
          />
        ))}
      </ul>
    </Container>
  );
};

export default GameLobby;
