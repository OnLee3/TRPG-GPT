import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiService";
import Container from "../components/DesignSystem/Container";
import Typography from "../components/DesignSystem/Typography";
import Input from "../components/DesignSystem/Input";
import Button from "../components/DesignSystem/Button";
import Form from "../components/DesignSystem/Form";

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
      <Typography variant="heading" level={4}>
        Login
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Typography variant="label">Email:</Typography>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography variant="label">Password:</Typography>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography variant="error">{error}</Typography>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
