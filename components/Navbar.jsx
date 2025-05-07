"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeUser,
  faAutomobile,
  faHome,
  faUsers,
  faInfo,
  faToolbox,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Star } from "lucide-react";
import { FavoritesContext } from "@/app/favoritecontext/page";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { favorites } = useContext(FavoritesContext);
  const hasFavorites = favorites.length > 0;

  const navItems = [
    { label: "Home", href: "/", icon: faHome, description: "To the home page" },
    {
      label: "Services",
      href: "/service",
      icon: faToolbox,
      description: "Our services",
    },
    {
      label: "Cars",
      href: "/product",
      icon: faAutomobile,
      description: "Our vehicle offers",
    },
    {
      label: "Contact",
      href: "/contact",
      icon: faUsers,
      description: "Contact us",
    },
    {
      label: "Impressum",
      href: "/impressum",
      icon: faInfo,
      description: "Legal Notice",
    },

    {
      label: "Login",
      href: "/login",
      icon: faHomeUser,
      description: "Your profile",
    },
  ];

  return (
    <nav className="relative -top-26 left-0 w-full bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-start items-center gap-4">
        <Link href="/">
          <div className="absolute -top-92 left-4 border-4 border-fuchsia-300 rounded-full">
            <img
              src="/Krc_car_logo.png"
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-blue-950"
            />
          </div>
        </Link>

        <div className="flex-5 text-right">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 bg-fuchsia-600 cursor-pointer text-white font-bold rounded hover:bg-red-400 transition"
          >
            {open ? "Close navigation" : "Open navigation"}
          </button>
        </div>

        <Link href="/favorite" className="flex items-center gap-2 relative">
          <h1 className="text-2xl font-bold text-shadow-amber-50">KRC CARS</h1>
          <Star
            className={`w-6 h-6 transition ${
              hasFavorites ? "fill-blue-500 text-blue-500" : "text-white"
            }`}
            fill={hasFavorites ? "currentColor" : "none"}
          />
          {hasFavorites && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </Link>
      </div>

      {open && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 mt-12 ">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="border-2 border-fuchsia-300 p-4 rounded bg-blue-950 hover:bg-gray-900 transition"
            >
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="font-bold text-2xl flex items-center space-x-2 hover:text-blue-300 w-full text-left"
                >
                  {item.icon && <FontAwesomeIcon icon={item.icon} />}
                  <span>{item.label}</span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="font-bold text-2xl flex items-center space-x-2 hover:text-blue-300"
                >
                  {item.icon && <FontAwesomeIcon icon={item.icon} />}
                  <span>{item.label}</span>
                </Link>
              )}
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
