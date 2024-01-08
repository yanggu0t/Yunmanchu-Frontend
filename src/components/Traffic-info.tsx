import React from "react";
import { FaCar, FaBus, FaTrain } from "react-icons/fa";

const Traffic = () => {
  return (
    <div className=" bg-white py-10">
      <section className="mx-auto max-w-[1240px] ">
        <div className="mx-5 flex flex-col justify-center lg:mx-0">
          <h1 className="font-title py-5 md:py-10">交通指引 </h1>
          <h1 className="font-title border-b-2 pb-5">
            請依照您的交通工具閱讀以下說明：
          </h1>
          <span className="icon-with-text font-title pr-4 pt-5">
            <FaCar className="rounded-border" /> 開車：
          </span>
          <div className="border-b-2 pb-5 pt-5">
            <p className="font-content pb-3 leading-relaxed">
              北上：行經國道一號，在銅鑼交流道下交流道，朝新興路/119縣道前進，左轉進入客屬大橋/沿山公路/沿山道/119甲縣道，向右轉進入舊後汶公路/館忠路/台6線，前方100公尺看到
              <span className="text-sign">檳榔攤</span>
              向左轉，於下一個路口向左轉即可看到
              <span className="text-home">蘊慢築</span>招牌
            </p>
            <p className="font-content leading-relaxed">
              南下：行經國道一號，在苗栗交流道下交流道{" ("}在台6線出口{") "}
              ，左轉進入後汶公路/舊後汶公路/台6線，直走約2.5公里後，向左轉進入大同路/舊後汶公路/台6線，再直行2.5公里，看到
              <span className="text-sign">檳榔攤</span>
              向左轉，於下一個路口向左轉即可看到
              <span className="text-home">蘊慢築</span>招牌
            </p>
          </div>
          <span className="icon-with-text font-title pr-4 pt-5">
            <FaBus className="rounded-border" /> 公車：
          </span>
          <div className="border-b-2 pb-5 pt-5">
            <p className="font-content leading-relaxed">
              請搭乘編號方向往大湖或獅潭方向公車，於苗栗公館
              <span className="text-station">福全</span>或
              <span className="text-station">苗栗特色館{"(較遠)"}</span>站下車
            </p>
            <p className="font-content pt-3 leading-relaxed">
              在<span className=" text-station">福全站</span>
              下車的話，往北方走會看到
              <span className="text-sign">劉家手工包子饅頭</span>
              後向右轉進去路口，再往前走向第一個路口向左轉即可看到
              <span className="text-home">蘊慢築</span>招牌
            </p>
            <p className="font-content pt-3 leading-relaxed">
              在<span className=" text-station">苗栗特色館站</span>
              下車的話，往南方走七百公尺會看到
              <span className="text-sign">好口味檳榔攤</span>
              後向左轉進去路口，再往前走向第一個路口向左轉即可看到
              <span className="text-home">蘊慢築</span>招牌
            </p>
          </div>
          <span className="icon-with-text font-title pr-4 pt-5">
            <FaTrain className="rounded-border" /> 火車及高鐵：
          </span>
          <div className="border-b-2 py-5">
            <p className="font-content leading-relaxed">
              於<span className="text-station">苗栗火車站</span>
              下車後，出站後旁邊可以搭乘公車，依照前段公車搭乘方式即可。
            </p>
            <p className="font-content leading-relaxed">
              於<span className="text-station">銅鑼火車站</span>
              下車後，出站後外面有計程車隊，直接搭乘至
              <span className="text-home">蘊慢築</span>
              民宿，車資約兩百以上三百以內，耗時約十五分鐘
            </p>
            <p className="font-content leading-relaxed">
              於<span className="text-station">苗栗高鐵站</span>下車後，可搭乘
              <span className="text-bus"> 101B </span>公車，搭乘至
              <span className="text-station">苗栗特色館站</span>
              再依照上面公車指引步行到
              <span className="text-home">蘊慢築</span>民宿
            </p>
          </div>
          <iframe
            className="h-[400px] rounded-lg pb-5 pt-5 md:h-[700px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464078.67587067245!2d120.80651514104193!3d24.671388900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469abecd6c06c35%3A0xf499e074bce0b796!2z6Je05oWi56-J5rCR5a6_!5e0!3m2!1szh-TW!2stw!4v1670461999535!5m2!1szh-TW!2stw"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Traffic;
