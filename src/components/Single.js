"use client";

import { useState } from "react";
import Image from "next/image";

import CartButton from "./CartButton";

export default function Single({product}) {
  const [size, setSize] = useState("M");
  

  const sizes = ["S", "M", "L", "XL"];

  const singleimg = product.imageUrls[0];

  return (
    <div className=" bg-black cabin text-white flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-10 my-[25px] max-w-5xl w-full">
        {/* Product Image (mobile first) */}
        <div className="flex items-center border-2 justify-center order-1 md:order-2">
          <Image
            src={singleimg}
            width={300}
            height={300}
            alt="Dissection T-shirt"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Left Section (details on desktop first) */}
        <div className="space-y-6 order-2 md:order-1">
          {/* Title */}
          <h1 className="text-2xl font-bold">{product.article}</h1>
          <h2 className="text-white text-sm">{product.name}</h2>

          {/* Price */}
          <p className="text-xl">$ {product.price}</p>
          <p className="text-white text-sm mt-1">Note: Confirm the Price through Chat</p>

          {/* Description */}
          <div>
            <h2 className="font-semibold">Product Description</h2>
            <p className="text-white text-sm">
             {product.description}
            </p>
          </div>

          <div className="h-px bg-white" />

          {/* Size Selection */}
          <div>
            <h3 className="mb-2">Size</h3>
            <div className="flex gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-12 h-12 flex items-center justify-center border rounded ${
                    size === s
                      ? "bg-purple-700 border-purple-700"
                      : "border-gray-600"
                  }`}
                >
                  {s}
                </button>
              ))}
              
            </div>
            <p className="text-gray-700 text-sm mt-3">Note: Confirm the Size through Chat</p>
          </div>

          {/* Quantity Selector */}
         <div>
            <CartButton product={product} size={size}/>
         </div>

          {/* Add to Cart Button */}
         
        </div>
      </div>
    </div>
  );
}
