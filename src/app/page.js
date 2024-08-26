"use client";
import { getCookieObject } from "@/utils/loginUtils";
import Navigation from "./components/navigation";
import { useEffect, useState } from "react";
import { LANGUAGE, LANGUAGE_TYPE } from "@/constants/langConstants";
import ActiveSlider from "./components/cutomActiveSlider";
import { sendEmail } from "@/services/emailService";

export default function Home() {
  const { language } = getCookieObject();
  const [fullName, setUserFullName] = useState(null);
  const [emailId, setEmailId] = useState(null);
  const [message, setMessage] = useState(null);
  const [websiteDetails, setWebsiteDetails] = useState(
    LANGUAGE[LANGUAGE_TYPE.ENGLISH]
  );
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

  const handleContactUsClick = () => {
    const customMessage = `Name : ${fullName}\n Email : ${emailId}\n Message : ${message}`;
    const payload = {
      from_name: "Alage Store",
      to_name: "Admin",
      heading: "A new inquiry : ",
      message: customMessage,
      to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    };
    sendEmail(payload).then((emailRes) => {
      if (emailRes) {
        alert(
          "Your selling request is sent to our admin, will contact you soon."
        );
        router.push("/");
      }
    });
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
            <section className="grid grid-cols-2 md:grid-cols-3 justify-between mt-24 gap-0 mb-24">
              <div>
                <img src="/seaweed1.png" />
              </div>
              <div className="text-center">
                <div>
                  <h3 className="text-[#3498db]">WHO WE ARE</h3>
                </div>
                <div>
                  <div className="text-xl md:text-5xl font-extralight">
                    Cultivating a Healthier
                  </div>
                  <div className="text-xl md:text-5xl font-extralight">
                    Future with Algae
                  </div>
                </div>
                <div className="hidden md:block mt-4 font-extralight">
                  Algae & Seaweed Emporium is your one-stop shop for unlocking
                  the incredible potential of algae and seaweed. We are
                  passionate about bringing you the highest quality, sustainably
                  sourced algae and seaweed products that nourish your body and
                  respect our planet.
                </div>
              </div>
              <div className="md:hidden mt-4 font-extralight p-2 text-[17px]">
                Algae & Seaweed Emporium is your one-stop shop for unlocking the
                incredible potential of algae and seaweed. We are passionate
                about bringing you the highest
              </div>
              <div className="flex items-center justify-end">
                <img src="/seaweed2.png" />
              </div>
              <div className="md:hidden col-span-2 font-extralight pl-2 pr-2 text-[17px]">
                quality, sustainably sourced algae and seaweed products that
                nourish your body and respect our planet.
              </div>
            </section>
            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 bg-[#1C2FDC]">
                <div className="col-span-1">
                  <div className="mt-24 md:mt-[200px] text-[30px] md:text-[48px] font-serif font-[400] text-[#FFFFFF] flex items-center justify-center">
                    Featured Products
                  </div>
                  <div className="text-[16px] font-[500] text-[#FFFFFF] flex items-center justify-center p-10">
                    We source only the finest algae and seaweed products,
                    ensuring purity, potency and effectiveness.
                  </div>
                </div>
                <div className="col-span-2">
                  <ActiveSlider />
                </div>
              </div>
            </section>
            <section className="mt-24">
              <div className="text-[16px] font-[700] text-[#273CF6] flex items-center justify-center">
                SOURCED FROM
              </div>
              <div className="text-[30px] md:text-[48px] font-[300] text-[#000000] flex items-center justify-center">
                India's Rich Marine
              </div>
              <div className="text-[30px] md:text-[48px] font-[300] text-[#000000] flex items-center justify-center">
                Biodiversity
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-0">
                <div className="flex items-center justify-center">
                  {/* <img src="/india.png" /> */}
                  <img src="/india.png" usemap="#image-map" />

                  <map className="invisible md:visible" name="image-map">
                    <area
                      target="_blank"
                      alt="Orissa"
                      title="Orissa"
                      href="https://www.algaestore.in"
                      coords="436,431,12"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="Tamil Nadu"
                      title="Tamil Nadu"
                      href="https://www.algaestore.in"
                      coords="308,633,13"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="Karnataka"
                      title="Karnataka"
                      href="https://www.algaestore.in"
                      coords="189,535,12"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="Maharashtra"
                      title="Maharashtra"
                      href="https://www.algaestore.in"
                      coords="175,468,13"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="Gujarat"
                      title="Gujarat"
                      href="https://www.algaestore.in"
                      coords="115,407,10"
                      shape="circle"
                    />
                  </map>

                  <map className="visible md:invisible" name="image-map">
                    <area
                      target="_blank"
                      alt="west bengal"
                      title="west bengal"
                      href="https://vercel.com/bhasmasurs-projects"
                      coords="221,220,9"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="kerela"
                      title="kerela"
                      href="https://vercel.com/bhasmasurs-projects"
                      coords="156,323,9"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="karnataka"
                      title="karnataka"
                      href="https://vercel.com/bhasmasurs-projects"
                      coords="96,266,10"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="maharastra"
                      title="maharastra"
                      href="https://vercel.com/bhasmasurs-projects"
                      coords="86,237,12"
                      shape="circle"
                    />
                    <area
                      target="_blank"
                      alt="gujarat"
                      title="gujarat"
                      href="https://vercel.com/bhasmasurs-projects"
                      coords="57,206,9"
                      shape="circle"
                    />
                  </map>
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
            <section className="mt-24 mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-0">
                <div className="pt-10 pl-5 md:pl-20 content-center">
                  <div className="text-[30px] md:text-[48px] font-[400] text-[#000000] font-serif">
                    Enquire Here!
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="text-[48px] font-[400] text-[#000000]">
                      <div class="flex flex-col gap-6 w-72">
                        <div class="relative">
                          <input
                            onChange={(e) => setUserFullName(e.target.value)}
                            type="text"
                            id="hs-floating-underline-input-passowrd"
                            class="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                                  focus:pt-6
                                  focus:pb-2
                                  [&:not(:placeholder-shown)]:pt-6
                                  [&:not(:placeholder-shown)]:pb-2
                                  autofill:pt-6
                                  autofill:pb-2"
                            placeholder="Your Name"
                          />
                          <label
                            for="hs-floating-underline-input-passowrd"
                            class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:scale-90
                                      peer-focus:translate-x-0.5
                                      peer-focus:-translate-y-1.5
                                      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                      peer-[:not(:placeholder-shown)]:scale-90
                                      peer-[:not(:placeholder-shown)]:translate-x-0.5
                                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                          >
                            Full Name
                          </label>
                        </div>
                        <div className="text-[48px] font-[400] text-[#000000]">
                          <div class="flex flex-col gap-6 w-72">
                            <div class="relative">
                              <input
                                onChange={(e) => setEmailId(e.target.value)}
                                type="text"
                                id="hs-floating-underline-input-passowrd"
                                class="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                                  focus:pt-6
                                  focus:pb-2
                                  [&:not(:placeholder-shown)]:pt-6
                                  [&:not(:placeholder-shown)]:pb-2
                                  autofill:pt-6
                                  autofill:pb-2"
                                placeholder="algae@gmail.com"
                              />
                              <label
                                for="hs-floating-underline-input-passowrd"
                                class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:scale-90
                                      peer-focus:translate-x-0.5
                                      peer-focus:-translate-y-1.5
                                      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                      peer-[:not(:placeholder-shown)]:scale-90
                                      peer-[:not(:placeholder-shown)]:translate-x-0.5
                                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                              >
                                E-Mail
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-[48px] font-[400] text-[#000000]">
                          <div class="flex flex-col gap-6 w-72">
                            <div class="relative">
                              <input
                                onChange={(e) => setMessage(e.target.value)}
                                type="text"
                                id="hs-floating-underline-input-passowrd"
                                class="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                                  focus:pt-6
                                  focus:pb-2
                                  [&:not(:placeholder-shown)]:pt-6
                                  [&:not(:placeholder-shown)]:pb-2
                                  autofill:pt-6
                                  autofill:pb-2"
                                placeholder="what you wanna talk about"
                              />
                              <label
                                for="hs-floating-underline-input-passowrd"
                                class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:scale-90
                                      peer-focus:translate-x-0.5
                                      peer-focus:-translate-y-1.5
                                      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                      peer-[:not(:placeholder-shown)]:scale-90
                                      peer-[:not(:placeholder-shown)]:translate-x-0.5
                                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                              >
                                Message
                              </label>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleContactUsClick}>
                          <a
                            href="#"
                            className="text-gray-900 dark:text-white hover:underline flex items-center justify-start"
                          >
                            <p class="border border-black rounded-full px-4 py-1 text-[12px] font-serif font-[400] text-[#1C1B1F]">
                              Contact Us
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-3">
                        Contact
                        <div>algaestores#gmail.com</div>
                      </div>
                      <div className="mt-7">
                        Phone
                        <div>+91 7741944777</div>
                      </div>
                      <div className="mt-8">
                        Based In
                        <div>Maharashtra</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-center">
                  <img src="/sideimage1.png" />
                </div>
              </div>
            </section>
            <section
              id="footer"
              className="grid grid-cols-3 md:grid-cols-4 justify-between pt-10 pb-20 gap-0 bg-[#E2F949]"
            >
              <div className="items-center justify-center">
                <div className="mt-10 p-1 md:p-0 text-[16px] md:text-[20px] md:text-[20px] font-[700] text-[#252525] flex items-center justify-center">
                  The Algae Store
                </div>
              </div>
              <div className="hidden md:block"></div>
              <div>
                <div className="mt-10 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal">
                  Home
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal">
                  About
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal">
                  Services
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal">
                  FAQs
                </div>
                <div className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal">
                  Contact Us
                </div>
              </div>
              <div>
                <div className="mt-10 text-[24.88px] font-[500] text-[#252525] flex items-center">
                  Contact
                </div>
                <div className="mt-2 text-[16px] font-[400] text-[#252525] flex items-center">
                  Nasik
                </div>
                <div className="mt-2 text-[16px] font-[400] text-[#252525] flex items-center">
                  Maharashtra, India
                </div>
                <div className="mt-2 text-[16px] font-[400] text-[#252525] flex items-center">
                  +91-7741944777
                </div>
              </div>
            </section>
          </main>
        </div>
      )}{" "}
    </>
  );
}
