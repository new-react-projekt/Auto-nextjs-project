// pages/terms-of-service.js
"use client";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-15 mb-30">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Terms and Conditions
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          1) General Overview
        </h2>
        <p className="text-gray-700 text-lg">
          This page outlines the terms and conditions that govern the use of
          services provided by us. These terms define the rules that users must
          agree to before using our services.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          2) Validity of the Agreement
        </h2>
        <p className="text-gray-700 text-lg">
          The user should read this agreement carefully before using the
          service. By using the service, the user agrees to be bound by these
          terms.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          3) Service Terms
        </h2>
        <p className="text-gray-700 text-lg">
          The services provided are subject to the conditions outlined here.
          Users should understand the purpose and usage of the service before
          using it.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          4) Pricing and Payment
        </h2>
        <p className="text-gray-700 text-lg">
          The fees for the services are subject to the listed price schedule.
          Any changes in prices will be communicated to the users beforehand.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          5) Delivery and Shipping
        </h2>
        <p className="text-gray-700 text-lg">
          The delivery of products and services will be made within the
          specified timeframes. In case of any delay, the user will be notified.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          6) Legal Terms
        </h2>
        <p className="text-gray-700 text-lg">
          This agreement is governed by the applicable laws. In case of any
          disputes, the competent court shall be located within the country
          where we provide our services.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
