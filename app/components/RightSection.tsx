import React from "react";

type RightSectionProps = {
  children: React.ReactNode;
};

const RightSection = ({ children }: RightSectionProps) => {
  return (
    <div className="w-full min-h-[calc(100vh-9rem)] text-center md:w-3/4 border-2 border-indigo-600">
      Right block
    </div>
  );
};

export default RightSection;
