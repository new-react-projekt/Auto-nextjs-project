"use client";
import React from "react";

function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              How do I register a return?
            </h3>
            <p>
              For returns, please contact our customer service in advance via
              phone or by email through the contact form.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              How long can I exercise my right of return?
            </h3>

            <p>
              More details about our return policy can be found in our Terms and
              Conditions (AGB).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              How can I contact customer support?
            </h3>
            <p>
              You can reach us by phone at <strong>+49 2333 333 33 33</strong>
              during our business hours.
            </p>
            <p>
              Written inquiries can be sent via email to :{" "}
              <strong>info@krc-cars.com </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
