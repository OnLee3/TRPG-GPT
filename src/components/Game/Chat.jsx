import React, { useState } from "react";
import styled from "styled-components";

const Chat = ({ messages, onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend(message);
    setMessage("");
  };

  return (
    <ChatWrapper>
      {messages.map((message, index) => (
        <Message key={index}>{message}</Message>
      ))}
      <Form onSubmit={handleSubmit}>
        <Input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button type="submit">Send</Button>
      </Form>
    </ChatWrapper>
  );
};

export default Chat;

const ChatWrapper = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid #000;
  overflow-y: auto;
  padding: 10px;
`;

const Message = styled.p`
  margin-bottom: 10px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;
