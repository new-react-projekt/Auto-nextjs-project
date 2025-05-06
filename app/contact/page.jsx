import React from "react";

export default function ContactForm() {
  return (
    <div className="max-w-6xl mx-auto p-6 -mt-52">
      <form className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Seller</h2>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="8"
            className="mt-1 block w-full text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            defaultValue={`Dear Sir or Madam,\n
I'm interested in your vehicle. Please contact me.\n
Kind regards,`}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g John Doe"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g. john.doe@mail.com"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Your phone number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="e.g. +49 1234 5678910"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
