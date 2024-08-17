"use client";

import Image from "next/image";
import { useState } from "react";
import ShowMyImg_1 from "./ShowMyImg";
import ShowMyImg_2 from "./ShowMyImg";
import ShowMyImg_3 from "./ShowMyImg";
import ShowMyImg_4 from "./ShowMyImg";

// TODO:調整房間敘述內容 (簡短化)
{
  /* 房間描述部分內容 */
}
const Bitongshu = [
  {
    name: "加人 / 加床",
    description: "可以加兩人，並且加兩張單床，加床與加人的費用請聯繫後確認。",
  },
  {
    name: "浴室配備",
    description: "浴室配有冷暖風乾燥機，廁所及衛浴之間，設有乾濕分離。",
  },
  {
    name: "小冰箱",
    description: "房間內配有小冰箱，可以放心帶著需要冷藏的東西來入住。",
  },
  {
    name: "露臺",
    description:
      "露台有一套木頭桌椅，走到室外享受綠植環境，享受月光灑下的光暈。",
  },
  {
    name: "床 / 棉被",
    description:
      "我們採用的床和棉被，軟硬適中，多數來過的客人都給予好評，歡迎入住體驗。",
  },
  {
    name: "衛浴盥洗用品",
    description:
      "民宿提供的衛浴盥洗用品有：修容組和歐洲品牌有機產品 Anyah 的沐浴乳、洗髮乳。",
  },
];

const Haijinsha = [
  {
    name: "加人 / 加床",
    description: "可以加一人，並且加一張單床，加床與加人的費用請聯繫後確認。",
  },
  {
    name: "浴室配備",
    description: "浴室配有冷暖風乾燥機，廁所及衛浴之間，設有乾濕分離。",
  },
  {
    name: "小冰箱",
    description: "房間內配有小冰箱，可以放心帶著需要冷藏的東西來入住。",
  },
  {
    name: "沙發區",
    description:
      "海金沙房配有沙發區，可以跟家人們可以在沙發區一同看電視一邊聊天。",
  },
  {
    name: "床 / 棉被",
    description:
      "我們採用的床和棉被，軟硬適中，多數來過的客人都給予好評，歡迎入住體驗。",
  },
  {
    name: "衛浴盥洗用品",
    description:
      "民宿提供的衛浴盥洗用品有：修容組和歐洲品牌有機產品 Anyah 的沐浴乳、洗髮乳。",
  },
];

const Tujiaojue = [
  {
    name: "加人 / 加床",
    description: "可以加一人，並且加一張單床，加床與加人的費用請聯繫後確認。",
  },
  {
    name: "浴室配備",
    description: "浴室配有冷暖風乾燥機，廁所及衛浴之間，設有乾濕分離。",
  },
  {
    name: "小冰箱",
    description: "房間內配有小冰箱，可以放心帶著需要冷藏的東西來入住。",
  },
  {
    name: "沙發區",
    description:
      "兔腳蕨房配有沙發區，可以跟家人們可以在沙發區一同看電視一邊聊天。",
  },
  {
    name: "床 / 棉被",
    description:
      "我們採用的床和棉被，軟硬適中，多數來過的客人都給予好評，歡迎入住體驗。",
  },
  {
    name: "衛浴盥洗用品",
    description:
      "民宿提供的衛浴盥洗用品有：修容組和歐洲品牌有機產品 Anyah 的沐浴乳、洗髮乳。",
  },
];

const Public = [
  {
    name: "自行車",
    description:
      "民宿提供四台自行車，讓旅客可以透過騎乘自行車，看看我們鄉野的景色，暫時遠離城鎮的喧囂。",
  },
  {
    name: "花藝 / 茶藝 ",
    description:
      "在公共空間有花藝作品的布置，可以欣賞。在茶空間品茗，民宿提供了優良的環境，讓旅客體驗茶席禮儀。",
  },
  {
    name: "迷你吧檯",
    description:
      "我們的迷你吧檯，提供了微波爐、飲水機、烘碗機，可以給新手爸媽更多的方便。",
  },
  {
    name: "停車場",
    description:
      "民宿提供停車場，場內種有櫻花、桂花，讓住宿旅客下車，就能擁抱花叢。",
  },
  {
    name: "蔬食早餐",
    description:
      "民宿提供了蔬食早餐、客家水粄、紅棗饅頭、有機生菜水果沙拉、現打果汁，喜歡健康蔬果飲食的朋友，不妨來試試看",
  },
  {
    name: "寬敞空間大廳",
    description:
      "民宿內提供一個大客廳配備一台65吋電視，讓旅客可以待在這，與天雕的木頭、老件傢俱對話；享受閱覽各類書籍，度過悠然時光。",
  },
];

