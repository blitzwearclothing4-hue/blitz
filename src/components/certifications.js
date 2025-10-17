"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CertificationPartners() {
  return (
    <section className="bg-black text-white  pt-5 pb-10  px-6">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl  uppercase tracking-wide">
          Certification <span className="text-blue-700">Partners</span>
        </h2>
        <div className="flex justify-center items-center mt-4 gap-3">
          <div className="w-16 h-[1px] bg-gray-600"></div>
         
          <div className="w-16 h-[1px] bg-gray-600"></div>
        </div>
        <p className="text-gray-400 text-[1px] mt-4 max-w-2xl mx-auto">
          We are certified by globally recognized organizations to ensure the
          highest standards of quality, safety, and ethics in every product we
          deliver.
        </p>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex justify-center"
      >
        <div className="bg-white p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-blue-700/20 transition-all">
          <Image
            src="/images/certifications.png" // <-- put your image name here
            alt="Certification Partners"
            width={1200}
            height={300}
            className="rounded-xl object-contain w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
