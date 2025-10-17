// src/components/CartItem.jsx - Individual cart item component

"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item._id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item._id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item._id);
  };

  return (
    <div className="flex items-center overflow-x-scroll md:overflow-x-hidden gap-4 p-4 border  bg-white">
      {/* Product Image */}
      <div className="flex-shrink-0">
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt="asadad"
            width={80}
            height={80}
            className=" object-cover"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="flex-grow text-black">
        <Link 
          href={`/products/${item.slug}`}
          className="font-semibold text-lg hover:text-gray-600 transition"
        >
          {item.name}
        </Link> 
         <p className="">Size: {item.size}</p>
        <p className="">${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 text-black">
        <button
          onClick={handleDecrement}
          className="p-1 rounded-md hover:bg-gray-100 transition"
          disabled={item.quantity <= 1}
        >
          <Minus size={16} />
        </button>
        
        <span className="px-3 py-1 border text-black rounded-md min-w-[50px] text-center">
          {item.quantity}
        </span>
        
        <button
          onClick={handleIncrement}
          className="p-1 rounded-md hover:bg-gray-100 transition"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Total Price */}
      <div className="text-right min-w-[80px] text-black">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="p-2 text-red-500 hover:bg-red-50 rounded-md transition"
        title="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}