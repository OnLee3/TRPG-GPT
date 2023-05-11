import styled from "styled-components";

const TokenWrapper = styled.div`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  border-radius: 50%;
  background-color: ${(props) => props.color || "blue"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: ${(props) =>
    props.size ? parseInt(props.size) / 2.5 + "px" : "20px"};
  border: 2px solid white;
`;

const Token = ({ color, size, children }) => {
  return (
    <TokenWrapper color={color} size={size}>
      {children}
    </TokenWrapper>
  );
};

export default Token;
