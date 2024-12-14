import React, { useState } from "react";
import './Chatbot.css'; // Optional: Create a CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    if (currentMessage.trim() === "") return;

    setMessages([...messages, { text: currentMessage, sender: "user" }]);
    setCurrentMessage("");
  };

  return (
    <div className="chatbot">
      <h1>Aarohi AI</h1>
      <p>Hi, I’m Aarohi, your AI psychologist. I’m here to listen, guide, and support you in navigating your thoughts and feelings. If you wanna talk to someone, I’m here 24/7. Everything you share stays private and secure. Let’s talk!</p>
      <br/><br/><br/><br/><br/><br/><br/><p>It's okay to not be okay. Your feelings are valid.</p>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
