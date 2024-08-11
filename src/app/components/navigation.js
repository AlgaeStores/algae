"use client";

import React from "react";
import { useRouter } from "next/navigation";
const Navigation = () => {
  const router = useRouter();
  const redirectToPage = (redirectTo) => {
    router.push(redirectTo);
  };

  return (
    <>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
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
    </>
  );
};

export default Navigation;
