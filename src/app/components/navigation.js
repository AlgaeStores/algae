"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./mobile-menu";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMenuAndScroll = (sectionNumber) => {
    closeMenu();
    scrollToSection(sectionNumber);
  };

  const closeMenuAndOpenCart = () => {
    closeMenu();
    openCartModal();
  };
  const router = useRouter();
  const redirectToPage = (redirectTo) => {
    router.push(redirectTo);
  };

  return (
    <>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="hidden md:block max-w-screen-xl px-4 py-3 mx-auto">
          <div class="grid grid-cols-12 items-center">
            <div className="col-span-2">
              <a
                href="#"
                class="text-gray-900 dark:text-white hover:underline text-xl"
                aria-current="page"
              >
                THE ALGAE STORE
              </a>
            </div>
            <div onClick={() => redirectToPage("/supplier")}>
              <a
                href="#"
                class="text-gray-900 dark:text-white hover:underline flex items-center justify-center"
              >
                SUPPLIER
              </a>
            </div>
            <div onClick={() => redirectToPage("/buyer")}>
              <a
                href="#"
                class="text-gray-900 dark:text-white hover:underline flex items-center justify-center"
              >
                BUYER
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-gray-900 dark:text-white hover:underline flex items-center justify-center"
              >
                CONTACT
              </a>
            </div>
            <div className="col-span-7">
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline flex items-center justify-end"
              >
                <p class="border border-black rounded-full px-4 py-1">
                  ENQUIRY TODAY
                </p>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="md:hidden grid grid-cols-2 items-center p-5">
        <div>THE ALGAE STORE</div>
        <div className="text-gray-900 dark:text-white hover:underline flex items-center justify-end">
          <button
            onClick={toggleMenu}
            className="text-xl focus:outline-none lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        closeMenuAndScroll={closeMenuAndScroll}
        closeMenuAndOpenCart={closeMenuAndOpenCart}
      />
    </>
  );
};

export default Navigation;
