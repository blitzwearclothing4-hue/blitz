"use client";

import Image from "next/image";
import aboutImg from "../../public/images/about.jpg";
import { motion } from "framer-motion"; // change this to your actual image

export default function About() {
  return (
    <section className="bg-black roboto text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div 
         initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl  mb-6 roboto">
            About Us
          </h2>
          <p className="text-gray-300 text-[16px] leading-relaxed roboto">
            At <span className="font-semibold text-white">Blitzwear Clothing</span>, 
            we craft apparel that defines modern performance and street style. 
            As trusted manufacturers of 
            <span className="text-blue-400"> sportswear</span>, 
            <span className="text-blue-400"> casual wear</span>, 
            and <span className="text-blue-400"> fashion-forward designs</span>, 
            we combine innovation and comfort to deliver the perfect fit. 
            Every piece we make reflects precision, durability, and a passion for design — 
            built for those who lead, move, and inspire.
          </p>
        </motion.div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <div className="overflow-hidden  shadow-lg">
            <Image
              src={aboutImg}
              alt="Blitzwear Manufacturing"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
