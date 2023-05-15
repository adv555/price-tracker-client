import React from "react";

type LeftSectionProps = {
  children: React.ReactNode;
};

const LeftSection = ({ children }: LeftSectionProps) => {
  return (
    <div className="hidden md:block text-center h-full border-2 border-indigo-600 w-full md:w-1/4">
      {children}
    </div>
  );
};

export default LeftSection;
