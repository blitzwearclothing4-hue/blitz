"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const firstImage = Array.isArray(product.imageUrls)
    ? product.imageUrls[0]
    : product.imageUrls;

  return (
   <motion.div
              
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="text-black group"
             >
                <Link href={`/products/${product.slug}`}>
                                   {/* Image wrapper */}
               <motion.div
                 className="relative w-full  aspect-[4/5] overflow-hidden bg-white border-gray-800"
                 whileHover={{ scale: 1.02 }}
                 transition={{ duration: 0.3, ease: "easeOut" }}
               >
                 <Image
                   src={firstImage}
                   alt={product.name}
                 fill
                   className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                 />
               </motion.div>
   
               {/* Product details */}
               <div className="mt-3 text-center cabin ">
                 <p className="text-[10px] uppercase tracking-wide text-white">{product.article}</p>
                 <p className="text-sm md:text-base font-medium text-white">{product.name}</p>
                 <p className="text-[11px] text-white ">$ {product.price}</p>
               </div>
                </Link>

             </motion.div>
  );
}


{/* <Link href={`/products/${product.slug}`}>
        {firstImage && (
          <Image
            src={firstImage}
            alt="adada"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        )}
        <h2 className="mt-2 font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link> */}
