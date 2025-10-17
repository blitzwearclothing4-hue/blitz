"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function HowToOrder() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 cabin">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wide"
        >
          How To Order
        </motion.h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          At <span className="text-white font-semibold">Blitzwear Clothing</span>, 
          we’ve made ordering simple and hassle-free. Whether you’re a brand, retailer, 
          or clothing startup, you can easily browse, add to cart, and order directly 
          via <span className="text-white font-medium">Email</span> or 
          <span className="text-white font-medium"> WhatsApp</span> — no inquiries needed!
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {[
          {
            step: "Step 1: Browse & Add to Cart",
            desc: "Explore our range of sportswear, casual wear, and custom apparel. When you find something you like, simply add it to your cart — just like any online store.",
          },
          {
            step: "Step 2: Review Your Cart",
            desc: "Go to your Cart page, review the products you’ve added, and confirm the quantities, sizes, and other details before placing your order.",
          },
          {
            step: "Step 3: Place Your Order via Email or WhatsApp",
            desc: "Once your cart is ready, you can order in two simple ways — send your cart via email or directly through WhatsApp.",
          },
          {
            step: "Step 4: Order Confirmation & Payment",
            desc: "Our team will confirm your order, share an invoice with pricing and shipping details, and guide you through secure payment options.",
          },
          {
            step: "Step 5: Production & Delivery",
            desc: "We’ll begin production or dispatch (for ready stock) and keep you updated with photos, tracking, and estimated delivery dates.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-800"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              {item.step}
            </h2>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-14 text-center">
        <h3 className="text-2xl font-semibold mb-3 text-white">Need Help?</h3>
        <p className="text-gray-400 mb-6">
          Our support team is always available to guide you through each step.
          Reach out anytime via Email or WhatsApp for real-time updates.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
         
          <a
            href="https://wa.me/+923279912321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full font-medium hover:bg-green-600 transition-all"
          >
            <FaWhatsapp /> Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
