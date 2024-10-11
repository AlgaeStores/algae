"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./mobile-menu";
const Navigation = ({scrollToSection}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMenuAndScroll = (scrollTo, redirectTo) => {
    if(scrollTo){
      scrollToSection(scrollTo)
    }else{
      redirectToPage(redirectTo)
    }
    closeMenu();
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
      <nav class="bg-gray-50 dark:bg-gray-50">
        <div class="hidden md:block max-w-screen-xl px-4 py-3 mx-auto">
          <div class="grid grid-cols-12 items-center">
            <div className="col-span-2" onClick={()=>scrollToSection(1)}>
              <a
                href="#"
                class="text-gray-900 hover:underline text-[20px] font-[700] text-[#252525]"
                aria-current="page"
              >
                THE ALGAE STORE
              </a>
            </div>
            <div onClick={()=>scrollToSection(2)}>
              <a
                href="#"
                class="text-gray-900 text-[14px] font-[500] text-[#252525] hover:underline flex items-center justify-center"
              >
                PRODUCTS
              </a>
            </div>
            <div onClick={() =>  window.open("/Algae_Store_Services.pdf", "_blank")}>
              <a
                href="#"
                class="text-gray-900 text-[14px] font-[500] text-[#252525] hover:underline flex items-center justify-center"
              >
                SERVICES
              </a>
            </div>
            <div onClick={() => redirectToPage("/supplier")}>
              <a
                href="#"
                class="text-gray-900 text-[14px] font-[500] text-[#252525] hover:underline flex items-center justify-center"
              >
                SUPPLIER
              </a>
            </div>
            <div onClick={() => redirectToPage("/buyer")}>
              <a
                href="#"
                class="text-gray-900 text-[14px] font-[500] text-[#252525] hover:underline flex items-center justify-center"
              >
                BUYER
              </a>
            </div>
            {/* <div onClick={()=>scrollToSection(3)}>
              <a
                href="#"
                class="text-gray-900 text-[14px] font-[500] text-[#252525] dark:text-white hover:underline flex items-center justify-center"
              >
                CONTACT
              </a>
            </div> */}
            <div onClick={()=>scrollToSection(3)} className="col-span-6">
              <a
                href="#"
                className="text-gray-900 text-[14px] font-[500] text-[#252525] hover:underline flex items-center justify-end"
              >
                <p class="border border-black rounded-full px-4 py-1">
                  ENQUIRY TODAY
                </p>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="bg-gray-50 dark:bg-gray-50 md:hidden grid grid-cols-2 items-center p-5">
        <div className="text-gray-900">THE ALGAE STORE</div>
        <div className="hover:underline flex items-center justify-end">
          <button
            onClick={toggleMenu}
            className="text-xl text-gray-900 focus:outline-none lg:hidden"
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
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navigation;
