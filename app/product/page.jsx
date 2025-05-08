'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUp} from "lucide-react";
import products from '../../data/cars_data.json';


export default function ProductFilter() {
    const [selectedBrand, setSelectedBrand] = useState('');

    // Get all unique brands from products
    const brands = [...new Set(products.map((p) => p.brand))];
  
    // Filter products based on selected brand
    const filteredProducts = selectedBrand
      ? products.filter((p) => p.brand === selectedBrand)
      : products;
  
    return (
      <div className="max-w-6xl mx-auto p-6 -mt-22">
        <div className="mb-6">
  <label className="block text-lg font-medium mb-2 text-blue-950">Choose a Brand:</label>
  <select
    value={selectedBrand}
    onChange={(e) => setSelectedBrand(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-2"
  >
    <option value="">All Brands</option>
    {brands.map((brand, index) => (
      <option key={`${brand}-${index}`} value={brand}>
        {brand}
      </option>
    ))}
  </select>
</div>
  
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredProducts.map((product) => (
    <Link key={product.id} href={`/product/${product.id}`}>
      <div className="border rounded-xl shadow-md p-4 h-[350px]">
      {Array.isArray(product.image) && product.image[0] && (
          <Image
            src={product.image[0]} // Use the first image from the array
            alt={product.name}
            width={400}
            height={250}
            className="rounded-md h-[150px]"
          />
        )}
        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-xl font-bold mt-2">€ {product.price.toLocaleString()}</p>
      </div>
    </Link>
  ))}
</div>
<Link
          href="/product"
          className="flex items-center justify-center text-blue-600 space-x-1 my-8"
        >
          <ArrowUp className="w-5 h-5" />
          <span>Back to Top</span>
        </Link>
      </div>
    );
  }