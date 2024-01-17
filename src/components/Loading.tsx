"use client";

import { useAnnouncementStore } from "@/store/AnnouncementStore";

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
      className="relative z-10"
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
    <div className={`${isLoading ? "" : "hidden"}`}>
      <CutoutTextLoader
        height="100vh"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="/preview.jpeg"
      />
    </div>
  );
};

export default Loading;
