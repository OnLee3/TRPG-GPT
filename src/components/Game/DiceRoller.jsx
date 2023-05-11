import React from "react";

const DiceRoller = ({ onRoll }) => {
  const handleRoll = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    onRoll(result);
  };

  return <button onClick={handleRoll}>Roll</button>;
};

export default DiceRoller;
