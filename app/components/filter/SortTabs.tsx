import { sortOptions } from "@/app/data/filters";
import classNames from "@/app/utils/classNames";
import { Transition, Listbox } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SortTabsProps = {
  setMobileFiltersOpen: (open: boolean) => void;
};

const SortTabs = ({ setMobileFiltersOpen }: SortTabsProps) => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0].value);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSortChange = (value: string) => {
    setSelectedOption(value);
    if (value === "all") {
      router.push(`${pathname}`);
      return;
    }

    const queryString = createQueryString("sort", value);
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <div className="flex items-center">
      <Listbox
        as="div"
        className="relative inline-block text-left"
        value={selectedOption}
        onChange={(value) => handleSortChange(value)}
      >
        <Listbox.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Sort
          <ChevronDownIcon
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            {sortOptions.map((option) => (
              <Listbox.Option
                key={option.name}
                value={option.value}
                className={classNames(
                  option.value === selectedOption
                    ? "font-medium text-gray-900"
                    : "text-gray-500",

                  "block bg-gray-100 px-4 py-2 text-sm hover:bg-lightBlue hover:text-gray-900"
                )}
              >
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
      <button
        type="button"
        className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
      >
        <span className="sr-only">View grid</span>
        <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="sr-only">Filters</span>
        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default SortTabs;
