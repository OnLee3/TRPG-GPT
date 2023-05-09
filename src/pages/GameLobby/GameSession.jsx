import React from "react";
import Typography from "../../components/DesignSystem/Typography";
import Button from "../../components/DesignSystem/Button";

const GameSession = ({ gameSession, onJoin }) => {
  return (
    <li key={gameSession._id}>
      <Typography variant="heading" level={4}>
        {gameSession.sessionName}
      </Typography>
      <p>Players: {gameSession.players.length}</p>
      <Button onClick={() => onJoin(gameSession._id)}>Join Game Session</Button>
    </li>
  );
};

export default GameSession;
