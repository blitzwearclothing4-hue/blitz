"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <Image
        src={images[active]}
        alt={`Product image ${active + 1}`}
        width={384} // w-96 = 384px
        height={384} // h-96 = 384px
        className="object-cover rounded-lg"
      />
      <div className="flex gap-2 mt-4">
        {images.map((url, i) => (
          <Image
            key={i}
            src={url}
            alt={`Thumbnail ${i + 1}`}
            width={80} // w-20 = 80px
            height={80} // h-20 = 80px
            className={`object-cover rounded cursor-pointer border ${
              active === i ? "border-black" : "border-gray-300"
            }`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}



// "use client";
// import { useState } from "react";

// export default function ProductGallery({ images }) {
//   const [active, setActive] = useState(0);

//   if (!images || images.length === 0) return null;

//   return (
//     <div>
//       <img
//         src={images[active]}
//         alt={`Product image ${active + 1}`}
//         className="w-96 h-96 object-cover rounded-lg"
//       />
//       <div className="flex gap-2 mt-4">
//         {images.map((url, i) => (
//           <img
//             key={i}
//             src={url}
//             alt={`Thumbnail ${i + 1}`}
//             className={`w-20 h-20 object-cover rounded cursor-pointer border ${active === i ? "border-black" : "border-gray-300"}`}
//             onClick={() => setActive(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
