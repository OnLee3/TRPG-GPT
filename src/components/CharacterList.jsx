import React from "react";
import CharacterCard from "./CharacterCard";
import { CharacterList as Container } from "../styles/characterStyles.js";

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
