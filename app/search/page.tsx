"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import PropertyCard, { ItemProps } from "../components/PropertyCard";

const fetchItems = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const sorted = search ? search.get("sort") : null;
  console.log("searchQuery", searchQuery, "sorted", sorted);

  const encodedSearchQuery = encodeURI(searchQuery || "");
  const encodedSorted = encodeURI(sorted || "");

  const { data, isLoading, error } = useSWR(
    `/api/search?q=${encodedSearchQuery}&sort=${encodedSorted}`,
    fetchItems
  );

  if (!data?.items) {
    return null;
  }

  // console.log("Here is the data", data);

  return (
    // <div className="flex flex-col items-center  min-h-screen py-2">
    //   <h2 className="text-2xl font-bold">Search Results:</h2>

    //   <div className="flex flex-col items-center">
    //     <p className="text-green-600">{data.message}</p>
    //     <p className="text-green-600">Found {data.items.length} items</p>

    <div className="lg:col-span-3">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-center">Search Results:</h2>
        <p className="text-green-600 text-center">{data.message}</p>
        <p className="text-green-600 text-center">
          Found {data.items.length} items
        </p>
      </div>
      <div className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {data.items.map((item: ItemProps) => (
          <PropertyCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
