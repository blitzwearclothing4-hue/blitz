"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

// ✅ adjust if renamed

export default function Footer() {
  const phoneNumber = "+923279912321";
  const message = "Hello, I’m interested in ordering from Blitzwear Clothing!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="overflow-x-hidden">
      <footer className="bg-black text-white">
        <motion.div
          className="w-full space-y-8 px-4 py-16 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-blue-600 font-bold text-3xl barlow">
                <p>Blitzwear Clothing</p>
              </div>

              <p className="mt-4 max-w-xs text-gray-300">
                Premium sportswear, casualwear, and custom manufacturing for
                every brand and athlete. Designed with passion. Made with
                quality.
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-2 text-gray-300 text-sm">
                <p>Email: blitzwearclothing4@gmail.com</p>
                <p>Phone: +92 327 9912321</p>
              </div>

              {/* Social Icons */}
              <motion.ul
                className="mt-6 flex gap-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/blitzwearclothing/"
                    className="hover:opacity-75"
                  >
                    <FaInstagram size={22} />
                  </Link>
                </li>
                <li>
                  <Link href={url} target="_blank" className="hover:opacity-75">
                    <FaWhatsapp size={22} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/blitzwearclothing"
                    className="hover:opacity-75"
                  >
                    <FaFacebookF size={22} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.tiktok.com/@blitzwearclothing"
                    className="hover:opacity-75"
                  >
                    <FaTiktok size={22} />
                  </Link>
                </li>
              </motion.ul>
            </motion.div>

            {/* Categories Section */}
            <motion.div
              className="grid text-white grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Casual Wear */}
              <div>
                <p className="font-semibold text-lg">Casual Wear</p>
                <ul className="mt-6 space-y-4 text-[15px] text-gray-300">
                  <li><Link href="/categories/hoodies" className="hover:opacity-75">Hoodies</Link></li>
                  <li><Link href="/categories/t-shirts" className="hover:opacity-75">T-Shirts</Link></li>
                  <li><Link href="/categories/tracksuits" className="hover:opacity-75">Tracksuits</Link></li>
                  <li><Link href="/categories/shorts" className="hover:opacity-75">Shorts</Link></li>
                </ul>
              </div>

              {/* Jackets */}
              <div>
                <p className="font-semibold text-lg">Jackets</p>
                <ul className="mt-6 space-y-4 text-[15px] text-gray-300">
                  <li><Link href="/categories/varsity-jacket-men-women" className="hover:opacity-75">Varsity Jacket (Men, Women)</Link></li>
                  <li><Link href="/categories/puffer-jacket-men-women" className="hover:opacity-75">Puffer Jacket (Men, Women)</Link></li>
                  <li><Link href="/categories/leather-jacket-men-women" className="hover:opacity-75">Leather Jacket (Men, Women)</Link></li>
                  <li><Link href="/categories/denim-jacket-men-women" className="hover:opacity-75">Denim Jacket (Men, Women)</Link></li>
                </ul>
              </div>

              {/* Sportswear */}
              <div>
                <p className="font-semibold text-lg">Sportswear</p>
                <ul className="mt-6 space-y-4 text-[15px] text-gray-300">
                  <li><Link href="/categories/american-football-uniform" className="hover:opacity-75">American Football Uniform</Link></li>
                  <li><Link href="/categories/baseball-uniform" className="hover:opacity-75">Baseball Uniform</Link></li>
                  <li><Link href="/categories/cheerleading-uniform" className="hover:opacity-75">Cheerleading Uniform</Link></li>
                  <li><Link href="/categories/volleyball-uniform" className="hover:opacity-75">Volleyball Uniform</Link></li>
                  <li><Link href="/categories/ice-hockey-uniform" className="hover:opacity-75">Ice Hockey Uniform</Link></li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Partners Logos */}
        

          {/* Copyright */}
          <motion.p
            className="text-xs text-gray-500 text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            &copy; 2025 Blitzwear Clothing. All rights reserved.
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
}
