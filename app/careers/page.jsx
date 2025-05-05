"use client";
import React from "react";

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Careers at KRC Cars
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Currently, there are no open job positions available.
        </p>

        <p className="text-gray-700 mb-4">
          But we are always excited to hear from motivated, passionate, and
          talented individuals who want to be part of our growing journey.
        </p>

        <p className="text-gray-700 mb-4">
          If you believe your skills and values align with our company culture,
          feel free to send us your speculative application.
        </p>

        <p className="text-gray-600 text-sm mb-6">
          Please send your resume and a short cover letter to
          <a
            href="mailto:info@krc-cars.com"
            className="text-blue-600 underline"
          >
            info@krc-cars.com
          </a>
        </p>

        <div className="mt-6">
          <img
            src="https://nhscareersnw.co.uk/wp-content/uploads/2023/10/pop-banner-image-1.png"
            alt="Join our team"
            className="mx-auto rounded-xl shadow-md w-full max-w-md"
          />
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Stay connected – new opportunities may come up soon!
        </p>
      </div>
    </div>
  );
}

export default CareersPage;
