"use client";

import { TEInput, TERipple } from "tw-elements-react";
import { Exo_2 } from "next/font/google";
import Image from "next/image";

const exo_2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
});

const LeftSide = () => {
  return (
    <div className="g-0 md:flex lg:flex-wrap">
      {/* <!-- Left column container--> */}
      <div className="px-4 md:px-0 lg:w-6/12">
        <div className="md:mx-6 md:p-12">
          {/* <!--Logo--> */}
          <div className="text-center">
            <Image
              className="mx-auto"
              src="/CP logo.png"
              width={192}
              height={200}
              alt="logo"
            />
            <h4 className={"mb-12 mt-1 pb-1 text-2xl " + exo_2.className}>
              Concept Pera
            </h4>
          </div>
          <p className="mb-4">Please register an account</p>
          {/* <!--Email input--> */}
          <TEInput
            id=""
            type="email"
            label="Email"
            className="mb-4 text-white text-sm"
          ></TEInput>

          {/* <!--Password input--> */}
          <TEInput
            type="password"
            label="Password"
            className="mb-4 text-white text-sm"
          ></TEInput>

          {/* <!--Submit button--> */}
          <div className="mb-12 pb-1 pt-1 text-center flex justify-center">
            <TERipple rippleColor="light">
              <button
                type="button"
                className="inline-block rounded border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              >
                Continue
              </button>
            </TERipple>
          </div>

          {/* <!--Register button--> */}
          <div className="flex items-center justify-end pb-6">
            <p className="mb-0 mr-2">Already have an account?</p>

            <button type="button" className="underline">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Right column container with background and description--> */}
      <div
        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
        style={{
          background: "linear-gradient(to right, #192233 , #eead0e)",
        }}
      >
        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
          <h4 className="mb-6 text-xl font-semibold">
            We are more than just a company
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
