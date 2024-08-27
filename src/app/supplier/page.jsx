'use client';

import React, { useState, useEffect } from 'react';
import './styles.css';
import { useRouter, usePathname } from 'next/navigation';
import { LANGUAGE, LANGUAGE_TYPE } from '@/constants/langConstants';
import { getCookieObject } from '@/utils/loginUtils';
import { sendEmail } from '@/services/emailService';
const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfileData, setUserProfileData] = useState({});
  const [languageObject, setLanguageObject] = useState({});
  const { language } = getCookieObject();
  useEffect(() => {
    const currentWebData = language
      ? LANGUAGE[language]
      : LANGUAGE[LANGUAGE_TYPE.ENGLISH];
      setLanguageObject({ ...currentWebData });
  }, [language]);

  const setFieldValue = (fieldValue, fieldName) => {
    let changedValue = userProfileData;
    changedValue[fieldName] = fieldValue;
    setUserProfileData((prevUserProfileData) => ({
      ...userProfileData,
      ...changedValue,
    }));
  };
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = () => {
    setIsLoading(true);
    const message = `Organisation Website : ${userProfileData.website}\n Organisation Name : ${userProfileData.organisationName}\n Name : ${userProfileData.name}\n Country of Origin : ${userProfileData.country}\n City : ${userProfileData.city}\n Phone Number : ${userProfileData.phone}\n Email : ${userProfileData.email}`;
    const payload = {
      from_name: 'Alage Store',
      to_name: 'Admin',
      heading: 'A new selling request : ',
      message: message,
      to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    };
    sendEmail(payload).then((emailRes) => {
      if (emailRes) {
        setIsLoading(false);
        alert(
          'Your selling request is sent to our admin, will contact you soon.'
        );
        router.push('/');
      }
    });
  };

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-[#E2F949]">
            <div className="p-6 md:p-20">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-10 pl-6">
                {languageObject.forSuppliers}
              </h1>
              <div className="p-6 md:mb-12">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-10">
                    {languageObject.gainNewCustomers}
                  </h2>
                </div>
                <div>
                  <h1 className="text-xl text-gray-800 mb-4 md:mb-10">
                    {languageObject.algaeStoreProvides}
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl text-gray-800 mb-2 md:mb-4">
                    <span className="text-2xl font-semibold text-gray-800 mb-2 md:mb-4">{languageObject.step1} : </span>{languageObject.submitSupplierInfo} 
                  </h1>
                  <h1 className="text-xl text-gray-800 mb-2 md:mb-4">
                    <span className="text-2xl font-semibold text-gray-800 mb-2 md:mb-4">{languageObject.step2} : </span>{languageObject.scheduleAnOnboarding} 
                  </h1>
                  <h1 className="text-xl text-gray-800 mb-2 md:mb-4">
                    <span className="text-2xl font-semibold text-gray-800 mb-2 md:mb-4">{languageObject.step3} : </span>{languageObject.reciveBuyingRequests} 
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-800 mb-4 md:mb-10">
                    {languageObject.noUpfrontCost}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white">
            <div className="p-6 md:p-20">
              <h2 className="text-2xl font-semibold mb-6">
                {languageObject.supplierInformationForm}
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="organisationName"
                    className="block mb-2 font-medium"
                  >
                    {languageObject.organisationName}
                  </label>
                  <input
                    onChange={(e) =>
                      setFieldValue(e.target.value, 'organisationName')
                    }
                    value={userProfileData.organisationName}
                    type="text"
                    id="organisationName"
                    placeholder={languageObject.title}
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="website" className="block mb-2 font-medium">
                    {languageObject.organisationWebsite}
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'website')}
                    value={userProfileData.website}
                    type="text"
                    id="website"
                    placeholder={languageObject.dummyWebsite}
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="mb-2 md:mb-0 md:mr-4">
                      <label
                        htmlFor="firstname"
                        className="block font-medium mb-2"
                      >
                        {languageObject.fullName}
                      </label>
                      <input
                        onChange={(e) => setFieldValue(e.target.value, 'name')}
                        value={userProfileData.name}
                        type="text"
                        id="firstname"
                        placeholder={languageObject.jasonChris}
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="mb-2 md:mb-0 md:mr-4">
                      <label htmlFor="email" className="block font-medium mb-2">
                        {languageObject.email}
                      </label>
                      <input
                        onChange={(e) => setFieldValue(e.target.value, 'email')}
                        value={userProfileData.email}
                        type="text"
                        id="email"
                        placeholder="someone@gmail.com"
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="md:ml-4">
                      <label htmlFor="city" className="block font-medium mb-2">
                        {languageObject.phoneNumber}
                      </label>
                      <input
                        onChange={(e) => setFieldValue(e.target.value, 'phone')}
                        value={userProfileData.phone}
                        type="text"
                        id="phone"
                        placeholder="+91 XXXXXXXXXX"
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="mb-2 md:mb-0 md:mr-4">
                      <label
                        htmlFor="country"
                        className="block font-medium mb-2"
                      >
                        {languageObject.countryOfOrigin}
                      </label>
                      <input
                        onChange={(e) =>
                          setFieldValue(e.target.value, 'country')
                        }
                        value={userProfileData.country}
                        type="text"
                        id="country"
                        placeholder={languageObject.india}
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="md:ml-4">
                      <label htmlFor="city" className="block font-medium mb-2">
                        {languageObject.cityOfOrigin}
                      </label>
                      <input
                        onChange={(e) => setFieldValue(e.target.value, 'city')}
                        value={userProfileData.city}
                        type="text"
                        id="city"
                        placeholder={languageObject.goa}
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block mb-2 font-medium">
                    {languageObject.yourinterest}
                  </label>
                  <textarea
                    onChange={(e) => setFieldValue(e.target.value, 'interest')}
                    value={userProfileData.tellWhatSelling}
                    id="interest"
                    placeholder={languageObject.tellWhatSelling}
                    className="w-full bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full py-3 px-4 bg-[#E2F949] text-[#000000] rounded hover:bg-[#1C2FDC]"
                  >
                    {languageObject.send}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
