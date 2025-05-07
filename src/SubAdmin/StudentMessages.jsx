// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const StudentMessagesWithReplies = () => {
//   const [messages, setMessages] = useState([]);
//   const [replyInputs, setReplyInputs] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/chat/messages/")
//       .then((res) => res.json())
//       .then((data) => {
//         setMessages(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching messages:", err);
//         toast.error("Failed to load messages.");
//         setLoading(false);
//       });
//   }, []);

//   const handleReplyChange = (id, value) => {
//     setReplyInputs((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const handleReplySubmit = async (messageId) => {
//     const replyText = replyInputs[messageId]?.trim();
//     if (!replyText) {
//       toast.error("Reply cannot be empty.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/api/chat/reply/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message_id: messageId,
//           reply_text: replyText,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit reply.");
//       }

//       toast.success("Reply sent!");

//       // Optionally refresh messages or update local state
//       setMessages((prev) =>
//         prev.map((msg) =>
//           msg.id === messageId
//             ? { ...msg, replies: [...msg.replies, replyText] }
//             : msg
//         )
//       );
//       setReplyInputs((prev) => ({ ...prev, [messageId]: "" }));
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to send reply.");
//     }
//   };

//   return (
//     <div className="container py-4">
//       <h3 className="mb-4">Student Messages & Replies</h3>
//       {loading ? (
//         <p>Loading messages...</p>
//       ) : messages.length === 0 ? (
//         <p>No messages found.</p>
//       ) : (
//         <div className="accordion" id="messageAccordion">
//           {messages.map((msg, idx) => (
//             <div className="card mb-3" key={msg.id}>
//               <div className="card-header bg-light">
//                 <strong>{msg.student_name}</strong> (ID: {msg.student_id})
//               </div>
//               <div className="card-body">
//                 <p><strong>Message:</strong> {msg.text}</p>

//                 <div className="mb-3">
//                   <strong>Replies:</strong>
//                   {msg.replies && msg.replies.length > 0 ? (
//                     <ul>
//                       {msg.replies.map((rep, i) => (
//                         <li key={i}>{rep}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-muted">No replies yet.</p>
//                   )}
//                 </div>

//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Write a reply..."
//                     value={replyInputs[msg.id] || ""}
//                     onChange={(e) => handleReplyChange(msg.id, e.target.value)}
//                   />
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleReplySubmit(msg.id)}
//                   >
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <ToastContainer position="top-center" autoClose={2000} />
//     </div>
//   );
// };

// export default StudentMessagesWithReplies;
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentMessagesWithReplies = () => {
  const [messages, setMessages] = useState([]);
  const [replyInputs, setReplyInputs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/chat/messages/")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
        toast.error("Failed to load messages.");
        setLoading(false);
      });
  }, []);

  const handleReplyChange = (id, value) => {
    setReplyInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleReplySubmit = async (messageId) => {
    const replyText = replyInputs[messageId]?.trim();
    if (!replyText) {
      toast.error("Reply cannot be empty.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/chat/messages/${messageId}/reply/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reply_text: replyText,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit reply.");
      }

      const replyData = await response.json();

      toast.success("Reply sent!");

      // Update the messages state with the new reply
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId
            ? { ...msg, replies: [...msg.replies, replyData] } // Add the new reply to the message
            : msg
        )
      );
      setReplyInputs((prev) => ({ ...prev, [messageId]: "" }));
    } catch (error) {
      console.error(error);
      toast.error("Failed to send reply.");
    }
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">Student Messages & Replies</h3>
      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="accordion" id="messageAccordion">
          {messages.map((msg) => (
            <div className="card mb-3" key={msg.id}>
              <div className="card-header bg-light">
                <strong>{msg.student_name}</strong> (ID: {msg.student_id})
              </div>
              <div className="card-body">
                <p><strong>Message:</strong> {msg.text}</p>

                <div className="mb-3">
                  <strong>Replies:</strong>
                  {msg.replies && msg.replies.length > 0 ? (
                    <ul>
                      {msg.replies.map((rep) => (
                        <li key={rep.id}>{rep.reply_text}</li> // Display the reply text
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted">No replies yet.</p>
                  )}
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write a reply..."
                    value={replyInputs[msg.id] || ""}
                    onChange={(e) => handleReplyChange(msg.id, e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() => handleReplySubmit(msg.id)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default StudentMessagesWithReplies;
