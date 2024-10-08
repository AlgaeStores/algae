"use client";
import { getCookieObject } from "@/utils/loginUtils";
import Navigation from "./components/navigation";
import { useEffect, useRef, useState } from "react";
import { LANGUAGE, LANGUAGE_TYPE } from "@/constants/langConstants";
import ActiveSlider from "./components/cutomActiveSlider";
import { sendEmail } from "@/services/emailService";
import { useRouter } from "next/navigation";

export default function Home() {
  const { language } = getCookieObject();
  const [fullName, setUserFullName] = useState(null);
  const [emailId, setEmailId] = useState(null);
  const [message, setMessage] = useState(null);
  const aboutSection = useRef(null);
  const productsSection = useRef(null);
  const contactSection = useRef(null);
  const router = useRouter();
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
    if (fullName && emailId && message) {
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
    } else {
      alert("Provide all the information mentioned");
    }
  };

  const scrollToSection = (num) => {
    switch (num) {
      case 1:
        window.scrollTo({
          top: aboutSection.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: productsSection.current.offsetTop - 120,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scrollTo({
          top: contactSection.current.offsetTop - 120,
          behavior: "smooth",
        });
        break;
    }
  };

  const redirectToPage = (redirectTo) => {
    router.push(redirectTo);
  };

  return (
    <>
      {websiteDetails && (
        <div>
          <Navigation scrollToSection={scrollToSection} />
          <section class="bg-image h-[590px] flex items-center justify-center text-white text-center">
            <div>
              <h1 class="text-[96px] font-[700] text-[#FFFFFF] mb-4">
                THE ALGAE STORE
              </h1>
            </div>
          </section>

          <main>
            <section
              ref={aboutSection}
              className="grid grid-cols-2 md:grid-cols-3 justify-between mt-24 gap-0 mb-24"
            >
              <div className="p-4">
                <img src="/algae_04.jpg" />
              </div>
              <div className="text-center">
                <div>
                  <h3 className="text-[#273CF6] text-[16px] font-[700]">
                    WHO WE ARE
                  </h3>
                </div>
                {/* <div>
                  <div className="text-[#000000] text-[48px] font-[300] font-serif">
                    Cultivating a Healthier
                  </div>
                  <div className="text-[#000000] text-[48px] font-[300] font-serif">
                    Future with Algae
                  </div>
                </div> */}
                <div className="hidden md:block mt-4 text-[#484848] text-[16px] font-[400]">
                  The Algae Store is India’s first dedicated marketplace for
                  seaweed, linking global buyers and sellers across the value
                  chain. We provide raw materials, processed ingredients, and
                  finished products, simplifying procurement in the fragmented
                  seaweed market.
                </div>
                <div className="hidden md:block mt-4 text-[#484848] text-[16px] font-[400]">
                  Our solution serves industries and applications across diverse
                  sectors such as food, pharmaceuticals, cosmetics, material
                  science, and agriculture.
                </div>
              </div>
              <div className="md:hidden mt-4 font-extralight p-2 text-[17px]">
                Algae & Seaweed Emporium is your one-stop shop for unlocking the
                incredible potential of algae and seaweed. We are passionate
                about bringing you the highest
              </div>
              <div className="flex items-center justify-end p-4">
                <img src="/algae_05.jpg" />
              </div>
              <div className="md:hidden col-span-2 font-extralight pl-2 pr-2 text-[17px]">
                quality, sustainably sourced algae and seaweed products that
                nourish your body and respect our planet.
              </div>
            </section>
            <section ref={productsSection}>
              <div className="grid grid-cols-1 md:grid-cols-3 bg-[#1C2FDC]">
                <div className="col-span-1">
                  <div className="mt-24 md:mt-[200px] text-[30px] md:text-[48px] font-serif font-[400] text-[#FFFFFF] flex items-center justify-center">
                    Featured Products
                  </div>
                  <div className="md:ml-8 text-[16px] font-[500] text-[#FFFFFF] flex items-center justify-center p-10">
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
            <section ref={contactSection} className="mt-24 mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-0">
                <div className="pt-10 pl-5 md:pl-20 md:ml-10 content-center">
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
                            class="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
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
                            class="text-[14px] font-[400] text-[#000000] absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:scale-90
                                      peer-focus:translate-x-0.5
                                      peer-focus:-translate-y-1.5
                                      peer-focus:text-gray-500
                                      peer-[:not(:placeholder-shown)]:scale-90
                                      peer-[:not(:placeholder-shown)]:translate-x-0.5
                                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                      peer-[:not(:placeholder-shown)]:text-gray-500"
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
                                class="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
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
                                class="text-[14px] font-[400] text-[#000000] absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:scale-90
                                      peer-focus:translate-x-0.5
                                      peer-focus:-translate-y-1.5
                                      peer-focus:text-gray-500
                                      peer-[:not(:placeholder-shown)]:scale-90
                                      peer-[:not(:placeholder-shown)]:translate-x-0.5
                                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                      peer-[:not(:placeholder-shown)]:text-gray-500"
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
                                class="text-[14px] font-[400] text-[#000000] peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
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
                                class="text-[14px] font-[400] text-[#000000] absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:scale-90
                                      peer-focus:translate-x-0.5
                                      peer-focus:-translate-y-1.5
                                      peer-focus:text-gray-500
                                      peer-[:not(:placeholder-shown)]:scale-90
                                      peer-[:not(:placeholder-shown)]:translate-x-0.5
                                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                      peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Message
                              </label>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleContactUsClick}>
                          <a
                            href="#"
                            className="text-gray-900 hover:underline flex items-center justify-start"
                          >
                            <p class="border border-black rounded-full px-4 py-1 text-[12px] font-serif font-[500] text-[#1C1B1F]">
                              Contact Us
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-3">
                        <div className="text-[16px] font-[700] text-[#000000]">
                          Contact
                        </div>
                        <div className="text-[16px] font-[400] text-[#000000]">
                          algaestores@gmail.com
                        </div>
                      </div>
                      <div className="mt-7">
                        <div className="text-[16px] font-[700] text-[#000000]">
                          Phone
                        </div>
                        <div className="text-[16px] font-[400] text-[#000000]">
                          +91 7741933777
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="text-[16px] font-[700] text-[#000000]">
                          Based In
                        </div>
                        <div className="text-[16px] font-[400] text-[#000000]">
                          Maharashtra
                        </div>
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
                <div
                  onClick={() => scrollToSection(1)}
                  className="mt-10 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal cursor-pointer"
                >
                  Home
                </div>
                <div
                  onClick={() => scrollToSection(2)}
                  className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal cursor-pointer"
                >
                  Proucts
                </div>
                <div
                  onClick={() => redirectToPage("/services")}
                  className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal cursor-pointer"
                >
                  Services
                </div>
                <div
                  onClick={() => redirectToPage("/supplier")}
                  className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal cursor-pointer"
                >
                  Supplier
                </div>
                <div
                  onClick={() => redirectToPage("/buyer")}
                  className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal cursor-pointer"
                >
                  Buyer
                </div>
                <div
                  onClick={() => scrollToSection(3)}
                  className="mt-5 text-[18px] font-[400] text-[#252525] flex items-center justify-center md:justify-normal cursor-pointer"
                >
                  Enquire Here
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
                  +91-7741933777
                </div>
              </div>
            </section>
          </main>
        </div>
      )}{" "}
    </>
  );
}
