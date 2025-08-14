import React, { useState } from "react";
import AuthLayout from "@/layout/AuthLayout";
import AddGuide from "./AddGuide";

export default function index() {
  const [isGuidePopupOpen, setIsGuidePopupOpen] = useState(false);
  return (
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold">Property Investing Guides</h1>
        <button
         onClick={() => {
             setIsGuidePopupOpen(true);
         }}
         className="w-fit button-bg px-4 xl:px-8 py-2 h-[44px] rounded-md tracking-[-0.06em] text-sm font-medium cursor-pointer"
        >
         Add New Guide
        </button>
      </div>
      <div>index</div>
      <AddGuide
        isOpen={isGuidePopupOpen}
        onClose={() => {
          setIsGuidePopupOpen(false);
        }}
      />
    </AuthLayout>
  );
}