"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import hero from "../../public/images/new.jpg";

import f1 from "../../public/images/new.jpg";
import f2 from "../../public/images/new.jpg";


export default function About2() {
  return (
    <div>
      {/* Top scrolling text */}
   

      {/* Hero image */}
      <div className="w-full h-[400px]">
        <Image
          src={hero}
          alt="hero2"
          className="w-full h-full object-cover "
          priority // ✅ avoids Next.js warning for LCP image
        />
      </div>

      {/* Bottom scrolling text */}
   

  
    
      


    </div>
  );
}
