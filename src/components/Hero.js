"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import g3 from "../../public/images/hero.jpg";


import Navbar from "./Navbar";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative bg-black ">
      {/* Navbar */}
    

      <div className="flex w-full text-white  h-[500px]   md:mt-[-10px]   ">
        {isMounted && (
          <motion.div
            className="relative w-full h-[500px]  overflow-hidden"
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={g3}
              alt="Banner"
              priority
              className="object-cover w-full h-full"
            />
          </motion.div>
        )}
      </div>
      

      {isMounted && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            
            className="md:flex text-white w-full hidden  items-center text-[45px] font-light cabin mt-6 2xl:mt-7  px-4 md:px-8"
          >
            <p>Blitzwear Clothing. “Wear the Power. Live the Style.”</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex w-full text-white max-w-7xl md:hidden cabin  items-center text-[32.4px] mt-6 2xl:mt-7 mx-auto px-4 md:px-8"
          >
            <p>Blitzwear Clothing.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex w-full barlow  items-center text-[15px] mt-3 2xl:mt-4  px-4 md:px-8"
          >
            <p className="md:w-[50%] cabin text-white pb-10">
             At Blitzwear Clothing, we craft apparel that blends performance, comfort, and style. As premium manufacturers of sportswear, casual wear, fashion, and streetwear.
            </p>
          </motion.div>

           <div className="overflow-hidden whitespace-nowrap  bg-black text-white py-2  flex items-center">
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
        </>
      )}
    </div>
  );
}
