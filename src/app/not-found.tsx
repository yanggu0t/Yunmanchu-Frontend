import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <>
      <html className="h-full">
        <head>
          <title>404 NotFound | 蘊慢築民宿</title>
        </head>
        <body className="h-full">
          <main className="relative isolate min-h-full">
            <Image
              src="/background-large.webp"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
              width={1920}
              height={1080}
            />
            <div className="flex items-center justify-center h-screen">
              <div className="mx-auto text-center px-6 py-32 sm:px-16 sm:py-40 bg-black/50 rounded-lg hover:scale-[1.02] duration-150 border-2 border-slate-300">
                <p className="text-5xl font-semibold leading-1 text-green-200">
                  404
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  無此頁面
                </h1>
                <p className="mt-4 text-lg font-semibold text-white/90 sm:mt-6">
                  抱歉，我們找不到您要查找的頁面。
                </p>
                <div className="mt-10">
                  <a
                    href="/"
                    className="text-base font-semibold leading-7 text-white border-2 p-2 rounded-lg hover:bg-white duration-150 hover:text-black"
                  >
                    <span aria-hidden="true">&larr;</span> 返回首頁
                  </a>
                </div>
                <div className="mt-10 text-lg font-semibold text-green-50 hover:text-green-100">
                  Copyright © 蘊慢築民宿 Yunmanchu.Homestay
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
