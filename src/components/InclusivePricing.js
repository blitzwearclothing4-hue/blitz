"use client";

import { User, Tag, Search, Truck } from "lucide-react"; // Lucide icons

export default function InclusivePricing() {
  const features = [
    {
      icon: <User size={40} className="text-blue-700" />,
      title: "Free Expert Help 7 Days a Week",
      desc: "Get dedicated support from our experts anytime you need.",
    },
    {
      icon: <Tag size={40} className="text-blue-700" />,
      title: "Price Breaks for Every Item",
      desc: "Enjoy better pricing as your order quantity increases.",
    },
    {
      icon: <Search size={40} className="text-blue-700" />,
      title: "Free Design Review for Every Order",
      desc: "We’ll review your designs before printing to ensure perfection.",
    },
    {
      icon: <Truck size={40} className="text-blue-700" />,
      title: "Always Express Shipping",
      desc: "Fast, reliable delivery for every order you place.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-14 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl   roboto tracking-wide mb-4">
          <span className="text-blue-700">ALL-INCLUSIVE</span> BLITZWEAR CLOTHING{" "}
          <span className="text-blue-700">PRICING</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm mb-12">
          Say goodbye to high prices. We offer premium quality apparel, fast
          delivery, and free design help—without any hidden costs.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-700 hover:shadow-[0_0_15px_rgba(255,0,0,0.2)] transition-all duration-300  p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-sm md:text-[16px] font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-[10px] md:text-[12px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