const Rooms = () => {
  const [current, setCurrent] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const createSliderState = (length: number) => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const handleOnClose = () => setShowImg(false);

    return {
      current,
      setCurrent,
      showImg,
      setShowImg,
      nextSlide,
      prevSlide,
      handleOnClose,
    };
  };

  const slider1 = createSliderState(Image_Bitongshu.length);
  const slider2 = createSliderState(Image_Haijinsha.length);
  const slider3 = createSliderState(Image_Tujiaojue.length);
  const slider4 = createSliderState(Image_Public.length);

  const renderImageGrid = (
    images: string[],
    slider: ReturnType<typeof createSliderState>,
    ShowMyImg: React.ComponentType<any>,
  ) => (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
      {images.map((item, idx) => (
        <div key={idx} className="">
          <Image
            className="rounded-lg bg-gray-100 duration-150 hover:scale-105"
            onClick={() => {
              slider.setCurrent(idx);
              slider.setShowImg(true);
            }}
            src={item}
            loading="lazy"
            height={400}
            width={300}
            alt="房間圖片"
          />
        </div>
      ))}
    </div>
  );

  if (
    !Array.isArray(Image_Bitongshu) ||
    Image_Bitongshu.length <= 0 ||
    !Array.isArray(Image_Haijinsha) ||
    Image_Haijinsha.length <= 0 ||
    !Array.isArray(Image_Tujiaojue) ||
    Image_Tujiaojue.length <= 0 ||
    !Array.isArray(Image_Public) ||
    Image_Public.length <= 0
  ) {
    return null;
  }

  return (
    <div className="bg-white">
      <section
        id="Bitongshu"
        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <div>
          <h2 className="rooms-title tracking-tight text-gray-900">
            四人房－筆筒樹
          </h2>
          <p className="rooms-content mt-4 leading-7 text-gray-500">
            筆筒樹房配有茶几和露台，可容納六人入住，加床選項可增加兩張單床。露台區域環繞著美麗的庭園綠意，過往入住的客人都非常喜歡這個環境。
          </p>

          <dl className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
            {Bitongshu.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="rooms-content font-bold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="rooms-content mt-2 leading-7 text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {renderImageGrid(Image_Bitongshu, slider1, ShowMyImg_1)}
      </section>
      <section
        id="Haijinsha"
        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <div>
          <h2 className="rooms-title tracking-tight text-gray-900">
            四人房－海金沙
          </h2>
          <p className="rooms-content mt-4 leading-7 text-gray-500">
            海金沙房適合長輩入住，配備床架，可加一張單床，最多可容納五人。提供沙發區，讓您與旅伴放鬆聊天看電視。窗外可欣賞自然景致。
          </p>

          <dl className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
            {Haijinsha.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="rooms-content font-bold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="rooms-content mt-2 leading-7 text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {renderImageGrid(Image_Haijinsha, slider2, ShowMyImg_2)}
      </section>
      <section
        id="Tujiaojue"
        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <div>
          <h2 className="rooms-title tracking-tight text-gray-900">
            六人房－兔腳蕨
          </h2>
          <p className="rooms-content mt-4 leading-7 text-gray-500">
            兔腳蕨房可以加一張單床，最多能住七人，也設有沙發區，可以與同行親友一同休憩。衛浴間有對外窗能看到屋外的景色，早晨看著自然風光。
          </p>

          <dl className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
            {Tujiaojue.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="rooms-content font-bold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="rooms-content mt-2 leading-7 text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {renderImageGrid(Image_Tujiaojue, slider3, ShowMyImg_3)}
      </section>
      <section className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="rooms-title tracking-tight text-gray-900">
            蘊慢築－公共空間
          </h2>
          <p className="rooms-content mt-4 text-lg leading-7 text-gray-500">
            民宿內外有寬敞的公共空間，可享用早餐、品茗、體驗生活美學，周遭種植豐富的蕨類、多肉植物、積水鳳梨等各種植物，值得慢慢認識與欣賞。四處走逛，體驗悠閒的生活步調。
          </p>

          <dl className="mt-9 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
            {Public.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="rooms-content text-lg font-bold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="rooms-content mt-2 leading-7 text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {renderImageGrid(Image_Public, slider4, ShowMyImg_4)}
      </section>
    </div>
  );
};

export default Rooms;

const Image_Public = [
  "/Image_Public_Webp/_AJC5714.webp",
  "/Image_Public_Webp/_AJC5766.webp",
  "/Image_Public_Webp/_AJC5793.webp",
  "/Image_Public_Webp/_AJC5798.webp",
  "/Image_Public_Webp/_AJC5815.webp",
  "/Image_Public_Webp/_AJC5863.webp",
  "/Image_Public_Webp/_AJC6186.webp",
  "/Image_Public_Webp/_AJC6221.webp",
  "/Image_Public_Webp/_ANJ3985.webp",
  "/Image_Public_Webp/_AJC6117.webp",
  "/Image_Public_Webp/_AJC5925.webp",
  "/Image_Public_Webp/_AJC5936.webp",
  "/Image_Public_Webp/_AJC5929.webp",
  "/Image_Public_Webp/_AJC5930.webp",
  "/Image_Public_Webp/_AJC5931.webp",
];

const Image_Tujiaojue = [
  "/Image_Tujiaojue_Webp/_AJC5432.webp",
  "/Image_Tujiaojue_Webp/_AJC5434.webp",
  "/Image_Tujiaojue_Webp/_AJC5466.webp",
  "/Image_Tujiaojue_Webp/R0001076.webp",
  "/Image_Tujiaojue_Webp/R0001083.webp",
  "/Image_Tujiaojue_Webp/R0001289.webp",
  "/Image_Tujiaojue_Webp/R0001295.webp",
  "/Image_Tujiaojue_Webp/_AJC5492.webp",
  "/Image_Tujiaojue_Webp/_AJC5511.webp",
  "/Image_Tujiaojue_Webp/_ANJ3841.webp",
  "/Image_Tujiaojue_Webp/_ANJ3838.webp",
  "/Image_Tujiaojue_Webp/_ANJ3821.webp",
];

const Image_Haijinsha = [
  "/Image_Haijinsha_Webp/R0001263.webp",
  "/Image_Haijinsha_Webp/R0001115.webp",
  "/Image_Haijinsha_Webp/R0001268.webp",
  "/Image_Haijinsha_Webp/_AJC5522.webp",
  "/Image_Haijinsha_Webp/_AJC5578.webp",
  "/Image_Haijinsha_Webp/_AJC5563.webp",
  "/Image_Haijinsha_Webp/_ANJ3863.webp",
  "/Image_Haijinsha_Webp/_ANJ3870.webp",
];

const Image_Bitongshu = [
  "/Image_Bitongshu_Webp/_ANJ3905.webp",
  "/Image_Bitongshu_Webp/R0001176.webp",
  "/Image_Bitongshu_Webp/R0001159.webp",
  "/Image_Bitongshu_Webp/R0001168.webp",
  "/Image_Bitongshu_Webp/_AJC5593.webp",
  "/Image_Bitongshu_Webp/_ANJ3930.webp",
  "/Image_Bitongshu_Webp/_AJC5631.webp",
  "/Image_Bitongshu_Webp/_ANJ3907.webp",
  "/Image_Bitongshu_Webp/_ANJ3910.webp",
  "/Image_Bitongshu_Webp/_AJC5673.webp",
  "/Image_Bitongshu_Webp/_AJC5640.webp",
  "/Image_Bitongshu_Webp/_AJC5648.webp",
];
