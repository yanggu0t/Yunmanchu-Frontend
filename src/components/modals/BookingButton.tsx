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
              <ul className="mt-2 space-y-1">
                <p> 蘊慢築民宿推薦直接與我們聯繫，您可以選擇以下方式：</p>
                <li>
                  <Link
                    className="border-b-2 border-green-500 text-green-500"
                    href="https://line.me/ti/p/HDv0iSYPzX"
                  >
                    LINE
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 border-blue-600 text-blue-600"
                    href="https://www.facebook.com/yun.man.zhu.homestay"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 border-blue-400 text-blue-400"
                    title="蘊慢築民宿-Booking"
                    href="https://www.booking.com/hotel/tw/yun-man-zhu.zh-tw.html"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 border-yellow-500 text-yellow-500"
                    href="tel:+886-910-517-860"
                  >
                    電洽民宿
                  </Link>
                </li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
