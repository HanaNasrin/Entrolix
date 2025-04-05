import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const UserAlerts = () => {
  const uploadedDocuments = 7;
  const totalDocuments = 10;
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    axios
      .get("http://localhost:8000/api/notifications/")
      .then((response) => {
        console.log(response)
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch notifications:", error);
      });
  };

  const pieData = {
    labels: ["Uploaded", "Remaining"],
    datasets: [
      {
        data: [uploadedDocuments, totalDocuments - uploadedDocuments],
        backgroundColor: ["#198754", "#e63946"],
        borderWidth: 1,
      },
    ],
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

        {/* Pie Chart on the Right */}
        <div className="col-md-4 d-flex justify-content-center align-items-start">
          <div style={{ width: "100%", maxWidth: "250px" }}>
            <Pie
              data={pieData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      boxWidth: 15,
                      font: { size: 12 },
                    },
                  },
                },
              }}
            />
            <p className="text-center mt-2">
              <strong>{uploadedDocuments}</strong> of {totalDocuments} documents uploaded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAlerts;
