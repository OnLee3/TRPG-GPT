import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../services/apiService";

const CharacterCreationForm = () => {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!characterName) return;

    const characterData = {
      name: characterName,
      // Add other character attributes, skills, and equipment here
    };

    await createCharacter(characterData);
    navigate("/characters");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Character Name:
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
      </label>
      {/* Add other form elements for character attributes, skills, and equipment */}
      <button type="submit">Create Character</button>
    </form>
  );
};

export default CharacterCreationForm;
