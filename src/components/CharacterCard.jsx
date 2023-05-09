import React from "react";
import {
  CharacterCardBody,
  CharacterCardTitle,
  CharacterCard as Container,
} from "../styles/characterStyles.js";

const CharacterCard = ({ character }) => {
  return (
    <Container>
      <CharacterCardTitle variant="heading" level={6}>
        {character.name}
      </CharacterCardTitle>
      <CharacterCardBody>
        {/* Display character attributes, skills, and equipment */}
      </CharacterCardBody>
    </Container>
  );
};

export default CharacterCard;
