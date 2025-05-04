import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentMessagesWithReplies = () => {
  const [studentMessages, setStudentMessages] = useState([]);

  useEffect(() => {
    // Dummy data simulating an API response
    const dummyData = [
      {
        student_name: "John Doe",
        messages: [
          {
            text: "I need help with the admission process.",
            replies: [],
          },
          {
            text: "Did you receive my documents?",
            replies: [],
          },
        ],
      },
      {
        student_name: "Alice Smith",
        messages: [
          {
            text: "When will my application be reviewed?",
            replies: [],
          },
        ],
      },
    ];

    setTimeout(() => {
      setStudentMessages(dummyData);
      toast.success("Messages loaded");
    }, 500);
  }, []);

  const [replyInputs, setReplyInputs] = useState({});

  const handleReplyChange = (studentIndex, messageIndex, value) => {
    setReplyInputs((prev) => ({
      ...prev,
      [`${studentIndex}-${messageIndex}`]: value,
    }));
  };

  const handleReplySubmit = (studentIndex, messageIndex) => {
    const key = `${studentIndex}-${messageIndex}`;
    const replyText = replyInputs[key]?.trim();

    if (!replyText) {
      toast.error("Reply cannot be empty");
      return;
    }

    const updatedMessages = [...studentMessages];
    updatedMessages[studentIndex].messages[messageIndex].replies.push(replyText);

    setStudentMessages(updatedMessages);
    setReplyInputs((prev) => ({ ...prev, [key]: "" }));

    toast.success("Reply added");
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Student Messages & Replies</h3>
      {studentMessages.map((student, studentIndex) => (
        <Card className="mb-4 shadow-sm" key={studentIndex}>
          <Card.Body>
            <Card.Title>{student.student_name}</Card.Title>
            <ListGroup variant="flush">
              {student.messages.map((msg, messageIndex) => (
                <ListGroup.Item key={messageIndex}>
                  <strong>Message:</strong> {msg.text}
                  <div className="mt-2 ms-3">
                    {msg.replies.map((reply, rIdx) => (
                      <div key={rIdx} className="text-success">
                        ↳ {reply}
                      </div>
                    ))}
                  </div>
                  <Form className="mt-3">
                    <Form.Control
                      type="text"
                      placeholder="Write a reply..."
                      value={replyInputs[`${studentIndex}-${messageIndex}`] || ""}
                      onChange={(e) =>
                        handleReplyChange(studentIndex, messageIndex, e.target.value)
                      }
                    />
                    <Button
                      variant="primary"
                      size="sm"
                      className="mt-2"
                      onClick={() => handleReplySubmit(studentIndex, messageIndex)}
                    >
                      Reply
                    </Button>
                  </Form>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default StudentMessagesWithReplies;
