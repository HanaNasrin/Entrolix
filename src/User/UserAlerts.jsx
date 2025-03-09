import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const UserAlerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "Application Deadline", message: "Submit your application by March 15th, 2025." },
    { id: 2, type: "Missing Documents", message: "Upload your NRI certificate by March 10th, 2025." },
    { id: 3, type: "Payment Update", message: "Your payment is successfully received." },
  ]);

  const barChartData = {
    labels: ["Applications Submitted", "Applications Approved", "Applications Pending"],
    datasets: [
      {
        label: "Application Status",
        data: [120, 85, 35], // Example data
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
      },
    ],
  };

  const pieChartData = {
    labels: ["Merit Applications", "NRI Applications"],
    datasets: [
      {
        label: "Application Categories",
        data: [80, 20], // Example data
        backgroundColor: ["#4caf50", "#ff9800"],
      },
    ],
  };

  const departmentData = {
    labels: ["CSE", "ECE", "EEE", "ME", "CEC","PT"],
    datasets: [
      {
        label: "Merit",
        data: [30, 20, 15, 25, 10,14],
        backgroundColor: "#4caf50",
      },
      {
        label: "NRI",
        data: [5, 10, 8, 12, 6,10],
        backgroundColor: "#ff9800",
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h4>Alerts and Analytics</h4>

      {/* Alerts Section */}
      <div className="mb-4">
        <h5>Alerts</h5>
        {alerts.length === 0 ? (
          <p className="text-muted">No alerts available.</p>
        ) : (
          <ul className="list-group">
            {alerts.map((alert) => (
              <li key={alert.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{alert.type}: </strong>
                  {alert.message}
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => setAlerts(alerts.filter((a) => a.id !== alert.id))}
                >
                  Dismiss
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Analytics Section */}
      <div className="row">
        <div className="col-md-6">
          <h5>Application Status</h5>
          <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
        <div className="col-md-6">
          <h5>Application Categories</h5>
          <Pie data={pieChartData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
        </div>
      </div>

      {/* Department Data */}
      <div className="mt-4">
        <h5>Department-Wise Applications</h5>
        <Bar
          data={departmentData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default UserAlerts;