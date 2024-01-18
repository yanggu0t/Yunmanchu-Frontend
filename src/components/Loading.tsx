"use client";

import { useAnnouncementStore } from "@/store/AnnouncementStore";
import { backOut, circOut, easeOut, motion } from "framer-motion";

const CutoutTextLoader = ({
  height,
  background,
  imgUrl,
}: {
  height: string;
  background: string;
  imgUrl: string;
}) => {
  return (
    <div
      className="relative z-0"
      style={{
        height,
      }}
    >
      <div
        className="custom-bg-position absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 z-10 animate-pulse"
      />
      <span
        className="custom-bg-position pointer-events-none absolute inset-0 z-20 bg-clip-text text-center font-black text-transparent"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        載入中請稍後...
      </span>
    </div>
  );
};

const Loading = () => {
  const isLoading = useAnnouncementStore((state) => state.isLoading);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`absolute bottom-0 left-0 right-0 top-0 ${
        isLoading ? "z-[3]" : "z-0"
      }`}
    >
      <CutoutTextLoader
        height="100vh"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="/preview.jpeg"
      />
    </motion.div>
  );
};

export default Loading;
