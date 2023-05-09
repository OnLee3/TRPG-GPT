import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/apiService";
import Container from "../components/DesignSystem/Container";
import Typography from "../components/DesignSystem/Typography";
import Input from "../components/DesignSystem/Input";
import Button from "../components/DesignSystem/Button";
import Form from "../components/DesignSystem/Form";

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
      <Typography variant="heading" level={4}>
        Reset Password
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Typography variant="label">New Password:</Typography>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {message && <Typography variant="error">{message}</Typography>}
        <Button type="submit">Reset Password</Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
