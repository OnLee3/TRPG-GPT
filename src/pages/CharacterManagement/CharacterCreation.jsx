import React from "react";
import CharacterCreationForm from "../../components/CharacterCreationForm";
import Typography from "../../components/DesignSystem/Typography";
import Container from "../../components/DesignSystem/Container";

const CharacterCreation = () => {
  return (
    <Container>
      <Typography variant="heading" level={4}>
        Create New Character
      </Typography>
      <CharacterCreationForm />
    </Container>
  );
};

export default CharacterCreation;
