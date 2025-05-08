"use client";
// import { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { useRouter } from "next/navigation";
import { useState, useContext, useMemo } from "react";
import { use } from "react";
import products from "../../../data/cars_data.json";
import Link from "next/link";
import EmblaCarousel from "@/components/Carousel";
import { FavoritesContext } from "@/app/favoritecontext/page";
import {
  Gauge,
  Cog,
  Calendar,
  Fuel,
  Zap,
  UserCircle,
  ArrowLeft,
  Star,
} from "lucide-react";

export default function ProductDetail({ params }) {
  const { id } = use(params);

  const [showPhone, setShowPhone] = useState(false);

  const product = products.find((p) => p.id.toString() === id);

  const { favorites, addFavorite } = useContext(FavoritesContext);

  const isLoggedIn = !!localStorage.getItem("loggedInUser");
  const router = useRouter();

  const handleAddToFavorites = () => {
    if (!isLoggedIn) {
      alert("You need to log in to add products to your favorites.");
      router.push("/login"); // Redirect to login page
      return;
    }
    addFavorite(product); // Add product to favorites
    alert("Product added to favorites!");
  }
  if (!product) return <div className="p-6">Car not found.</div>;

  
  const isFavorite = useMemo(() => {
    return favorites.some((fav) => fav.id === product.id);
  }, [favorites, product.id]);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 border-1 border-gray-200 rounded-lg shadow-md -mt-16">
        <Link
          href="/product"
          className="flex items-center text-blue-600 space-x-1 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 mb-6 ">
          {product.image ? (
            <div className="w-2xl rounded-xl overflow-hidden">
              <EmblaCarousel
                slides={
                  Array.isArray(product.image) ? product.image : [product.image]
                }
              />
            </div>
          ) : (
            <div>No images available</div>
          )}
          <div className="flex flex-col justify-between">
          <div
  onClick={() => {
    console.log("Adding to favorites:", product);
    handleAddToFavorites(product); // or just addFavorite(product);
  }}
  className="flex items-center text-blue-500 space-x-1 mb-4 w-90 cursor-pointer"
>
              <Star
                className={`w-5 h-5 mb-1 ${
                  isFavorite ? "fill-blue-500 text-blue-500" : ""
                }`}
                fill={isFavorite ? "currentColor" : "none"}
              />
              <span>{isFavorite ? "Added to the list" : "Add to list"}</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-8 border-b-1 pb-8 border-gray-200">
              {product.description}
            </p>
            <p className="text-2xl font-bold mb-6 border-b-1 pb-8 border-gray-200">
              € {product.price.toLocaleString()}
            </p>
            <div className="flex flex-col md:flex-row items-start justify-center gap-4">
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
            </div>
          </div>
        </div>
        <div className="border-gray-200 border-1 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="flex items-center space-x-2">
              <Gauge className="w-5 h-5 text-gray-600" />
              <div>
                <strong>Mileage:</strong> {product.mileage}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Cog className="w-5 h-5 text-gray-600" />
              <div>
                <strong>Gearbox:</strong> {product.gearbox}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <div>
                <strong>First Reg.:</strong> {product.firstRegistration}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="w-5 h-5 text-gray-600" />
              <div>
                <strong>Fuel:</strong> {product.fuelType}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-gray-600" />
              <div>
                <strong>Power:</strong> {product.power}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <UserCircle className="w-5 h-5 text-gray-600" />
              <div>
                <strong>Seller:</strong> {product.seller}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
