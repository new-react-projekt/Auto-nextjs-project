"use client";
import React from "react";
import "../../styles/payment.css";

function PaymentOptionsPage() {
  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1 className="payment-title">Payment Options</h1>

        <p className="payment-description">
          Thank you for choosing us! Please choose your preferred payment method
          below. <br />
          Please note, online payments are not available at this time.
        </p>

        <div className="payment-methods">
          <div className="payment-option">
            <i className="fa-brands fa-paypal icon paypal-icon"></i>
            <span className="payment-text">PayPal</span>
          </div>

          <div className="payment-option">
            <i className="fa-brands fa-cc-visa icon visa-icon"></i>
            <span className="payment-text">Visa / MasterCard</span>
          </div>

          <div className="payment-option">
            <i className="fa-brands fa-cc-mastercard icon mastercard-icon"></i>
            <span className="payment-text">Bank Transfer</span>
          </div>

          <div className="payment-option">
            <i className="fa-solid fa-money-bill-wave icon cash-icon"></i>
            <span className="payment-text">Cash Payment</span>
          </div>
        </div>

        <div className="payment-instructions">
          <p>
            Once you select your preferred method, please contact our support to
            finalize your payment process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptionsPage;
