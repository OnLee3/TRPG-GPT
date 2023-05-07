import React from "react";

const GameSession = ({ gameSession, onJoin }) => {
  return (
    <li>
      <h2>{gameSession.name}</h2>
      <p>Players: {gameSession.players.length}</p>
      <button onClick={() => onJoin(gameSession.id)}>Join Game Session</button>
    </li>
  );
};

export default GameSession;
