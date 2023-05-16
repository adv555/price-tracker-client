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
