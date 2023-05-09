import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/apiService";
import Container from "../components/DesignSystem/Container";
import Typography from "../components/DesignSystem/Typography";
import Input from "../components/DesignSystem/Input";
import Button from "../components/DesignSystem/Button";
import Form from "../components/DesignSystem/Form";

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
      <Typography variant="heading" level={4}>
        Register
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
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
