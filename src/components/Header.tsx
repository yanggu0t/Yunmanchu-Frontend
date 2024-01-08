"use client";

import React, { useEffect, useState } from "react";
import { useAnnouncementStore } from "@/store/AnnouncementStore";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Banner from "@/components/Banner";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  // 決定 banner 是否顯示
  const handleOnClose = () => setBannerVisible(false);
  // fetch announcement data，並決定 banner 是否顯示，預設為顯示
  const [bannerVisible, setBannerVisible] = useState<boolean>(true);

  const setAnnouncements = useAnnouncementStore(
    (state) => state.setAnnouncements,
  );
  const announcements = useAnnouncementStore((state) => state.announcements);
  const isLoading = useAnnouncementStore((state) => state.isLoading);

  useEffect(() => {
    setAnnouncements();
  }, [setAnnouncements]);

  // announcements.visible 只負責初始化，後續 bannerVisible 會由 Banner 組件的 OnClose 決定是否顯示
  // 若 bannerVisible 為 false 不顯示，反之
  useEffect(() => {
    if (!bannerVisible) {
      setBannerVisible(false);
    } else {
      setBannerVisible(true);
    }
  }, [bannerVisible]);

  const handleNav = () => {
    setNav(!nav);
  };

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

  return (
    <header id="top" className="">
      <div
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 z-10 w-full duration-300 ease-in"
      >
        <div>
          <Banner
            isLoading={isLoading}
            OnClose={handleOnClose}
            visible={bannerVisible}
            announcements={announcements}
          />
        </div>
        {/* 引入 Banner 由 visible 和 OnClose 決定組件是否能被看見 */}

        <div className="m-auto flex max-w-[1280px] items-center justify-between p-4 text-white">
          <a href="/#top">
            <h1
              style={{ color: `${textColor}` }}
              className={`jf-datk6 text-4xl font-bold duration-300 hover:scale-110`}
              title="蘊慢築首頁"
            >
              蘊慢築
            </h1>
          </a>
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <a href="/#about" title="關於我們">
                關於我們
              </a>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <a href="/accommodation-info" title="住宿資訊">
                住宿資訊
              </a>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <a href="/rooms" title="房型介紹">
                房型介紹
              </a>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <a href="/traffic-info" title="交通資訊">
                交通資訊
              </a>
            </li>
            <li className="p-4 text-xl font-semibold duration-300 hover:scale-110">
              <a href="/booking-info" title="訂房須知">
                訂房須知
              </a>
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
                onClick={handleNav}
                className="p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                <a href="/#about" title="關於我們">
                  關於我們
                </a>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                <a href="/accommodation-info" title="住宿資訊">
                  住宿資訊
                </a>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                <a href="/rooms" title="房型介紹">
                  房型介紹
                </a>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                <a href="/traffic-info" title="交通資訊">
                  交通資訊
                </a>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-3xl font-semibold duration-300 hover:text-gray-400"
              >
                <a href="/booking-info" title="訂房須知">
                  訂房須知
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
