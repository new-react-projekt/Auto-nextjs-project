"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeUser,
  faAutomobile,
  faHome,
  faUsers,
  faInfo,
  faContactCard,
  faRightFromBracket,

} from "@fortawesome/free-solid-svg-icons";
import { Star } from "lucide-react";
import { FavoritesContext } from "@/app/favoritecontext/page";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    setIsLoggedIn(false); // Update login state
    router.push("/login"); // Redirect to login page
  };

  // Check login state on component mount and listen for login state changes
  useEffect(() => {
    const checkLoginState = () => {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setIsLoggedIn(!!loggedInUser); // Set to true if a user is logged in
    };

    // Check login state on mount
    checkLoginState();

    // Listen for login state changes
    window.addEventListener("loginStateChange", checkLoginState);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("loginStateChange", checkLoginState);
    };
  }, []);

  const { favorites } = useContext(FavoritesContext); // Get favorites from context

  const hasFavorites = favorites.length > 0;

  const navItems = [
    { label: "Home", href: "/", icon: faHome, description: "To the home page" },
    {

      label: "About",
      href: "/about",
      icon: faContactCard,
      description: "About us",

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
  ];

  return (
    <nav className="relative -top-26 left-0 w-full bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-start items-center gap-4">
        <Link href="/">

          <div className="absolute -top-52 left-4 border-4 border-fuchsia-300 rounded-full animate-pulse">

            <img
              src="/Krc_car_logo.png"
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-blue-950"
            />
          </div>
        </Link>

        {/* Star icon linking to favorites */}
        <Link href="/favorite" className="absolute top-12 right-34 flex items-center gap-2">
          
          <Star
            className={`absolute -right-4 -top-62 w-8 h-8 transition ${
              hasFavorites ? "fill-blue-500 text-blue-500" : "text-white"
            }`}
            fill={hasFavorites ? "currentColor" : "none"}
          />
          {hasFavorites && (
            <span className="absolute -right-5 -top-64 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </Link>
{/* Login/Logout Button */}
{isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="absolute right-4 -top-52 px-4 py-2 bg-red-500 border-2 hover:border-red-600 text-white font-bold rounded transition cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="absolute right-4 -top-52 px-4 py-2 bg-blue-950 border-2 border-fuchsia-700 text-white font-bold rounded hover:bg-gray-900 transition cursor-pointer">
              Login
            </button>
          </Link>
        )}
        <div className="flex-5 text-right">
        <h1 className="ld:text-2xl md:text-xl sd:text-l font-bold text-shadow-amber-50">
            KRC CARS
          </h1>
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 bg-fuchsia-600 cursor-pointer text-white font-bold rounded hover:bg-red-400  transition"
          >
            {open ? "Close navigation" : "Open navigation"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 mt-12">
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
