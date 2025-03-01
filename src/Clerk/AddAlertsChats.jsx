import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBell, FaPaperPlane, FaComments } from "react-icons/fa";

const AddAlertsChats = () => {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Handle adding alerts
  const handleAddAlert = () => {
    if (newAlert.trim() !== "") {
      setAlerts([...alerts, newAlert]);
      setNewAlert("");
    }
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "Clerk" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Alerts Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <FaBell className="me-2" /> Alerts
            </div>
            <div className="card-body">
              <ul className="list-group mb-3">
                {alerts.length > 0 ? (
                  alerts.map((alert, index) => (
                    <li key={index} className="list-group-item">
                      {alert}
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-muted">No alerts yet.</li>
                )}
              </ul>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Enter alert message"
                  value={newAlert}
                  onChange={(e) => setNewAlert(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAddAlert}>
                  Add Alert
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Support Section */}
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <FaComments className="me-2" /> Chat Support
            </div>
            <div className="card-body chat-box" style={{ height: "300px", overflowY: "auto" }}>
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} className={`d-flex mb-2 ${msg.sender === "Clerk" ? "justify-content-end" : ""}`}>
                    <div
                      className={`p-2 rounded ${msg.sender === "Clerk" ? "bg-primary text-white" : "bg-light text-dark"}`}
                      style={{ maxWidth: "75%" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No messages yet.</p>
              )}
            </div>
            <div className="card-footer">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="btn btn-success" onClick={handleSendMessage}>
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAlertsChats;
