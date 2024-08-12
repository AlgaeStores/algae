// components/MobileMenu.js

import { Fragment } from "react";

const MobileMenu = ({
  isOpen,
  onClose,
  closeMenuAndScroll,
  closeMenuAndOpenCart,
}) => {
  return (
    <Fragment>
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button
            onClick={onClose}
            className="text-gray-600 focus:outline-none"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            <li
              onClick={() => closeMenuAndScroll(1)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => closeMenuAndScroll(2)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              Supplier
            </li>
            <li
              onClick={() => closeMenuAndScroll(3)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              Buyer
            </li>
            <li
              onClick={() => closeMenuAndScroll(4)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              Contact
            </li>
            <li
              onClick={() => closeMenuAndScroll(4)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                <p class="border border-black rounded-full px-4 py-1">
                  ENQUIRY TODAY
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
