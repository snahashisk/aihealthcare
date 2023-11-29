import React from "react";

const Footer = () => {
  return (
    <div className="h-full overflow-hidden ">
      <div className="h-2/3 px-40 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-teal-600">
            Our Mission & Vision
          </h2>
          <p className="mt-6 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, perferendis! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sequi, quis.
          </p>
        </div>
        <div className="mt-8 flex justify-around">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-teal-700">
              Our Mission
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-teal-700">Our Vision</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
              <li>Lorem ipsum dolor sit amet consectetur aut amet</li>
            </ul>
          </div>
        </div>
      </div>
      <footer class="bg-teal-900 mt-20 h-1/4 w-full">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <h3 class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-yellow-400">AI</span> HEALTHCARE
            </h3>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 sm:mx-auto border-amber-600 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" class="hover:underline">
              AI HEALTHCARE
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
