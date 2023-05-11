import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const Map = ({ children }) => {
  const [, drop] = useDrop(() => ({ accept: "token" }));

  return <MapWrapper ref={drop}>{children}</MapWrapper>;
};

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #eee;
  border: 1px solid #333;
`;

export default Map;
