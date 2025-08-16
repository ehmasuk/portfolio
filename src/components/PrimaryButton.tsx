"use client";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import React from "react";

type Props = {
  children: React.ReactNode;
}
export function PrimaryButton({children}:Props) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient containerClassName="rounded" as="button" className="dark:bg-[#222225] text-xs bg-white text-black dark:text-white flex items-center space-x-2">
        <span>{children}</span>
      </HoverBorderGradient>
    </div>
  );
}
