import React, { useState, useEffect } from "react";
// import axios from "axios";

const ClerkReports = () => {
  const [reports, setReports] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/reports/user-activity")
  //     .then((response) => setReports(response.data))
  //     .catch((error) => console.error("Error fetching reports:", error));
  // }, []);

  return (
    <div>
      <h2>Clerk Dashboard Reports</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Last Login</th>
            <th>Activity Count</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.name}</td>
              <td>{report.last_login}</td>
              <td>{report.activity_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClerkReports;
