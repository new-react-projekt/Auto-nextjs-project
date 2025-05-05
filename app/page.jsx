import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Car Shop</h1>
      <ul>
        <li>
      <Link href="/product" className="text-blue-600 underline">
        View Products
      </Link>
      </li>
      <li>    
      <Link href="/productfilter" className="text-blue-600 underline">
        Search Product
      </Link>
      </li>
      </ul>
    </div>
  );
}
