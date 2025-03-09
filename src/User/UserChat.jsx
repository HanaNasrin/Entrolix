import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserChat = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
        { sender: "bot", text: "Thank you for your message. Our team will respond shortly!" },
      ]);
      setUserMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mt-4">
      <h4>Chat Support</h4>
      <div className="chat-box border rounded p-3 mb-3" style={{ height: "300px", overflowY: "auto" }}>
        {messages.length === 0 ? (
          <p className="text-muted text-center">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-2 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}
            >
              <div
                className={`p-2 rounded ${
                  msg.sender === "user" ? "bg-primary text-white" : "bg-light text-dark"
                }`}
                style={{ maxWidth: "70%" }}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};
export default UserChat;