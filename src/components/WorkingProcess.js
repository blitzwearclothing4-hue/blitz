"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const processes = [
  {
    title: "Fabric Selection",
    image: "/images/fabric-selection.webp",
    description:
      "We carefully select premium fabrics that provide the perfect balance of comfort, durability, and flexibility — ensuring each piece supports your best performance.",
  },
  {
    title: "Cut & Sewing",
    image: "/images/cut-sewing.webp",
    description:
      "Our skilled tailors use precise cutting and expert stitching to create perfectly fitting, long-lasting garments that stand up to any activity.",
  },
  {
    title: "Customization",
    image: "/images/customization.webp",
    description:
      "We offer personalized designs and custom features tailored to your unique needs — making your products as individual as you are.",
  },
  {
    title: "Labeling",
    image: "/images/labeling.jpg",
    description:
      "Each item is thoughtfully labeled for both branding and quality assurance — helping you identify every product with confidence.",
  },
  {
    title: "Packaging",
    image: "/images/packaging.webp",
    description:
      "Our packaging process ensures every product is protected and arrives in perfect condition, ready for use or display.",
  },
  {
    title: "Shipment",
    image: "/images/shipment.jpg",
    description:
      "We ensure prompt and secure delivery — managing logistics so your order reaches you on time, every time.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-black roboto text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl  uppercase tracking-wide">
          Our Working <span className="text-blue-700">Process</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          From fabric selection to final shipment, we ensure every step of the
          production process meets the highest standards.
        </p>
        <div className="w-20 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {processes.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#141414] rounded-sm overflow-hidden border border-gray-800 shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            <div className="relative w-full h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-[12px] font-semibold text-blue-700 uppercase mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-300 text-[10px] md:text-[11px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
