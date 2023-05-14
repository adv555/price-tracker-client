import React from "react";

type LeftSectionProps = {
  children: React.ReactNode;
};

const LeftSection = ({ children }: LeftSectionProps) => {
  return (
    <div className="text-center min-h-[calc(100vh-9rem)] border-2 border-indigo-600 w-full md:w-1/4">
      Left Sidebar
    </div>
  );
};

export default LeftSection;
