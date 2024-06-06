import React from "react";

const Footer = () => {
  return (
    <div className="h-full overflow-hidden ">
      <div className="h-2/3 px-40 py-16">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold text-teal-600">
            Our Mission & Vision
          </h2>
          <p className="mt-6 text-md w-2/3">
            <span className="font-semibold">Mission : </span>Using AI to improve
            healthcare by offering accurate diagnostics and ensuring everyone
            gets good medical care, especially in remote areas.
          </p>
          <p className="mt-6 text-md w-2/3">
            <span className="font-semibold">Vision : </span> To create a future
            with Universally accessible, top-quality AI-driven healthcare,
            enhancing overall health and system efficiency.
          </p>
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
