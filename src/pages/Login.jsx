import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiService";
import {
  AuthForm,
  Container,
  ErrorMessage,
  FormButton,
  FormInput,
  FormLabel,
  FormTitle,
} from "../styles/authStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/game-lobby");
    } catch (err) {
      setError("Login failed.");
    }
  };

  return (
    <Container>
      <FormTitle>Login</FormTitle>
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
        <FormButton type="submit">Login</FormButton>
      </AuthForm>
    </Container>
  );
};

export default Login;
