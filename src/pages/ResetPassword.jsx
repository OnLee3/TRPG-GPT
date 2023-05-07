import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { resetPassword } from "../services/apiService";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { token } = useParams();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, newPassword);
      setMessage(
        "Password has been reset successfully. You can now log in with your new password."
      );
      history.push("/login");
    } catch (err) {
      setMessage("Failed to reset password. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {message && <p>{message}</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
