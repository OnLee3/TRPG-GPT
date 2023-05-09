import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../services/apiService";
import CharacterList from "../../components/CharacterList";
import Typography from "../../components/DesignSystem/Typography";
import Container from "../../components/DesignSystem/Container";

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
    <Container>
      <Typography variant="heading" level={4}>
        Character Management
      </Typography>
      <CharacterList characters={characters} />
      <Link to="/characters/create">
        <button>Create New Character</button>
      </Link>
    </Container>
  );
};

export default CharacterManagement;
