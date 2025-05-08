import React from 'react';

const AdmissionFeeInstructions = () => {
  return (
    <div className="container py-5" style={{ maxWidth: '900px' }}>
      <h2 className="text-primary mb-4">Admission Fee Payment – IET, University of Calicut</h2>

      <h4 className="text-secondary mb-3">🔹 Step-by-Step Guide to Pay Admission Fee via SBI Collect</h4>

      <ol className="mb-4">
        <li><strong>Access SBI Collect Portal:</strong><br />
          Visit the SBI Collect portal: <a href="#" target="_blank" rel="noopener noreferrer">👉 SBI Collect – IET, University of Calicut</a>
        </li>

        <li className="mt-2"><strong>Proceed to Payment:</strong><br />
          Click on the “Proceed” button to accept the terms and conditions.
        </li>

        <li className="mt-2"><strong>Select Payment Category:</strong><br />
          Choose the appropriate payment category from the dropdown menu.<br />
          For admission fees, select the category corresponding to <em>"Admission Fee"</em> or similar.
        </li>

        <li className="mt-2"><strong>Enter Payment Details:</strong><br />
          Fill in the required details:
          <ul>
            <li>Name of Student</li>
            <li>Date of Birth</li>
            <li>Mobile Number</li>
            <li>Email ID</li>
            <li>Course Applied For</li>
            <li>KEAM Roll Number</li>
            <li>Allotment Details</li>
            <li>Amount to be Paid (as per allotment memo)</li>
          </ul>
        </li>

        <li className="mt-2"><strong>Verify and Confirm Details:</strong><br />
          Review all the entered information and click on “Submit” to proceed.
        </li>

        <li className="mt-2"><strong>Make Payment:</strong><br />
          Choose a payment method:
          <ul>
            <li>Net Banking</li>
            <li>Debit/Credit Card</li>
            <li>UPI</li>
          </ul>
        </li>

        <li className="mt-2"><strong>Download and Print Receipt:</strong><br />
          After successful payment, download and print the e-receipt. This will be required during the admission process.
        </li>
      </ol>

      <h4 className="text-secondary mb-3">🔹 Important Notes</h4>
      <ul>
        <li><strong>Payment Deadline:</strong> Complete the payment within the time frame mentioned in your KEAM allotment memo.</li>
        <li><strong>Fee Amount:</strong> Typically ₹40,000 per annum for 95% government seats. Refer to your memo for exact details.</li>
      </ul>

      <h4 className="text-secondary mt-4 mb-2">🔹 Contact Information</h4>
      <p><strong>For admission/payment-related queries:</strong><br />
        Email: <a href="mailto:epay@uoc.ac.in">epay@uoc.ac.in</a><br />
        Phone: 0494 2407179
      </p>
      <p><strong>For technical assistance with SBI Collect:</strong><br />
        Email: <a href="mailto:sbiepay@sbi.co.in">sbiepay@sbi.co.in</a><br />
        Phone: +91-22-2087 6123
      </p>

      <p className="mt-4"><strong>Note:</strong> Keep a copy of your receipt and related documents safe for future verification.</p>
    </div>
  );
};

export default AdmissionFeeInstructions;
