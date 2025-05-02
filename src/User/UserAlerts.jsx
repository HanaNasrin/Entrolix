import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

const UserAlerts = () => {
  const uploadedDocuments = 7;
  const totalDocuments = 10;
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    const studentId=localStorage.getItem('Id')
    axios
      .get(`http://localhost:8000/api/notifications/${studentId}/`)
      .then((response) => {
        console.log(response)
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch notifications:", error);
      });
  };

  

  return (
    <div className="container py-4">
      <div className="row g-4 d-flex flex-column flex-md-row">
        
        {/* Notifications on the Left */}
        <div className="col-md-8">
          <h4 className="mb-3">📢 Notifications</h4>
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className="d-flex justify-content-between align-items-center p-3 mb-2 border rounded shadow-sm"
                style={{ background: "#f8f9fa" }}
              >
                <span>{notif.message}</span>
                <span
                  className={`badge ${
                    notif.status === "Enrolled"
                      ? "bg-success"
                      : notif.status === "Pending"
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  }`}
                >
                  {notif.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-muted">No new notifications.</p>
          )}
        </div>

             </div>
    </div>
  );
};

export default UserAlerts;
