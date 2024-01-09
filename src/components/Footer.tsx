import React from "react";
import Link from "next/link";
import {
  FaLine,
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    //FIXME:把字體修改好
    <div className=" flex w-full flex-col items-center justify-around bg-gray-50 p-16 md:flex-row md:items-end">
      <div className="p-5">
        <ul>
          <li className={` jf-datk6 pb-4 text-3xl text-[#2e7a2c]`}>
            蘊 慢 築<span className="text-gray-500 "> 民 宿</span>
          </li>
          <li className="flex pb-4 text-2xl font-bold text-gray-500">
            地址：
            <a
              className="duration-100 hover:scale-90 hover:text-slate-400"
              href="https://maps.app.goo.gl/2LHAjdhp8XQXTwZC8"
            >
              苗栗縣公館鄉福星村262-5號
            </a>
          </li>
          <li className="flex pb-4 text-2xl font-bold text-gray-500 ">
            連絡電話：{" "}
            <a
              className="duration-100 hover:scale-95 hover:text-slate-400"
              href="tel:+886-910-517-860"
            >
              {" "}
              0910-517-860
            </a>
          </li>
        </ul>
        <div className="flex gap-6 pb-5">
          {/* Icons */}
          <Link
            className="p-1 text-2xl hover:text-green-500"
            href="https://line.me/ti/p/HDv0iSYPzX"
            title="蘊慢築-LINE"
          >
            <FaLine />
          </Link>
          <Link
            className="p-1 text-2xl hover:text-blue-500"
            href="https://www.facebook.com/yun.man.zhu.homestay"
            title="蘊慢築-Facebook"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            className="p-1 text-2xl hover:text-rose-500"
            href="https://www.instagram.com/yunmanchu.homestay/"
            title="蘊慢築-IG"
          >
            <FaInstagram />
          </Link>
          <Link
            className="p-1 text-2xl hover:text-blue-500"
            href="tel:+886-910-517-860"
            title="按下以撥打蘊慢築電話"
          >
            <FaPhoneAlt />
          </Link>
          <Link
            className="p-1 text-2xl hover:text-red-600"
            href="https://goo.gl/maps/z3zGaxUbRZu6BEfy5"
            title="蘊慢築-Google地圖"
          >
            <FaMapMarkerAlt />
          </Link>
        </div>
      </div>
      <div className="pd-5" />
      <div className="mb-5 flex flex-col justify-center bg-gray-50 p-5 text-center">
        <h1 className=" font-semibold text-gray-800">
          © 2021-2024 All rights reserved | 🛖 Built by{" "}
          <span className="font-semibold duration-100 hover:text-green-600">
            Yunmanchu Homestay{" "}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
