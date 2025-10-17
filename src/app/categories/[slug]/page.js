import { productsByCategoryQuery } from "@/app/lib/queries";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

import { client } from "@/sanity/lib/client";

export default async function CategoryPage({ params }) {
  // ✅ Await params before using its properties
  const { slug } = await params;

  // ✅ Now safe to pass slug into the query
  const products = await client.fetch(productsByCategoryQuery, { slug });

  return (
    <div className="overflow-x-hidden bg-black min-h-screen flex flex-col">
        <Navbar/>
        <div
        className="text-2xl flex items-center justify-start w-full cabin text-white mt-5 px-2 md:px-6  uppercase   max-w-5xl mx-auto     border-gray-800 "
        >
          <h1>{slug}</h1>
        </div>
        <div
        className="text-[12px] flex items-center justify-start w-full cabin text-white  px-2 md:px-6    mb-2  max-w-5xl mx-auto   border-gray-800 pb-2"
        >
          <h1>Product Listing</h1>
        </div>
    <div className="">
      

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
       <div className="grid grid-cols-2 gap-x-4 gap-y-6 py-6 mb-5 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-5xl mx-auto">
  {products.map((p) => (
    <ProductCard key={p._id} product={p} />
  ))}
</div>

      )}
    </div>
    <Footer/>
    </div>
  );
}
