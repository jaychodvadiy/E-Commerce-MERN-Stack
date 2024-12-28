import React from "react";

function PaymentSuccessPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-500">
          Payment Successful!
        </h1>
        <p className="mt-4 text-gray-600">Thank you for your purchase.</p>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
