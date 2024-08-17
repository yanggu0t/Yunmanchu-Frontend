"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnnouncementStore } from "@/store/AnnouncementStore";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Banner from "@/components/Banner";
import { useRouter } from "next/navigation";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  // 決定 banner 是否顯示
  const handleOnClose = () => setBannerVisible(false);
  // fetch announcement data，並決定 banner 是否顯示，預設為顯示
  const [bannerVisible, setBannerVisible] = useState<boolean>(false);

  const setAnnouncements = useAnnouncementStore(
    (state) => state.setAnnouncements,
  );
  const announcements = useAnnouncementStore((state) => state.announcements);
  const isLoading = useAnnouncementStore((state) => state.isLoading);
  const animateDelay = useAnnouncementStore((state) => state.animateDelay);

  useEffect(() => {
    setAnnouncements();
  }, [setAnnouncements]);

  useLayoutEffect(() => {
    if (announcements[0]?.visible) {
      setBannerVisible(true);
    }
  }, [announcements]);

  //網頁下滑後改變 nav 的背景顏色及字體顏色
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fcfcfc");
        setTextColor("#627c61");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const router = useRouter();

  return (
    <motion.header id="top">
      <div
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 z-10 w-full duration-300 ease-in"
      >
        <div>
          {/* 引入 Banner 由 visible 和 OnClose 決定組件是否能被看見 */}
          <Banner
            isLoading={isLoading}
            OnClose={handleOnClose}
            visible={bannerVisible}
            announcements={announcements}
          />
        </div>

        <div className="m-auto flex max-w-[1280px] items-center justify-between p-4 text-white">
          <div onClick={() => router.push("/#top")} className="cursor-pointer">
            <h1
              style={{ color: `${textColor}` }}
              className={`jf-datk6 text-4xl font-bold duration-300 hover:scale-110`}
              title="蘊慢築首頁"
            >
              蘊慢築
            </h1>
          </div>
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <div
                onClick={() => router.push("/#about")}
                className="cursor-pointer"
                title="關於我們"
              >
                關於我們
              </div>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <div
                onClick={() => router.push("/accommodation-info")}
                className="cursor-pointer"
                title="住宿資訊"
              >
                住宿資訊
              </div>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <div
                onClick={() => router.push("/rooms")}
                className="cursor-pointer"
                title="房型介紹"
              >
                房型介紹
              </div>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <div
                onClick={() => router.push("/traffic-info")}
                className="cursor-pointer"
                title="交通資訊"
              >
                交通資訊
              </div>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <div
                onClick={() => router.push("/booking-info")}
                className="cursor-pointer"
                title="訂房須知"
              >
                訂房須知
              </div>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className="z-10 block sm:hidden">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
                : "absolute bottom-0 left-[-100%] right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
            }
          >
            <ul>
              <li
                onClick={() => {
                  handleNav();
                  router.push("/#about");
                }}
                className="cursor-pointer p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                關於我們
              </li>
              <li
                onClick={() => {
                  handleNav();
                  router.push("/accommodation-info");
                }}
                className="cursor-pointer p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                住宿資訊
              </li>
              <li
                onClick={() => {
                  handleNav();
                  router.push("/rooms");
                }}
                className="cursor-pointer p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                房型介紹
              </li>
              <li
                onClick={() => {
                  handleNav();
                  router.push("/traffic-info");
                }}
                className="cursor-pointer p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                交通資訊
              </li>
              <li
                onClick={() => {
                  handleNav();
                  router.push("/booking-info");
                }}
                className="cursor-pointer p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                訂房須知
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
