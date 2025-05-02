import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChatWithSubadmin = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "student", text: input }]);
      setInput("");

      // Simulate a Subadmin response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "subadmin", text: "Thank you for your message. We'll get back to you shortly." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow rounded-4">
            <div className="card-header bg-primary text-white">
              Chat with Subadmin
            </div>
            <div
              className="card-body"
              style={{ height: "400px", overflowY: "scroll", background: "#f8f9fa" }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`d-flex mb-2 ${
                    msg.sender === "student" ? "justify-content-end" : "justify-content-start"
                  }`}
                >
                  <div
                    className={`p-2 rounded ${
                      msg.sender === "student" ? "bg-success text-white" : "bg-light"
                    }`}
                    style={{ maxWidth: "75%" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer d-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <button className="btn btn-primary" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithSubadmin;
