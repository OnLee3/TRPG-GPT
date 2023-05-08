import React from "react";

const GameSession = ({ gameSession, onJoin }) => {
  return (
    <li key={gameSession._id}>
      <h2>{gameSession.sessionName}</h2>
      <p>Players: {gameSession.players.length}</p>
      <button onClick={() => onJoin(gameSession._id)}>Join Game Session</button>
    </li>
  );
};

export default GameSession;
