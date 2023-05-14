"use client";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import FlyoutMenu from "./FlyoutMenu";
import CartButton from "./buttons/cartButton";
import MenuButton from "./buttons/MenuButton";
import ProfileButtons from "./buttons/ProfileButtons";
import Search from "./Search";
import CurrencyButton from "./buttons/CurrencyButton";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu  */}

      <MobileMenu open={open} setOpen={setOpen} classNames={classNames} />

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Menu Burger Button */}
              <MenuButton setOpen={setOpen} />

              {/* Logo */}
              <Logo />

              {/* Flyout menus */}
              <FlyoutMenu
                open={open}
                setOpen={setOpen}
                classNames={classNames}
              />

              <div className="ml-auto flex items-center">
                {/* Profile Tab */}
                <ProfileButtons />

                {/* Currency Tab */}
                <CurrencyButton />

                {/* Search */}
                <Search />

                {/* Cart */}
                <CartButton />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
