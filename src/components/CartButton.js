// src/components/CartButton.jsx - Add to Cart button component

"use client";
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function CartButton({ product, size, className = "" }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Ensure product has all required fields
    const productToAdd = {
      _id: product._id,
      name: product.name || product.title || 'Product', // Fallback for missing name
      price: product.price || 0,
      slug: product.slug,
     article: product.article || "N/A",
    size: size,
      imageUrls: product.imageUrls || product.imageUrl
    };
    
    addToCart(productToAdd, quantity);
    
    // Show feedback for a short time
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center border ">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-3 py-2 hover:bg-gray-100"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="px-4 py-2 border-x">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-3 py-2 hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`px-6 py-3  font-semibold border border-gray-600 transition ${
          isAdding
            ? 'bg-green-500 text-white'
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {isAdding ? '✓ Added!' : ' 🛒 Add to Cart'}
      </button>
    </div>
  );
}