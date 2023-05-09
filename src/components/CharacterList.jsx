import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character._id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
