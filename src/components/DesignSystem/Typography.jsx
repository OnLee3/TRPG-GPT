import React from "react";
import styled from "styled-components";

const Typography = ({ variant, children, level, ...props }) => {
  switch (variant) {
    case "heading":
      return (
        <StyledHeading as={`h${level}`} {...props}>
          {children}
        </StyledHeading>
      );
    case "label":
      return <StyledLabel {...props}>{children}</StyledLabel>;
    case "error":
      return <ErrorMessage {...props}>{children}</ErrorMessage>;
    default:
      return null;
  }
};

const StyledHeading = styled.h1`
  font-size: ${({ level }) => {
    switch (level) {
      case 1:
        return "2rem";
      case 2:
        return "1.8rem";
      case 3:
        return "1.6rem";
      case 4:
        return "1.4rem";
      case 5:
        return "1.2rem";
      case 6:
        return "1rem";
      default:
        return "2rem";
    }
  }};
  margin-bottom: 1rem;
  color: #333;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #444;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export default Typography;
