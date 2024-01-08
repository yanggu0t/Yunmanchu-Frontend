import React from "react";
import Hero from "@/components/Hero";
import Accommodation from "@/components/Accommodation-info";
export const metadata = {
  title: "住宿資訊",
};

const Facilities = () => {
  return (
    <div>
      <Hero
        heading="住宿資訊"
        message_1="我們提供了一系列便利設施。"
        message_2="除了綠意盎然的花園，讓您能夠放鬆身心。"
        message_3="還有洗衣服務，確保您住得舒適且無憂。"
        message_4="還有提供無障礙空間，歡迎年長者前來住宿。"
      />
      <Accommodation />
    </div>
  );
};

export default Facilities;
