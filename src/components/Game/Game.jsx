import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";

import Map from "./Map";
import Token from "./Token";
import Chat from "./Chat";
import DiceRoller from "./DiceRoller";
import { useParams } from "react-router-dom";
import { getGameSession } from "../../services/apiService";

const Game = () => {
  const { gameId } = useParams();
  const [gameSession, setGameSession] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    getGameSession(gameId).then(setGameSession);
  }, [gameId]);

  if (!gameSession) return null;

  const handleMoveToken = (tokenID, newPosition) => {
    console.log(tokenID);
    console.log(newPosition);
    // Update game state and send move to GPT-API
  };

  const handleSendMessage = (message, channel) => {
    console.log(message);
    console.log(channel);
    setChatMessages([...chatMessages, message]);
    // Send message to chat server
  };

  const handleRollDice = (dice) => {
    console.log(dice);
    console.log(gameSession);
    // Generate random dice roll and send to GPT-API
  };

  return (
    <GameWrapper>
      <DndProvider backend={HTML5Backend}>
        <Map>
          {gameSession?.players?.map((token, idx) => (
            <Token
              key={Number(token.id) + idx}
              id={token.id}
              onMove={handleMoveToken}
            />
          ))}
        </Map>
        <Chat messages={chatMessages} onSend={handleSendMessage} />
        <DiceRoller onRoll={handleRollDice} />
      </DndProvider>
    </GameWrapper>
  );
};

const GameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export default Game;
