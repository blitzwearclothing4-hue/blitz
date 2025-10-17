"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.status === 200) {
      setStatus("success");
      setEmail("");
    } else if (res.status === 409) {
      setStatus("duplicate");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-black">

         <div className="overflow-hidden whitespace-nowrap  bg-blue-700 text-white py-1  flex items-center">
      <motion.div
        className="inline-flex text-[15px] font-light"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {/* First set of text */}
        <span className="block">
          - BLITZWEAR - PERFORMANCE - STYLE - COMFORT - BLITZWEAR - PERFORMANCE - STYLE - COMFORT - - BLITZWEAR - PERFORMANCE - STYLE - COMFORT -
        </span>
        {/* Duplicate set for seamless loop */}
        <span className="block">
          - BLITZWEAR - PERFORMANCE - STYLE - COMFORT - BLITZWEAR - PERFORMANCE - STYLE - COMFORT - - BLITZWEAR - PERFORMANCE - STYLE - COMFORT -
        </span>
      </motion.div>
    </div>
      
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Heading & Description */}
        <div className="mx-auto max-w-prose text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl cabin  text-white tracking-wide"
          >
            NEWSLETTER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-white text-base cabin"
          >
            Join the Blitzwear Clothing circle — where luxury meets desire, and
            exclusivity finds you first.
          </motion.p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-10 w-full placeholder:text-black bg-white shadow-sm px-3  focus:outline-none"
          />
          <button
            type="submit"
            className="h-10 cursor-pointer hover:bg-black hover:text-white whitespace-nowrap flex items-center justify-center border bg-white px-8 text-sm font-medium text-black   transition"
          >
            Sign Up
          </button>
        </form>

        {/* Status Messages */}
        {status && (
          <p className="mt-3 text-center text-sm text-white">
            {status === "success" && "🎉 Subscribed successfully!"}
            {status === "duplicate" && "✅ You are already subscribed!"}
            {status === "error" && "❌ Something went wrong. Try again."}
          </p>
        )}
      </div>
    </div>
  );
}
