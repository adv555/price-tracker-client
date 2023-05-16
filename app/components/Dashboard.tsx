"use client";

import { useState } from "react";
import { MobileFilterDialog } from "../components/filter/MobileFilterDialog";
import Filters from "./filter/Filters";
import SortTabs from "./filter/SortTabs";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilterDialog
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 py-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <SortTabs setMobileFiltersOpen={setMobileFiltersOpen} />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <Filters />

              {/* Product grid */}
              {children}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
