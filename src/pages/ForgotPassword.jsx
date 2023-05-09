import React, { useState } from "react";
import { requestPasswordReset } from "../services/apiService";
import Container from "../components/DesignSystem/Container";
import Typography from "../components/DesignSystem/Typography";
import Button from "../components/DesignSystem/Button";
import Input from "../components/DesignSystem/Input";
import Form from "../components/DesignSystem/Form";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestPasswordReset(email);
      setMessage("Email sent. Please check your inbox.");
    } catch (err) {
      setMessage("Failed to send email. Please try again later.");
    }
  };

  return (
    <Container>
      <Typography variant="heading" level={4}>
        Forgot Password
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Typography variant="label">Email:</Typography>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && <Typography variant="error">{message}</Typography>}
        <Button type="submit">Send Reset Email</Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
