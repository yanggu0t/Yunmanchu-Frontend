"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  BsLine,
  BsFacebook,
  BsInstagram,
  BsTelephoneOutboundFill,
} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Header from "@/components/Header";
import BookingButton from "@/components/modals/BookingButton";

const Hero = ({
  heading,
  message_1,
  message_2,
  message_3,
  message_4,
}: {
  heading: string;
  message_1: string;
  message_2: string;
  message_3: string;
  message_4: string;
}) => {
  return (
    <>
      <Header />
      <motion.div className="custom-img z-10 flex h-screen items-center justify-center bg-cover bg-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] bg-black/50" />
        <div className="min-h-[650px]:mt-[-7rem] z-[2] p-5 text-white md:mt-[3rem]">
          <div className="hidden">
            蘊慢築，蘊慢築茶花藝主題民宿 Yun Man Chu Homestay
            位於苗栗公館，在這裡可以享受到綠植、花藝、品茗等生活美學，每位客人都可以在民宿主人的陪伴下品茶聊天，周遭種植豐富的蕨類、多肉植物、積水鳳梨等各種植物，並可以欣賞民宿內許多老件及古玩，歡迎您來體驗我們的民宿。
          </div>
          <h2 className="font-title pd-title">{heading}</h2>
          <p className="font-content pd-content">{message_1}</p>
          <p className="font-content pd-content">{message_2}</p>
          <p className="font-content pd-content">{message_3}</p>
          <p className="font-content pd-content">{message_4}</p>
          <div className="grid w-full items-center justify-between text-center">
            {/* <div className="font-semibold cursor-pointer bg-gradient-to-tr from-blue-900/40 to-emerald-500/40 scale-105 hover:scale-110 duration-200 rounded-lg border-double border-4 px-12 md:px-16 py-2 ml-2 my-1"> */}
            <BookingButton section="HeroSection" />
            {/* </div> */}
          </div>
          <div className="flex">
            <Link
              className="p-2 text-2xl hover:text-green-500 md:p-3 md:text-3xl 2xl:p-5 2xl:text-4xl"
              href="https://line.me/ti/p/HDv0iSYPzX"
              title="蘊慢築-LINE"
            >
              <BsLine />
            </Link>
            <Link
              className="p-2 text-2xl hover:text-blue-500 md:p-3 md:text-3xl 2xl:p-5 2xl:text-4xl"
              href="https://www.facebook.com/yun.man.zhu.homestay"
              title="蘊慢築-Facebook"
            >
              <BsFacebook />
            </Link>
            <Link
              className="p-2 text-2xl hover:text-rose-500 md:p-3 md:text-3xl 2xl:p-5 2xl:text-4xl"
              href="https://www.instagram.com/yunmanchu.homestay/"
              title="蘊慢築-IG"
            >
              <BsInstagram />
            </Link>
            <Link
              className="p-2 text-2xl hover:text-blue-500 md:p-3 md:text-3xl 2xl:p-5 2xl:text-4xl"
              href="tel:+886-910-517-860"
              title="按下以撥打蘊慢築電話"
            >
              <BsTelephoneOutboundFill />
            </Link>
            <Link
              className="p-2 text-2xl hover:text-red-500 md:p-3 md:text-3xl 2xl:p-5 2xl:text-4xl"
              href="https://goo.gl/maps/z3zGaxUbRZu6BEfy5"
              title="蘊慢築-Google地圖"
            >
              <FiMapPin />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
