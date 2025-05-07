"use client";
import React from "react";
import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  console.log(typeof window === "undefined" ? "server" : "client");
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="footer-container ">
        {/* Link Section */}
        <section className="col-span-3 grid grid-cols-3 gap-1 place-items-center m-0 p-0">
          <div className="card-box">
            <i className="fa-solid fa-headset" />

            <h2 className="text-lg font-semibold">CUSTOMER SERVICE</h2>
            <hr className="my-2 border-gray-500" />
            <ul>
              <li>
                <Link href="/contact">Contact Form</Link>{" "}
              </li>
              <li>
                <Link href="/return">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/fqa">FAQ</Link>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
            </ul>
          </div>

          <div className="card-box">
            <i className="fa-solid fa-phone" />
            <h2 className="text-lg font-semibold">INFORMATION</h2>
            <hr className="my-2 border-gray-500" />
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/rateus">Rate Us</Link>
              </li>
              <li>
                <Link href="https://cars.mclaren.press/" target="_blank">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/payment">Shipping and Payment</Link>
              </li>
              <li>
                <Link href="/cookie">Cookie Settings</Link>
              </li>
            </ul>
            {/* Footer Bottom------------------------------------------ */}
            <div className=" create-by ">
              © Created by Randy Born - Cihan Ünal - Kushtrim Bilali - 2025
            </div>
            {/*------------------------------------------------------- */}
          </div>

          <div className="card-box">
            <i className="fa-solid fa-file-contract" />
            <h2 className="text-lg font-semibold">LEGAL NOTICE</h2>
            <hr className="my-2 border-gray-500" />
            <ul>
              <li>
                <Link href="/impressum">Imprint</Link>
              </li>
              <li>
                <Link href="/policy">Privacy Policy</Link>
              </li>

              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
            </ul>
            <img src="/Krc_car_logo.png" alt="logo" className="footer-logo  " />
          </div>
        </section>

        {/* Social Section---------------------------------- */}
        <section className="col-span-1 flex flex-col items-center justify-between">
          <div className="card-box2 ">
            <h2 className="text-lg font-semibold mb-2">FOLLOW US</h2>
            <div className="social-icons">
              <Link
                href="https://github.com/new-react-projekt/Auto-nextjs-project"
                target="_blank"
              >
                <i className="fa-brands fa-github" />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram" />
              </Link>
              <Link href="https://x.com/" target="_blank">
                <i className="fa-brands fa-x-twitter" />
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=OYCZNV38isg "
                target="_blank"
              >
                <i className="fa-brands fa-youtube" />
              </Link>

              <Link href="https://www.linkedin.com/" target="_blank">
                <i className="fa-brands fa-linkedin" />
              </Link>
              <Link
                href="https://www.autoscout24.de/auto-verkaufen/"
                target="_blank"
              >
                <i className="fa-solid fa-car"></i>
              </Link>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">İnfo</h2>
              <div className="info">
                <i className="fa-solid fa-at"></i>

                <Link href="/contact">info@krc-cars.com</Link>
              </div>
            </div>

            {/*---Workin Hours-------------------------- */}
            <div className="absolute bottom-14 right-46 rotate-90 w-40 h-10 b text-center">
              <p>Working Hours</p>
            </div>
            <div className="workinghours">
              <p>Montag – Freitag </p>
              <p>09:00 – 18:00 Uhr</p>
              <p>Samstags </p>
              <p>09:00 – 12:00 Uhr</p>
            </div>
            {/*------------------------------------------------------- */}
          </div>
        </section>
      </div>
    </footer>
  );
}
