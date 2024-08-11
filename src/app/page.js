"use client";
import { getCookieObject } from "@/utils/loginUtils";
import Navigation from "./components/navigation";
import { useEffect, useState } from "react";
import { LANGUAGE, LANGUAGE_TYPE } from "@/constants/langConstants";

export default function Home() {
  const { language } = getCookieObject();
  const [websiteDetails, setWebsiteDetails] = useState(LANGUAGE[LANGUAGE_TYPE.ENGLISH]);
  useEffect(() => {
    const currentWebData = language
      ? LANGUAGE[language]
      : LANGUAGE[LANGUAGE_TYPE.ENGLISH];
    setWebsiteDetails({ ...currentWebData });
  }, [language]);
  const setLanguage = (langString) => {
    setCookieDetails({ lang: langString });
    window.location.reload();
  };
  return (
    <>
      {websiteDetails && (
        <div>
          <Navigation />
          <section class="bg-image h-96 flex items-center justify-center text-white text-center">
            <div>
              <h1 class="text-8xl mb-4">THE ALGAE STORE</h1>
            </div>
          </section>

          <main>
            <section className="grid grid-cols-3 justify-between mt-24 gap-0">
              <div>
                <img src="/seaweed1.png" />
              </div>
              <div className="text-center">
                <div>
                  <h3 className="text-[#3498db]">WHO WE ARE</h3>
                </div>
                <div>
                  <div className="text-5xl font-extralight">
                    Cultivating a Healthier
                  </div>
                  <div className="text-5xl font-extralight">
                    Future with Algae
                  </div>
                </div>
                <div className="mt-4 font-extralight">
                  Algae & Seaweed Emporium is your one-stop shop for unlocking
                  the incredible potential of algae and seaweed. We are
                  passionate about bringing you the highest quality, sustainably
                  sourced algae and seaweed products that nourish your body and
                  respect our planet.
                </div>
              </div>
              <div className="flex items-center justify-end">
                <img src="/seaweed2.png" />
              </div>
            </section>
            {/* <section className="grid grid-cols-3 justify-between mt-24 gap-0 bg-[#1C2FDC]">
          <div className="items-center justify-center">
            <div className="mt-40 p-10 text-[48px] font-[400] text-[#FFFFFF]">
              Featured Products
            </div>
            <div className="mt-4 text-[16px] font-[500] text-[#FFFFFF]">
              We source only the finest algae and seaweed products, ensuring
              purity, potency, and effectiveness.
            </div>
            <a
              href="#"
              class="dark:text-white hover:underline text-[#FFFFFF] p-10"
            >
              <p class="border border-[#FFFFFF] rounded-full px-4 py-1">
                SHOP NOW
              </p>
            </a>
          </div>
          <div className="flex col-span-2 items-center justify-end">
            <div className="mt-4 font-extralight">
              Algae & Seaweed Emporium is your one-stop shop for unlocking the
              incredible potential of algae and seaweed. We are passionate about
              bringing you the highest quality, sustainably sourced algae and
              seaweed products that nourish your body and respect our planet.
            </div>
          </div>
        </section> */}
            <section className="mt-24">
              <div className="text-[16px] font-[700] text-[#273CF6] flex items-center justify-center">
                SOURCED FROM
              </div>
              <div className="text-[48px] font-[300] text-[#000000] flex items-center justify-center">
                India's Rich Marine
              </div>
              <div className="text-[48px] font-[300] text-[#000000] flex items-center justify-center">
                Biodiversity
              </div>
              <div className="grid grid-cols-2 justify-between gap-0">
                <div className="flex items-center justify-center">
                  <img src="/india.png" />
                </div>
                <div className="p-10">
                  <div>
                    <img src="/Group2.png" />
                    <div className="text-[14px] font-[600] text-[#343434] mt-5">
                      Supporting Local Communities:{" "}
                      <span className="font-[300]">
                        We believe in empowering Indian seaweed farmers and
                        contributing to the local economy.
                      </span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <img src="/Group2.png" />
                    <div className="text-[14px] font-[600] text-[#343434] mt-5">
                      Responsible Harvesting:{" "}
                      <span className="font-[300]">
                        We advocate for sustainable practices that ensure the
                        long-term health of our oceans.
                      </span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <img src="/Vector.png" />
                    <div className="text-[14px] font-[600] text-[#343434] mt-5">
                      Supporting Local Communities:{" "}
                      <span className="font-[300]">
                        We appreciate and respect the rich diversity of algae
                        and seaweed found along India's coastline, and strive to
                        promote its sustainable use.
                      </span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <div className="text-[14px] font-[600] text-[#343434] mt-5 mb-5">
                      Powered By
                    </div>
                    <div className="grid grid-cols-6">
                      <div>
                        <img src="/sponser1.png" />
                      </div>
                      <div>
                        <img src="/sponser2.png" />
                      </div>
                      <div className="flex items-center justify-end">
                        <img src="/sponser3.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="mt-24 mb-24">
          <div className="grid grid-cols-2 justify-between gap-0">
            <div className="pt-10 pl-20">
              <div className="text-[48px] font-[400] text-[#000000]">
                Enquire Here!
              </div>
              <div className="text-[48px] font-[400] text-[#000000]">
                <div class="flex flex-col gap-6 w-72">
                  <div class="relative h-11 w-full min-w-[200px]">
                    <input
                      placeholder="Standard"
                      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Standard
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>2</div>
          </div>
        </section> */}
            <section
              id="footer"
              className="grid grid-cols-4 justify-between pt-10 pb-20 gap-0 bg-[#E2F949]"
            >
              <div className="items-center justify-center">
                <div className="mt-10 text-[20px] font-[700] text-[#252525] flex items-center justify-center">
                  The Algae Store
                </div>
              </div>
              <div></div>
              <div>
                <div className="mt-10 text-[18px] font-[400] text-[#252525] flex items-center">
                  Home
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center">
                  About
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center">
                  Services
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center">
                  FAQs
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center">
                  Contact Us
                </div>
              </div>
              <div>
                <div className="mt-10 text-[24.88px] font-[500] text-[#252525] flex items-center">
                  Contact
                </div>
                <div className="mt-2 text-[16px] font-[400] text-[#252525] flex items-center">
                  Mahendrapool
                </div>
                <div className="mt-2 text-[16px] font-[400] text-[#252525] flex items-center">
                  Pokhara, Nepal
                </div>
                <div className="mt-2 text-[16px] font-[400] text-[#252525] flex items-center">
                  +977-[0]61-328463
                </div>
              </div>
            </section>
          </main>
        </div>
      )}{" "}
    </>
  );
}
