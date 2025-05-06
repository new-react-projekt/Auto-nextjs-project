
"use client";
import Image from "next/image";
import Header from "@/components/VideoPlayer";
import { useState } from "react";
import TypingEffect from "@/components/Typingeffect";
import Link from 'next/link';





const carBrands = [
  {
    name: "Audi",
    logo: "https://www.mense-onlineshop.de/cdn/shop/files/DSC06263.jpg?v=1718290131&width=2766",
    url: "https://www.audi.com",
  },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    url: "https://www.bmw.com",
  },
  {
    name: "Mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    url: "https://www.mercedes-benz.com",
  },
  {
    name: "Volkswagen",
    logo: "https://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png",
    url: "https://www.volkswagen.com",
  },

  {
    name: "Opel",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAYaxXt51S7Qv6weyOMO_au4eEiwN2xyTXQ&s",
    url: "https://www.opel.com",
  },
  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    url: "https://www.toyota.com",
  },
  {
    name: "Honda",
    logo: "https://www.designenlassen.de/blog/wp-content/uploads/2024/02/Design-ohne-Titel-2024-02-20T092022.479.png",
    url: "https://www.honda.com",
  },
  {
    name: "Hyundai",
    logo: "https://media.printables.com/media/prints/324749/images/2798909_021b2148-d82d-4925-9ab2-2908257eccba/thumbs/inside/1280x960/jpg/hyundai-logo.webp",
    url: "https://www.hyundai.com",
  },
  {
    name: "Kia",
    logo: "https://www.kiamedia.com/content/images/default/low.jpg",
    url: "https://www.kia.com",
  },
  {
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    url: "https://www.ford.com",
  },
  {
    name: "Renault",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Renault_2009_logo.svg/2048px-Renault_2009_logo.svg.png",
    url: "https://www.renault.com",
  },
  {
    name: "Peugeot",
    logo: "https://upload.wikimedia.org/wikipedia/de/e/e6/Peugeot_Logo_2.svg",
    url: "https://www.peugeot.com",
  },

  {
    name: "Mazda",
    logo: "https://de.mazda-press.com/globalassets/generic-cms-images/stories/2020/history-of-the-mazda-badge/logo3.jpg/highdefinitionhalfsize?token=-jp7neXv-whPEFfCXDZSijbRX8PBy2NaYon6PX4UeaE1",
    url: "https://www.mazda.com",
  },
  {
    name: "Nissan",
    logo: "https://upload.wikimedia.org/wikipedia/de/thumb/1/15/Nissan_Logo.svg/1200px-Nissan_Logo.svg.png",
    url: "https://www.nissan.com",
  },
];
export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = carBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{ padding: "3rem", fontFamily: "Arial, sans-serif" }}
      className="flex flex-col items-center justify-center -mt-112"
    >
      <div className="rainbow-border display border-amber-50 rounded-lg p-4 mt-90 text-center w-1/2">
        <TypingEffect />
        
        <h1 className="text-fuchsia-700"> Here to the car brands overview..</h1>
        <input
          type="text"
          placeholder=" Search by car brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "100%",
            maxWidth: "400px",
            marginBottom: "2rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "4px 4px solid black ",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          padding: "5rem",

          marginTop: "0rem",

          gap: "15rem",
        }}
      >
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <a href={brand.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={100}
                  style={{
                    width: "90px",
                    height: "90px",
                    marginBottom: "0.5rem",
                    objectFit: "contain",
                    borderRadius: "100%",
                    rounded: "full",
                  }}
                />
              </a>

              <div>{brand.name}</div>
            </div>
          ))
        ) : (
          <p>No brand found</p>
        )}
      </div>
    </div>
  );
}
