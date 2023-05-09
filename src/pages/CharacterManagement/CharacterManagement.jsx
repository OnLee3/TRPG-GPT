import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../services/apiService";
import CharacterList from "../../components/CharacterList";

const CharacterManagement = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterList = await getCharacters();
      setCharacters(characterList);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Character Management</h1>
      <CharacterList characters={characters} />
      <Link to="/characters/create">
        <button>Create New Character</button>
      </Link>
    </div>
  );
};

export default CharacterManagement;
