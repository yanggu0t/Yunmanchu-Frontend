"use client";

import { useAnnouncementStore } from "@/store/AnnouncementStore";
import React, { ReactNode } from "react";

const ScrollbarController = ({ children }: { children: ReactNode }) => {
  const isLoading = useAnnouncementStore((state) => state.isLoading);
  return (
    <body className={`${isLoading ? "overflow-hidden" : "overflow-auto"}`}>
      {children}
    </body>
  );
};

export default ScrollbarController;
