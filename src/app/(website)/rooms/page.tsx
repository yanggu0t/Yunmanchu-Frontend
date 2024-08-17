import React from "react";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";

export const metadata = {
  title: "房型介紹",
};

const rooms = () => {
  return (
    <div>
      <Hero
        heading="房型介紹"
        message_1="我們房間以種植的原生蕨類命名。"
        message_2="筆筒樹—喜歡潮濕且向陽的開闊環境。"
        message_3="海金沙—生性強健耐旱，適應力強。"
        message_4="兔腳蕨—有毛絨絨的走莖，像可愛的兔子腳。"
      />
      <Rooms />
    </div>
  );
};

export default rooms;
