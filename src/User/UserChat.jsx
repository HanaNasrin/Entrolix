// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useEffect } from "react";

// const ChatWithSubadmin = () => {
//   const studentId = localStorage.getItem("studentId"); // Or from context/session

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

  
// const handleSend = async () => {
//   if (input.trim()) {
//     const newMessage = { sender: "student", text: input };
//     setMessages([...messages, newMessage]);
//     setInput("");

//     await axios.post("http://localhost:8000/api/chat/messages/", {
//       student_id: studentId,
//       text: input,
//     });

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "subadmin", text: "Thank you for your message." },
//       ]);
//     }, 1000);
//   }
// };

//   return (
//     <div className="container py-4">
//       <div className="row justify-content-center">
//         <div className="col-12 col-md-8 col-lg-6">
//           <div className="card shadow rounded-4">
//             <div className="card-header bg-primary text-white">
//               Chat with Subadmin
//             </div>
//             <div
//               className="card-body"
//               style={{ height: "400px", overflowY: "scroll", background: "#f8f9fa" }}
//             >
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`d-flex mb-2 ${
//                     msg.sender === "student" ? "justify-content-end" : "justify-content-start"
//                   }`}
//                 >
//                   <div
//                     className={`p-2 rounded ${
//                       msg.sender === "student" ? "bg-success text-white" : "bg-light"
//                     }`}
//                     style={{ maxWidth: "75%" }}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="card-footer d-flex">
//               <input
//                 type="text"
//                 className="form-control me-2"
//                 placeholder="Type your message..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSend()}
//               />
//               <button className="btn btn-primary" onClick={handleSend}>
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWithSubadmin;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ChatWithSubadmin = () => {
  const studentId = localStorage.getItem("studentId");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch messages from backend
  useEffect(() => {
    axios.get("http://localhost:8000/api/chat/messages/")
      .then((res) => {
        const studentMessages = res.data.filter(msg => msg.student === parseInt(studentId));
        setMessages(studentMessages);
      })
      .catch((err) => {
        console.error("Failed to fetch messages", err);
      });
  }, [studentId]);

  const handleSend = async () => {
    if (input.trim()) {
      try {
        await axios.post("http://localhost:8000/api/chat/messages/", {
          student_id: studentId,
          text: input,
        });
        setInput("");

        // Re-fetch updated messages after sending
        const res = await axios.get("http://localhost:8000/api/chat/messages/");
        const studentMessages = res.data.filter(msg => msg.student === parseInt(studentId));
        setMessages(studentMessages);
      } catch (err) {
        console.error("Failed to send message", err);
      }
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
              {messages.length === 0 ? (
                <p>No messages yet.</p>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="mb-3">
                    {/* Student message */}
                    <div className="d-flex justify-content-end mb-1">
                      <div className="p-2 bg-success text-white rounded" style={{ maxWidth: "75%" }}>
                        {msg.text}
                      </div>
                    </div>

                    {/* Subadmin replies */}
                    {msg.replies && msg.replies.length > 0 && (
                      msg.replies.map((reply) => (
                        <div key={reply.id} className="d-flex justify-content-start mb-1">
                          <div className="p-2 bg-light rounded" style={{ maxWidth: "75%" }}>
                            {reply.reply_text}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ))
              )}
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
