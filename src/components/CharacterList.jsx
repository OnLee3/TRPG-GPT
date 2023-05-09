import React from "react";
import CharacterCard from "./CharacterCard";
import Container from "./DesignSystem/Container";

const CharacterList = ({ characters }) => {
  return (
    <Container>
      {characters.map((character) => (
        <CharacterCard key={character._id} character={character} />
      ))}
    </Container>
  );
};

export default CharacterList;
