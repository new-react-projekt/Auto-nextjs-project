"use client";
import products from "../../data/cars_data.json";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-xl shadow-md p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={250}
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
