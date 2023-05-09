import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../services/apiService";
import Typography from "./DesignSystem/Typography";
import Input from "./DesignSystem/Input";
import Button from "./DesignSystem/Button";
import Form from "./DesignSystem/Form";

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
    <Form onSubmit={handleSubmit}>
      <Typography variant="label">
        Character Name:
        <Input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
      </Typography>
      {/* Add other form elements for character attributes, skills, and equipment */}
      <Button type="submit">Create Character</Button>
    </Form>
  );
};

export default CharacterCreationForm;
