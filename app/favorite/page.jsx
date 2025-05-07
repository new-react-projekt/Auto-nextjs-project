"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import EmblaCarousel from "@/components/Carousel";
import { Trash2 } from "lucide-react";
import { FavoritesContext } from "../favoritecontext/page";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
    const [showPhone, setShowPhone] = useState(false);

  if (favorites.length === 0) {
    return (
      <p className="flex justify-center items-center p-4 text-gray-600">

        No items in your favorites list.
      </p>
    );
  }

  return (
    <div className="p-4 w-2/3 mx-auto -mt-36">
      <h1 className="text-2xl font-semibold mb-4">Your Favorites</h1>
      <ul className="space-y-4">
        {favorites.map((product) => (
          <li
            key={product.id}
            className="flex flex-col md:flex-row items-center justify-between gap-6 border p-4 rounded-md shadow-sm"
          >
            <div className="w-full md:w-1/2 rounded-4xl overflow-hidden">
              {product.image ? (
                <EmblaCarousel
                  slides={Array.isArray(product.image) ? product.image : [product.image]}
                />
              ) : (
                <div>No images available</div>
              )}
            </div>

            <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-8 border-b-1 pb-8 border-gray-200">
              {product.description}
            </p>
            <p className="text-2xl font-bold mb-6 border-b-1 pb-8 border-gray-200">
              € {product.price.toLocaleString()}
            </p>
            <div>
            <Link href="/contact">
                <button className="bg-blue-500 hover:bg-blue-400 cursor-pointer p-2 rounded-lg shadow-md text-xs text-white">
                  Contact Seller
                </button>
              </Link>

              <button
                onClick={() => setShowPhone(true)}
                className="bg-blue-500 hover:bg-blue-400 cursor-pointer p-2 rounded-lg shadow-md text-xs text-white"
              >
                {showPhone ? product.sellerPhone : "Show Phone Number"}
              </button>
              <button
                onClick={() => removeFavorite(product.id)}
                className="mt-2 text-red-500 hover:text-red-700 cursor-pointer flex items-center"
              >
                <Trash2 className="w-5 h-5 mr-1" />
                Remove
              </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
