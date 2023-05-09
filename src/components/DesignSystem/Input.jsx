import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, onChange, ...props }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      {...props}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #777;
  }
`;

export default Input;
