import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

type MenuProps = {
  setOpen: (open: boolean) => void;
};

const MenuButton = ({ setOpen }: MenuProps) => {
  return (
    <button
      type="button"
      className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
      onClick={() => setOpen(true)}
    >
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default MenuButton;
