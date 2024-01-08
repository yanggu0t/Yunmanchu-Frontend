import React from "react";
import Hero from "@/components/Hero";
import Bookinginfo from "@/components/Booking-info";

export const metadata = {
  title: "訂房須知",
};

const bookinginfo = () => {
  return (
    <div>
      <Hero
        heading="訂房須知"
        message_1="請詳閱下方說明及訂房須知"
        message_2="閱讀完無問題方可點擊下方按鈕"
        message_3="以選擇訂房網站"
        message_4="或選擇下方圖標洽詢民宿訂房"
      />
      <Bookinginfo />
    </div>
  );
};

export default bookinginfo;
