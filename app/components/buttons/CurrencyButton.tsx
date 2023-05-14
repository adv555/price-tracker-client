import React from "react";

const CurrencyButton = () => {
  return (
    <div className="hidden lg:ml-8 lg:flex">
      <a
        href="#"
        className="flex items-center text-gray-700 hover:text-gray-800"
      >
        <img
          src="https://tailwindui.com/img/flags/flag-canada.svg"
          alt=""
          className="block h-auto w-5 flex-shrink-0"
        />
        <span className="ml-3 block text-sm font-medium">CAD</span>
        <span className="sr-only">, change currency</span>
      </a>
    </div>
  );
};

export default CurrencyButton;
