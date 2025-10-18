"use client";

import { useState } from "react";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { cartItemsCount, isLoaded } = useCart();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

   const phoneNumber = "+923279912321";
  const message = "Hello, I’m interested in ordering from Blitzwear Clothing!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="flex border-b roboto bg-black min-h-[70px] tracking-wide relative z-50">
      <div className="px-4 py-3 w-full flex items-center">
        <div className="flex flex-wrap items-center justify-between sm:px-10 gap-4 w-full mx-auto">
          {/* Logo */}
          <Link href="/" className="max-sm:hidden">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={20}
              className="w-[50px] h-auto"
            />
          </Link>

          <Link href="/" className="hidden max-sm:block">
            <Image
              src={logo}
              alt="logo"
              width={36}
              height={36}
              className="w-9 h-auto"
            />
          </Link>

          {/* Collapsible Menu */}
          <div
            className={`${
              menuOpen ? "block" : "max-lg:hidden lg:!block"
            } max-lg:fixed max-lg:bg-white max-lg:w-3/4 max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-lg max-lg:overflow-auto z-50 transition-all duration-300`}
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="lg:hidden absolute top-4 right-4 rounded-full bg-black text-white w-9 h-9 flex items-center justify-center"
            >
              <FiX className="w-5 h-5" />
            </button>

            <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3">
              {/* Mobile Logo */}
              <li className="mb-6 hidden max-lg:block">
                <Link href="/" onClick={closeMenu}>
                  <Image
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-10 h-auto"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="hover:text-gray-400 text-[15px] block text-black lg:text-white max-lg:border-b max-lg:border-gray-300 max-lg:py-3"
                >
                  Home
                </Link>
              </li>

              {/* Dropdown 1: Casual Wear */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown(1)}
                  className="flex items-center justify-between w-full hover:text-blue-700 text-[15px] text-black lg:text-white max-lg:border-b max-lg:border-gray-300 max-lg:py-3"
                >
                  Casual Wear <IoIosArrowDown className="ml-1" />
                </button>

                <ul
                  className={`${
                    openDropdown === 1 ? "max-h-[500px] py-4" : "max-h-0"
                  } lg:absolute lg:shadow-lg lg:bg-white lg:space-y-3 lg:top-6 lg:-left-4 min-w-[250px] z-50 overflow-hidden transition-all duration-500 px-6`}
                >
                  {[
                    { name: "Hoodies", href: "/categories/hoodies" },
                    { name: "T-Shirts", href: "/categories/t-shirts" },
                    { name: "Tracksuits", href: "/categories/tracksuits" },
                    { name: "Shorts", href: "/categories/shorts" },
                    { name: "Leggings Women", href: "/categories/leggings-women" },
                    { name: "Beanies", href: "/categories/beanies" },
                  ].map((item, i) => (
                    <li key={i} className="border-b border-gray-300 py-2">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="hover:text-blue-700 text-gray-600 text-[15px] font-medium block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Dropdown 2: Jackets */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown(2)}
                  className="flex items-center justify-between w-full hover:text-blue-700 text-[15px] text-black lg:text-white max-lg:border-b max-lg:border-gray-300 max-lg:py-3"
                >
                  Jackets <IoIosArrowDown className="ml-1" />
                </button>

                <ul
                  className={`${
                    openDropdown === 2 ? "max-h-[500px] py-4" : "max-h-0"
                  } lg:absolute lg:shadow-lg lg:bg-white lg:space-y-3 lg:top-6 lg:-left-4 min-w-[250px] z-50 overflow-hidden transition-all duration-500 px-6`}
                >
                  {[
                    {
                      name: "Varsity Jacket (Men, Women)",
                      href: "/categories/varsity-jacket-men-women",
                    },
                    {
                      name: "Puffer Jacket (Men, Women)",
                      href: "/categories/puffer-jacket-men-women",
                    },
                    {
                      name: "Leather Jacket (Men, Women)",
                      href: "/categories/leather-jacket-men-women",
                    },
                    {
                      name: "Denim Jacket (Men, Women)",
                      href: "/categories/denim-jacket-men-women",
                    },
                  ].map((item, i) => (
                    <li key={i} className="border-b border-gray-300 py-2">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="hover:text-blue-700 text-gray-600 text-[15px] font-medium block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Dropdown 3: Sportswear */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown(3)}
                  className="flex items-center justify-between w-full hover:text-blue-700 text-[15px] text-black lg:text-white max-lg:border-b max-lg:border-gray-300 max-lg:py-3"
                >
                  Sports Wear <IoIosArrowDown className="ml-1" />
                </button>

                <ul
                  className={`${
                    openDropdown === 3 ? "max-h-[500px] py-4" : "max-h-0"
                  } lg:absolute lg:shadow-lg lg:bg-white lg:space-y-3 lg:top-6 lg:-left-4 min-w-[250px] z-50 overflow-hidden transition-all duration-500 px-6`}
                >
                  {[
                    { name: "American Football Uniform", href: "/categories/american-football-uniform" },
                    { name: "Baseball Uniform", href: "/categories/baseball-uniform" },
                    { name: "Cheerleading Uniform", href: "/categories/cheerleading-uniform" },
                    { name: "Volleyball Uniform", href: "/categories/volleyball-uniform" },
                    { name: "Ice Hockey Uniform", href: "/categories/ice-hockey-uniform" },
                    { name: "Backpack bags", href: "/categories/backpack-bags" },
                    { name: "Sport Caps", href: "/categories/sports-caps" },
                  ].map((item, i) => (
                    <li key={i} className="border-b border-gray-300 py-2">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="hover:text-blue-700 text-gray-600 text-[15px] font-medium block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link
                  href="/howtoorder"
                  onClick={closeMenu}
                  className="hover:text-blue-700 text-[15px] text-black lg:text-white block max-lg:border-b max-lg:border-gray-300 max-lg:py-3"
                >
                  How to Order
                </Link>
              </li>
              <li>
                <Link
                  href={url}
                  target="_blank"
                  onClick={closeMenu}
                  className="hover:text-blue-700 text-[15px] text-black lg:text-white block max-lg:border-b max-lg:border-gray-300 max-lg:py-3"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Cart + Hamburger */}
          <div className="flex items-center space-x-6 max-lg:ml-auto">
            <Link
              href="/cart"
              className="relative flex items-center justify-center hover:text-gray-400 transition"
            >
              <ShoppingCart size={22} className="text-white" />
              {isLoaded && cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden cursor-pointer"
            >
              <FiMenu className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
