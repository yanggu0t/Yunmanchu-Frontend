import React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const BookingButton = ({ section }: { section: string }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger
          className={`${
            section === "HeroSection"
              ? "my-1 ml-2 scale-105 cursor-pointer rounded-lg border-4 border-double bg-gradient-to-tr from-blue-900/40 to-emerald-500/40 px-12 py-2 font-semibold duration-200 hover:scale-110 md:px-16"
              : "flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-sm hover:bg-emerald-50"
          }`}
        >
          <p>立即訂房！</p>
        </DialogTrigger>
        <DialogContent className="max-w-[360px] rounded-lg sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>你好，請從下方選擇一個訂房管道</DialogTitle>
            <DialogDescription className="pt-1 text-base font-semibold text-slate-500">
              蘊慢築民宿推薦直接與我們聯繫，可以選擇{" "}
              <Link
                className="border-b-2 border-emerald-600 text-emerald-600 "
                href="https://line.me/ti/p/HDv0iSYPzX"
              >
                LINE
              </Link>{" "}
              或{" "}
              <Link
                className="border-b-2 border-sky-600 text-sky-600"
                href="tel:+886-910-517-860"
              >
                電洽民宿
              </Link>
              ，亦或是用{" "}
              <Link
                className="border-b-2 border-blue-600 text-blue-600"
                href="https://www.facebook.com/yun.man.zhu.homestay"
              >
                Facebook
              </Link>{" "}
              或{" "}
              <Link
                className="border-b-2 border-pink-600 text-pink-600"
                href="https://www.instagram.com/yunmanchu.homestay"
              >
                Instagram
              </Link>{" "}
              聯絡我們，也可以透過訂房網站來訂房，請點選以下連結前往訂房網站。
            </DialogDescription>
            <DialogDescription className="flex items-center justify-center">
              <Link
                className="mx-1 my-1 rounded-lg border-2 border-blue-700 p-1 text-blue-700 duration-150 hover:border-blue-400 hover:text-blue-500"
                title="蘊慢築民宿-Booking"
                href="https://www.booking.com/hotel/tw/yun-man-zhu.zh-tw.html"
              >
                Booking
              </Link>
              <Link
                className="mx-1 my-1 rounded-lg border-2 border-red-500 p-1 text-red-500 duration-150 hover:border-red-400 hover:text-red-400"
                title="蘊慢築民宿-Agoda"
                href="https://www.agoda.com/zh-tw/yun-man-zhu-homestay/hotel/all/miaoli-tw.html"
              >
                Agoda
              </Link>
              <Link
                className="mx-1 my-1 rounded-lg border-2 border-yellow-500 p-1 text-yellow-500 duration-150 hover:border-yellow-400 hover:text-yellow-400"
                title="蘊慢築民宿-Traiwan"
                href="https://site.traiwan.com/yunmanchu/booking.html"
              >
                TRAIWAN
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
