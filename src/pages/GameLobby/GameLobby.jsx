import React, { useEffect, useState } from "react";
import {
  createGameSession,
  joinGameSession,
  getGameSessions,
} from "../../services/apiService";
import GameSession from "./GameSession";

const GameLobby = () => {
  const [gameSessions, setGameSessions] = useState([]);

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
  };

  return (
    <div>
      <h1>Game Lobby</h1>
      <button onClick={handleCreateSession}>Create Game Session</button>
      <ul>
        {gameSessions.map((gameSession) => (
          <GameSession
            key={gameSession._id}
            gameSession={gameSession}
            onJoin={handleJoinSession}
          />
        ))}
      </ul>
    </div>
  );
};

export default GameLobby;
