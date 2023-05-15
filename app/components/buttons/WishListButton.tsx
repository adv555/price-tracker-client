"use client";
import React from "react";

const WishListButton = () => {
  const [isWishListed, setIsWishListed] = React.useState(false);
  const handleClick = () => {
    console.log("WishListButton clicked");
    setIsWishListed(!isWishListed);
  };
  console.log(isWishListed);
  return (
    <span className="absolute p-2 right-0 ">
      <span role="button" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={` stroke-activeBlue stroke-2 hover:fill-activeBlue  ${
            isWishListed ? "fill-activeBlue" : "fill-transparent"
          }`}
        >
          {/* fill-transparent stroke-activeBlue stroke-2 hover:fill-activeBlue */}
          <path d="M21.317,3.761a5.581,5.581,0,0,0-8.14,0L12,4.994l-1.177-1.23a5.581,5.581,0,0,0-8.14,0,6.211,6.211,0,0,0,0,8.5L3.862,13.5v0L12,22h0l8.138-8.5v0l1.177-1.23A6.211,6.211,0,0,0,21.317,3.761Z"></path>
        </svg>
      </span>
    </span>
  );
};

export default WishListButton;
