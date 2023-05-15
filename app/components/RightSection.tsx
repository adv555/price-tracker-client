import React from "react";

type RightSectionProps = {
  children: React.ReactNode;
};

const RightSection = ({ children }: RightSectionProps) => {
  return (
    <div className="w-full m-auto md:w-3/4 border-2 border-indigo-600 p-5">
      {children}
    </div>
  );
};

export default RightSection;
