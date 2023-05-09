import React from "react";
import Typography from "./DesignSystem/Typography";
import Container from "./DesignSystem/Container";

const CharacterCard = ({ character }) => {
  return (
    <Container>
      <Typography variant="heading" level={5}>
        {character.name}
      </Typography>
      {/* Display character attributes, skills, and equipment */}
    </Container>
  );
};

export default CharacterCard;
