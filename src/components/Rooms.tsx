"use client";

import Image from "next/image";
import Image_Haijinsha from "./Image_Haijinsha";
import Image_Bitongshu from "./Image_Bitongshu";
import Image_Tujiaojue from "./Image_Tujiaojue";
import Image_Public from "./Image_Public";
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

const Rooms = ({
  slides_1,
  slides_2,
  slides_3,
  slides_4,
}: {
  slides_1: any;
  slides_2: any;
  slides_3: any;
  slides_4: any;
}) => {
  /* Slider and ShowImg component _1 */
  /* current 是當前照片編號 length 是照片陣列長度 */
  const [current_1, setCurrent_1] = useState(0);
  const length_1 = slides_1.length;

  /* NextSlide 和 PrevSlide 用 current 和 length 判斷前一張與後一張 */
  const nextSlide_1 = () => {
    setCurrent_1(current_1 === length_1 - 1 ? 0 : current_1 + 1);
  };

  const prevSlide_1 = () => {
    setCurrent_1(current_1 === 0 ? length_1 - 1 : current_1 - 1);
  };

  /* ShowImg 組件中 預設為未點開狀態 handleOnClose 則可控制照片開關狀態 */
  const [showImg_1, setShowImg_1] = useState(false);
  const handleOnClose_1 = () => setShowImg_1(false);

  /* Slider and ShowImg component _2 */
  /* current 是當前照片編號 length 是照片陣列長度 */
  const [current_2, setCurrent_2] = useState(0);
  const length_2 = slides_2.length;

  /* NextSlide 和 PrevSlide 用 current 和 length 判斷前一張與後一張 */
  const nextSlide_2 = () => {
    setCurrent_2(current_2 === length_2 - 1 ? 0 : current_2 + 1);
  };

  const prevSlide_2 = () => {
    setCurrent_2(current_2 === 0 ? length_2 - 1 : current_2 - 1);
  };

  /* ShowImg 組件中 預設為未點開狀態 handleOnClose 則可控制照片開關狀態 */
  const [showImg_2, setShowImg_2] = useState(false);
  const handleOnClose_2 = () => setShowImg_2(false);

  /* Slider and ShowImg component _3 */
  /* current 是當前照片編號 length 是照片陣列長度 */
  const [current_3, setCurrent_3] = useState(0);
  const length_3 = slides_3.length;

  /* NextSlide 和 PrevSlide 用 current 和 length 判斷前一張與後一張 */
  const nextSlide_3 = () => {
    setCurrent_3(current_3 === length_3 - 1 ? 0 : current_3 + 1);
  };

  const prevSlide_3 = () => {
    setCurrent_3(current_3 === 0 ? length_3 - 1 : current_3 - 1);
  };

  /* ShowImg 組件中 預設為未點開狀態 handleOnClose 則可控制照片開關狀態 */
  const [showImg_3, setShowImg_3] = useState(false);
  const handleOnClose_3 = () => setShowImg_3(false);

  /* Slider and ShowImg component _4 */
  /* current 是當前照片編號 length 是照片陣列長度 */

  const [current_4, setCurrent_4] = useState(0);
  const length_4 = slides_4.length;

  /* NextSlide 和 PrevSlide 用 current 和 length 判斷前一張與後一張 */
  const nextSlide_4 = () => {
    setCurrent_4(current_4 === length_4 - 1 ? 0 : current_4 + 1);
  };

  const prevSlide_4 = () => {
    setCurrent_4(current_4 === 0 ? length_4 - 1 : current_4 - 1);
  };

  /* ShowImg 組件中 預設為未點開狀態 handleOnClose 則可控制照片開關狀態 */
  const [showImg_4, setShowImg_4] = useState(false);
  const handleOnClose_4 = () => setShowImg_4(false);

  if (!Array.isArray(slides_1) || slides_1.length <= 0) {
    return null;
  }
  if (!Array.isArray(slides_2) || slides_2.length <= 0) {
    return null;
  }
  if (!Array.isArray(slides_3) || slides_3.length <= 0) {
    return null;
  }
  if (!Array.isArray(slides_4) || slides_4.length <= 0) {
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
        <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          {Image_Bitongshu.map((slide_1, index_1) => (
            <div key={index_1} className="">
              <Image
                className="rounded-lg bg-gray-100 duration-150 hover:scale-105"
                onClick={() => {
                  setCurrent_1(index_1);
                  setShowImg_1(true);
                }}
                key={index_1}
                src={slide_1.image}
                loading="lazy"
                height={400}
                width={300}
                alt="Bitongshu.image"
              />
              {index_1 === current_1 && (
                <ShowMyImg_1
                  onClose={handleOnClose_1}
                  visible={showImg_1}
                  img_src={slide_1.image}
                  prevSlide={prevSlide_1}
                  nextSlide={nextSlide_1}
                />
              )}
            </div>
          ))}
        </div>
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
        <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          {Image_Haijinsha.map((slide_2, index_2) => (
            <div key={index_2} className="">
              <Image
                className="rounded-lg bg-gray-100 duration-150 hover:scale-105"
                onClick={() => {
                  setCurrent_2(index_2);
                  setShowImg_2(true);
                }}
                key={index_2}
                src={slide_2.image}
                loading="lazy"
                height={400}
                width={300}
                alt="Haijinsha.image"
              />
              {index_2 === current_2 && (
                <ShowMyImg_2
                  onClose={handleOnClose_2}
                  visible={showImg_2}
                  img_src={slide_2.image}
                  prevSlide={prevSlide_2}
                  nextSlide={nextSlide_2}
                />
              )}
            </div>
          ))}
        </div>
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
        <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          {Image_Tujiaojue.map((slide_3, index_3) => (
            <div key={index_3} className="">
              <Image
                className="rounded-lg bg-gray-100 duration-150 hover:scale-105"
                onClick={() => {
                  setCurrent_3(index_3);
                  setShowImg_3(true);
                }}
                key={index_3}
                src={slide_3.image}
                loading="lazy"
                height={400}
                width={300}
                alt="Tujiaojue.image"
              />
              {index_3 === current_3 && (
                <ShowMyImg_3
                  onClose={handleOnClose_3}
                  visible={showImg_3}
                  img_src={slide_3.image}
                  prevSlide={prevSlide_3}
                  nextSlide={nextSlide_3}
                />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="rooms-title tracking-tight text-gray-900">
            蘊慢築－公共空間
          </h2>
          <p className="rooms-content mt-4 text-lg leading-7 text-gray-500">
            民宿內外有寬敞的公共空間，可享用早餐、品茗、體驗生活美學，周遭種植豐富的蕨類、多肉植物、積水鳳梨等各種植物，值得慢慢認識與欣賞。四處走逛，體驗悠閒的生活步調。
            {/* 民宿內外有寬敞的公共空間，可享用早餐、品茗、體驗生活美學，周遭種植豐富的蕨類、多肉植物、積水鳳梨等各種植物，值得慢慢認識與欣賞。來到鄉間田野，不妨利用我們所提供的腳踏車，四處走逛，體驗悠閒的生活步調。 */}
            {/* 民宿內除了下面提到的配備以外，民宿周遭種有綠植、多肉植物可以欣賞，到了鄉間田野，不妨也利用我們提供的腳踏車，看看附近的風景，體驗我們的生活步調，與城市的不同，有空可以來這邊走走！ */}
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
        <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          {Image_Public.map((slide_4, index_4) => (
            <div key={index_4} className="">
              <Image
                className="rounded-lg bg-gray-100 duration-150 hover:scale-105"
                onClick={() => {
                  setCurrent_4(index_4);
                  setShowImg_4(true);
                }}
                key={index_4}
                src={slide_4.image}
                loading="lazy"
                height={400}
                width={300}
                alt="public.image"
              />
              {index_4 === current_4 && (
                <ShowMyImg_4
                  onClose={handleOnClose_4}
                  visible={showImg_4}
                  img_src={slide_4.image}
                  prevSlide={prevSlide_4}
                  nextSlide={nextSlide_4}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
