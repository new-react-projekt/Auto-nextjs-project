"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    address: "",
    firma: "",
  });

  const [message, setMessage] = useState(""); 
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.passwordConfirm ||
      !form.address ||
      !form.firma
    ) {
      setMessage("Please fill in all fields.");
      return;
    }


    if (form.password !== form.passwordConfirm) {
      setMessage("Passwords do not match.");
      return;
    }

    let users = [];

    try {
      const stored = localStorage.getItem("users");
      users = stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("localStorage parse error:", err);
      setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
      return;
    }

    const userExists = users.some((u) => u.username === form.username);

    if (userExists) {
      setMessage("Username already exists.");
      return;
    }

    const newUser = {
      username: form.username,
      email: form.email,
      password: form.password,
      address: form.address,
      firma: form.firma,
    };

    users.push(newUser);

    try {
      localStorage.setItem("users", JSON.stringify(users));
      console.log("Registration successful:", newUser);
      setMessage(
        "Registration successful! You are being directed to the login page..."
      );


      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      console.error("localStorage write error:", err);
      setMessage("An error occurred during registration.");
    }
  };

  return (
    <div className="h-[45rem] flex items-center justify-center bg-gray-100 px-4 -mt-36">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
          />
          <input
            name="passwordConfirm"
            type="password"
            placeholder="Password Confirmation"
            value={form.passwordConfirm}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
          />
          <input
            name="firma"
            type="text"
            placeholder="Firma information"
            value={form.firma}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
