import React from "react";
import { useState, useEffect } from "react";
import { BoxMessage } from "./style";

const MessageComponent = () => {
  const message = [
    "Não há carros registrados. talvez vendemos tudo??!",
    "Os carros infelizmente estão desaparecidos",
    "Aonde estão esses carros? nossa que estranho!"
    
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const changeMessage = () => {
      const randomIndex = Math.floor(Math.random() * message.length);
      setCurrentMessageIndex(randomIndex);
    };

    const intervalId = setInterval(changeMessage, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BoxMessage>
      <p>{message[currentMessageIndex]}</p>
    </BoxMessage>
  );
};

export default MessageComponent;
