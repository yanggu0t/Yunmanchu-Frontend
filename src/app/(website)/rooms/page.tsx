import React from "react";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Image_Haijinsha from "@/components/Image_Tujiaojue";
import Image_Bitongshu from "@/components/Image_Haijinsha";
import Image_Tujiaojue from "@/components/Image_Bitongshu";
import Image_Public from "@/components/Image_Public";

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
      <Rooms
        slides_1={Image_Bitongshu}
        slides_2={Image_Haijinsha}
        slides_3={Image_Tujiaojue}
        slides_4={Image_Public}
      />
    </div>
  );
};

export default rooms;
