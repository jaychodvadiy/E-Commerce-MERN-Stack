import React from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (method) => {

    navigate("/payment-success");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Checkout</h1>
      <p>Total: ${total}</p>
      <div className="mt-6 space-y-4">
        <button
          onClick={() => handlePayment("google-pay")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Pay with Google Pay
        </button>
        <button
          onClick={() => handlePayment("paypal")}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Pay with PayPal
        </button>
        <button
          onClick={() => handlePayment("credit-card")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Pay with Credit/Debit Card
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
