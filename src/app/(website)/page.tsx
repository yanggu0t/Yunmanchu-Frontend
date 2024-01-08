import React from "react";
import Hero from "@/components/Hero";
import Aboutus from "@/components/Aboutus";

export const metadata = {
  title: "首頁",
};

const Home = () => {
  return (
    <div>
      <Hero
        heading="歡迎來到蘊慢築民宿"
        message_1="請放慢您的步調，"
        message_2="走進花草與綠植圍繞的閒適空間，"
        message_3="沈浸在綠意佐茶的氛圍中，"
        message_4="與家人朋友一同享受蘊慢築的美好時光。"
      />
      <Aboutus />
    </div>
  );
};

export default Home;
