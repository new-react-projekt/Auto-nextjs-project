import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="text-center mb-10 bg-gray-700 py-10">
        <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-gray-400">
          We're here to help — fast, friendly, and hassle-free.
        </p>
      </div>

      <div className="justify-center items-center flex flex-col m-10 border-4 border-gray-200 bg-gray-300 hover:bg-violet-500 shadow-md rounded-lg w-full max-w-2xl mx-auto p-10 min-w-1/2">
        <form
          className="mx-auto mt-0 border-3  shadow-cyan-400 
       p-10 bg-white shadow-md rounded-lg w-full max-w-2xl  "
        >
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
              defaultValue={``}
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
    </>
  );
}
