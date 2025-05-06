"use client";
import { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";

import { use } from "react";
import products from "../../../data/cars_data.json";
import Link from "next/link";
import EmblaCarousel from "@/components/Carousel";
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

  if (!product) return <div className="p-6">Car not found.</div>;

  // Funktion zum Erstellen der PDF

  const handleExportPDF = async (product) => {
    try {
      const imageUrl = product.image[0];

      console.log("Bild URL:", imageUrl);
      const imgResponse = await fetch(imageUrl);
      if (!imgResponse.ok) {
        throw new Error(
          `Fehler beim Laden des Bildes: ${imgResponse.statusText}`
        );
      }

      // Erstellt ein neues PDF-Dokument
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);
      let y = 750;

      // Titel der PDF
      page.drawText("Fahrzeugdetails- PDF-Dokument ", {
        x: 50,
        y,
        size: 20,
        color: rgb(0, 0, 0),
      });

      y -= 40;

      // Fahrzeuginformationen
      page.drawText(`Name: ${product.name}`, {
        x: 50,
        y,
        size: 14,
        color: rgb(0.1, 0.1, 0.1),
      });
      y -= 24;

      page.drawText(`Preis: €${product.price}`, {
        x: 50,
        y,
        size: 14,
        color: rgb(0.1, 0.1, 0.1),
      });
      y -= 24;

      page.drawText(`Beschreibung: ${product.description}`, {
        x: 50,
        y,
        size: 14,
        color: rgb(0.1, 0.1, 0.1),
      });
      y -= 24;

      // const imageUrl = product.image[0];
      const imgBytes = await imgResponse.arrayBuffer();
      const img = await pdfDoc.embedJpg(imgBytes);
      const { width, height } = img.scale(0.4);

      // Bild ins PDF einfügen
      page.drawImage(img, {
        x: 50,
        y: y - height - 20,
        width,
        height,
      });

      // Generiere die PDF Bytes
      const pdfBytes = await pdfDoc.save();

      // Blob Erstellt öffnet die PDF im neuen Tab
      const url = URL.createObjectURL(
        new Blob([pdfBytes], { type: "application/pdf" })
      );

      // Sicherheitshalber in einem Timeout aufrufen
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank"; // Öffnet den Link im neuen Tab
      link.click();

      // URL nach dem Öffnen freigeben
      setTimeout(() => {
        URL.revokeObjectURL(url); // URL freigeben
      }, 1000);
    } catch (error) {
      console.error("Fehler beim Erstellen der PDF:", error);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 border-1 border-gray-200 rounded-lg shadow-md">
        <Link
          href="/productfilter"
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
            <div className="flex items-center text-blue-500 space-x-1 mb-4 w-90">
              <Star className="w-5 h-5 mb-2" />
              <span>Add to list</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-8 border-b-1 pb-8 border-gray-200">
              {product.description}
            </p>
            <p className="text-xl font-bold mb-6 border-b-1 pb-8 border-gray-200">
              € {product.price}
            </p>
            <div className="flex flex-col md:flex-row items-start justify-center gap-4">
              <Link href="/contact">
                <button className="bg-blue-500 p-2 rounded-lg shadow-md text-xs text-white">
                  Contact Seller
                </button>
              </Link>

              <button
                onClick={() => setShowPhone(true)}
                className="bg-blue-500 p-2 rounded-lg shadow-md text-xs text-white"
              >
                {showPhone ? product.sellerPhone : "Show Phone Number"}
              </button>

              {/* Button zum Erstellen der PDF */}
              <button
                onClick={() => handleExportPDF(product)}
                className="bg-blue-500 p-2 rounded-lg shadow-md text-xs text-white mt-2"
              >
                Export as PDF
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
