// src/app/cart/page.js - Complete cart page with dual checkout options

"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import CheckoutForm from '@/components/CheckoutForm';
import { MessageCircle, CreditCard, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { cartItems, cartTotal, cartItemsCount, clearCart } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  

  // Generate WhatsApp message
  // Generate WhatsApp message
const generateWhatsAppMessage = () => {
  const items = cartItems.map(item => {
    const itemName = item.name || item.title || 'Product'; // fallback
    const article = item.article || 'N/A';
    const size = item.size || 'Not selected';

    return `${article} - ${itemName} | Size: ${size} | Qty: ${item.quantity} | $${(item.price * item.quantity).toFixed(2)}`;
  }).join('\n');
  
  const message = `Hello! I'd like to place an order:\n\n${items}\n\nTotal: $${cartTotal.toFixed(2)}\n\nPlease confirm my order. Thank you!`;
  
  return encodeURIComponent(message);
};

  // const generateWhatsAppMessage = () => {
   
  //   const items = cartItems.map(item => {
  //     const itemName = item.name || item.title || 'Product';
  //        // Fallback for missing names
  //     return `${itemName}  (x${item.quantity}) - ${(item.price * item.quantity).toFixed(2)}`;
  //   }).join('\n');
    
  //   const message = `Hello! I'd like to place an order:\n\n${items}\n\nTotal: \n\n Confirm the Size through Chart \n\n ${cartTotal.toFixed(2)}\n\nPlease confirm my order. Thank you!`;
    
  //   return encodeURIComponent(message);
  // };

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "+923279912321"; // Replace with your WhatsApp number (e.g., "923001234567")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Optional: Clear cart after WhatsApp redirect
    // clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center">
          <h1 className=" text-black text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-black mb-6">Add some products to get started!</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3  font-semibold hover:bg-gray-800 transition"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
   <div className='bg-black text-white'>
    <Navbar/>
     <div className="container cabin mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="flex md:items-center md:flex-row flex-col justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold ">Shopping Cart</h1>
          <p className="">
            {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        
        <Link
          href="/"
          className="inline-flex items-center mt-3 gap-2 text-white transition"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          
          {/* Clear Cart Button */}
          <div className="pt-4 border-t">
            <button
              onClick={clearCart}
              className="text-red-500  hover:text-red-700 font-semibold transition"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6   text-black sticky top-6">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            
            {/* Items breakdown */}
            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
  <div key={item._id} className="flex justify-between text-sm text-black">
    <span>{item.article} - {item.name} | Size: {item.size} (x{item.quantity})</span>
    <span>${(item.price * item.quantity).toFixed(2)}</span>
  </div>
))}
              {/* {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between text-sm">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))} */}
            </div>
            
            <div className="border-t text-black pt-4 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Buttons */}
            <div className="space-y-3">
              {/* Form Checkout Button */}
              <button
                onClick={() => setShowCheckoutForm(true)}
                className="w-full bg-black text-white py-3  font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                Checkout with Form
              </button>

              {/* WhatsApp Checkout Button */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-500 text-white py-3  font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Checkout via WhatsApp
              </button>
            </div>

            {/* Security Note */}
            <div className="mt-4 text-xs text-gray-500 text-center">
              <p>🔒 Your information is secure and encrypted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Form Modal */}
      {showCheckoutForm && (
        <CheckoutForm onClose={() => setShowCheckoutForm(false)} />
      )}
    </div>
    <Footer/>
   </div>
  );
}