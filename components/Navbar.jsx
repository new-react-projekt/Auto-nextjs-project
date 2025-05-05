"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHomeUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", description: "Zur Startseite" },
    { label: "Services", href: "/service", description: "Unsere Leistungen" },
    {
      label: "Fahrzeuge",
      href: "/about",
      description: "Unsere Fahrzeugangebote",
    },
    { label: "Kontakt", href: "/contact", description: "Kontaktiere uns" },
    { label: "Impressum", href: "/impressum", description: "Rechtliches" },
    {
      label: "Login",
      href: "/login",
      icon: faHomeUser,
      description: "Dein Profil",
    },
    {
      label: "Warenkorb",
      href: "/shoppingcart",
      icon: faCartShopping,
      description: "Zum Warenkorb",
    },
  ];

  return (
    <nav className="absolute top-80 left-0 w-full bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-start">
        <div className="relative -right-5 -top-10">
          <img
            src="/Krc_car_logo.png"
            alt="Logo"
            className="w-40 h-40 ml-2 rounded-full"
            width={200}
            height={200}
          />
        </div>

        <div className="flex-5 text-right">
          <h1 className="text-2xl font-bold text-shadow-amber-50">KRC CARS</h1>

          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 bg-fuchsia-600 cursor-pointer text-white font-bold rounded hover:bg-red-400 transition"
          >
            {open ? "Navigation schlieẞen" : "Navigation öffnen"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 ">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="border border-fuchsia-300 p-4 rounded bg-blue-950 hover:bg-gray-900 transition"
            >
              <Link
                href={item.href}
                className="font-bold text-2xl flex items-center space-x-2 hover:text-blue-300"
              >
                {item.icon && <FontAwesomeIcon icon={item.icon} />}
                <span>{item.label}</span>
              </Link>
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

