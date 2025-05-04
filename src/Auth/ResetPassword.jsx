import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:8000/api/subadmin/reset-password/", {
        uid,
        token,
        password,
      })
      .then((res) => {
        toast.success(res.data.detail);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response?.data?.detail || "Reset failed");
      });
  };

  return (
    <div className="container" style={{ maxWidth: "400px", marginTop: "100px" }}>
      <h3>Reset Password</h3>
      <form onSubmit={handleReset}>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
