import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Payment = () => {
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${amount} submitted using ${paymentMethod}`);
    setIsSubmitted(true);
    // Add logic to process the payment here
  };

  return (
    <div className="container mt-4">
      <h4>Payment Section</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Enter Amount (₹):
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>

        <div className="mb-3">
          <h6>Select Payment Method:</h6>
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-outline-primary ${
                paymentMethod === "Credit Card" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("Credit Card")}
            >
              Credit Card
            </button>
            <button
              type="button"
              className={`btn btn-outline-primary ${
                paymentMethod === "Debit Card" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("Debit Card")}
            >
              Debit Card
            </button>
            <button
              type="button"
              className={`btn btn-outline-primary ${
                paymentMethod === "UPI" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("UPI")}
            >
              UPI
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success"
          disabled={amount <= 0 || isSubmitted}
        >
          {isSubmitted ? "Payment Submitted" : "Submit Payment"}
        </button>
      </form>
    </div>
  );
};

export default Payment;