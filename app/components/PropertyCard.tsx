import Image from "next/image";
import React from "react";
import WishListButton from "./buttons/WishListButton";

export type ItemProps = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  description: string;
  title: string;
  priceInCents: number;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
};

const PropertyCard: React.FC<ItemProps> = ({
  imageUrl,
  imageAlt,
  description,
  title,
  formattedPrice,
  reviewCount,
  rating,
}) => {
  return (
    <div className="relative h-96  flex flex-col bg-white rounded-lg overflow-hidden shadow">
      <WishListButton />
      <div className="h-1/2">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="p-2 h-full flex flex-col justify-around">
        <h4 className="font-bold text-sm">{title}</h4>
        <div className="text-sm">{description}</div>
        <div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className={`h-5 w-5 fill-current ${
                  i < rating ? "text-teal-500" : "text-gray-400"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 14.535l-5.225 3.215 1.42-6.568L3.5 9.785l6.59-.57L12 3.5l2.91 5.715 6.59.57-4.695 4.397 1.42 6.568z" />
              </svg>
            ))}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            {reviewCount} reviews
          </div>
          <div className="flex items-center text-orange-500 font-bold">
            {formattedPrice} €
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

{
  /* <div className="flex flex-col justify-center items-center">
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {title}

          <span className="ml-2 text-sm text-gray-500">
            {reviewCount} reviews
          </span>
        </h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className={`h-4 w-4 fill-current ${
                  i < rating ? "text-teal-500" : "text-gray-400"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 14.535l-5.225 3.215 1.42-6.568L3.5 9.785l6.59-.57L12 3.5l2.91 5.715 6.59.57-4.695 4.397 1.42 6.568z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            {reviewCount} reviews
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              className={`h-4 w-4 fill-current ${
                i < rating ? "text-teal-500" : "text-gray-400"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 14.535l-5.225 3.215 1.42-6.568L3.5 9.785l6.59-.57L12 3.5l2.91 5.715 6.59.57-4.695 4.397 1.42 6.568z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500">
          {reviewCount} reviews
        </span>
      </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl className="sm:divide-y sm:divide-gray-200">
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-medium text-gray-500">Beds</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {beds}
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-medium text-gray-500">Baths</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {baths}
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-medium text-gray-500">Price</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {formattedPrice}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>; */
}
