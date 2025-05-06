"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();
  // userouter sayfayı yönlendirmek için kullanıldı.
  // Userouter wird zum Umleiten der Seite verwendet.

  // Sayfa ilk yüklendiğinde varsayılan kullanıcıyı ekle
  // Standardbenutzer beim ersten Laden der Seite hinzufügen
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const defaultUser = users.some((u) => u.username === "user");
    if (!defaultUser) {
      users.push({
        username: "user",
        password: "1234",
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);
  // Eğer "user" adında bir kullanıcı yoksa, "user" ve "1234" şifresiyle varsayılan kullanıcı eklenir.
  // Wenn kein Benutzer mit dem Namen „Benutzer“ vorhanden ist, wird ein Standardbenutzer mit „Benutzer“ und dem Kennwort „1234“ hinzugefügt.

  // Form inputlarını güncelle
  // Formulareingaben aktualisieren
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Giriş kontrolü
  const handleLogin = (e) => {
    e.preventDefault();
    // form bir kere gönderilsin. sürekli sayfa yenilenmesin diye preventDefault kullanıldı.
    // Das Formular sollte einmal gesendet werden. preventDefault wurde verwendet, um zu verhindern, dass die Seite ständig aktualisiert wird.
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    //  localstroge 'dan veriyi al
    // Holen Sie sich die Daten von localstroge

    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push("/"); // Başarılı girişte anasayfaya yönlendir
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="h-[33rem] flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
