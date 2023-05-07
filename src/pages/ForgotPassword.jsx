import React, { useState } from "react";
import { requestPasswordReset } from "../services/apiService";
import {
  Container,
  AuthForm,
  FormLabel,
  FormInput,
  ErrorMessage,
  FormButton,
  FormTitle,
} from "../styles/authStyles";

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
      <FormTitle>Forgot Password</FormTitle>
      <AuthForm onSubmit={handleSubmit}>
        <FormLabel>Email:</FormLabel>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <FormButton type="submit">Send Reset Email</FormButton>
      </AuthForm>
    </Container>
  );
};

export default ForgotPassword;
