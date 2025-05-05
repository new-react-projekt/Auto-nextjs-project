"use client";
import React from "react";

function NewsletterSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Newsletter</h2>
        <p className="text-gray-700 mb-6">
          Would you like to receive exclusive email offers and limited-time
          discounts?
        </p>
        <p className="text-gray-700 mb-6">
          Sign up for our newsletter via the contact form and get regular
          updates on offers and special promotions!
        </p>
        <p className="text-gray-600 text-sm mb-6">
          You can withdraw your consent at any time by sending an email to{" "}
          <a
            href="mailto:info@krc-cars.com"
            className="text-blue-600 underline"
          >
            info@krc-cars.com
          </a>
          and unsubscribe from the newsletter.
        </p>

        <div className="mt-4">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Go to Contact Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
