import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #333;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

export default Button;
