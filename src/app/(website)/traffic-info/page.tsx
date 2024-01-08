import React from "react";
import Hero from "@/components/Hero";
import Traffic from "@/components/Traffic-info";

export const metadata = {
  title: "交通指引",
};

const traffic = () => {
  return (
    <div>
      <Hero
        heading="交通指引"
        message_1="歡迎來到蘊慢築民宿"
        message_2="目前蘊慢築民宿人力不足"
        message_3="故不提供接送服務"
        message_4="地址:苗栗縣公館鄉福星村8鄰262-5號"
      />
      <Traffic />
    </div>
  );
};

export default traffic;
