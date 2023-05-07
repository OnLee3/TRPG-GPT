import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/apiService";
import {
  AuthForm,
  Container,
  ErrorMessage,
  FormButton,
  FormInput,
  FormLabel,
  FormTitle,
} from "../styles/authStyles";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, newPassword);
      setMessage(
        "Password has been reset successfully. You can now log in with your new password."
      );
      navigate("/login");
    } catch (err) {
      setMessage("Failed to reset password. Please try again later.");
    }
  };

  return (
    <Container>
      <FormTitle>Reset Password</FormTitle>
      <AuthForm onSubmit={handleSubmit}>
        <FormLabel>New Password:</FormLabel>
        <FormInput
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <FormButton type="submit">Reset Password</FormButton>
      </AuthForm>
    </Container>
  );
};

export default ResetPassword;
