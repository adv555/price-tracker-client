"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import FlyoutMenu from "./FlyoutMenu";
import CartButton from "./buttons/CartButton";
import MenuButton from "./buttons/MenuButton";
import ProfileButtons from "./buttons/ProfileButtons";
import Search from "./Search";
import CurrencyButton from "./buttons/CurrencyButton";
import SearchBar from "./SearchBar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu  */}

      <MobileMenu open={open} setOpen={setOpen} classNames={classNames} />

      <header className="relative bg-lightBlue">
        <div className="flex items-center justify-center  p-3 text-sm font-medium text-white sm:px-6 lg:px-8 bg-darkBlue">
          {/* Get free delivery on orders over $100 */}
          <Logo />
        </div>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
        >
          <div className="border-b border-gray-200">
            <div className="flex items-center">
              {/* Menu Burger Button */}
              <MenuButton setOpen={setOpen} />

              {/* Logo */}
              {/* <Logo /> */}

              {/* Flyout menus */}
              <FlyoutMenu
                open={open}
                setOpen={setOpen}
                classNames={classNames}
              />

              {/* Search */}
              <SearchBar />

              <div className="ml-auto flex items-center">
                {/* Currency Tab */}
                <CurrencyButton />

                {/* Cart */}
                <CartButton />

                {/* Profile Tab */}
                <ProfileButtons />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
