"use client";
import React from "react";

function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Return Policy
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            You have the option to return the received goods within 1 month.
          </li>
          <li>
            More information about our return policies can be found in our Terms
            and Conditions (AGB).
          </li>
          <li>
            For returns, please feel free to contact our customer service in
            advance via phone or email using the contact form.
          </li>
          <li>
            Depending on the reason for return, you may receive a free return
            label via email (please note: reimbursement of return shipping costs
            is not possible without prior notification).
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReturnPolicyPage;
