import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/apiService";
import {
  AuthForm,
  Container,
  ErrorMessage,
  FormButton,
  FormInput,
  FormLabel,
  FormTitle,
} from "../styles/authStyles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/login");
    } catch (err) {
      setError("Registration failed.");
    }
  };

  return (
    <Container>
      <FormTitle>Register</FormTitle>
      <AuthForm onSubmit={handleSubmit}>
        <FormLabel>Email:</FormLabel>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Password:</FormLabel>
        <FormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormButton type="submit">Register</FormButton>
      </AuthForm>
    </Container>
  );
};

export default Register;
