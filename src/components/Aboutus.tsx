import Image from "next/image";

const rooms = [
  {
    id: 1,
    name: "海金沙房",
    desc: "寬敞的浴室空間和床架適合長者",
    href: "/rooms#Haijinsha",
    imageSrc: "/Image_Haijinsha_Webp/_ANJ3883.webp",
    imageAlt: "海金沙房",
  },
  {
    id: 2,
    name: "兔角蕨房",
    desc: "寬敞的房間和採光充足明亮舒適的浴室",
    href: "/rooms#Tujiaojue",
    imageSrc: "/Image_Tujiaojue_Webp/_ANJ3847.webp",
    imageAlt: "兔角蕨房",
  },
  {
    id: 3,
    name: "筆筒樹房",
    desc: "寬敞的空間獨享露台和一個小茶几",
    href: "/rooms#Bitongshu",
    imageSrc: "/Image_Bitongshu_Webp/_ANJ3931.webp",
    imageAlt: "筆筒樹房",
  },
];

const features = [
  {
    name: "花藝",
    description:
      "蘊慢築民宿的男主人曾老師是花藝老師，於1996年取得中華花藝文教基金會教授證照。曾老師擁有多年教學經驗，並在花藝設計與推廣教學上有非常高的專業能力。他曾帶領學員完成多場中大型花藝特展。現在他把他的專業知識和經驗轉化為經營民宿，並把花藝分享給更多人",
    imageSrc: "/Image_Aboutus/_AJC6100.webp",
    imageAlt: "蘊慢築男主人插花",
  },
  {
    name: "茶藝",
    description:
      "蘊慢築民宿的女主人邱姐是茶藝師，在退休後她與曾老師一起深入學習茶藝，在廣泛的旅行和學習中，他們深入了解了不同的茶文化和種類。他們的學習之旅讓他們更加熱愛茶藝，並決定將他們的熱愛和專業知識分享給更多人。",
    imageSrc: "/Image_Aboutus/_AJC6040.webp",
    imageAlt: "蘊慢築女主人泡茶",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <>
      <div id="about" className="bg-slate-50">
        {/* Featured section */}
        <section>
          <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-60 lg:px-16">
            <div className="absolute inset-0">
              <Image
                fill
                loading="lazy"
                src="/Image_Aboutus/_AJC5654.webp"
                alt="蘊慢築照片-背景"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 bg-opacity-50"
            />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                id="cause-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                蘊慢築的創立
              </h2>
              <p className="mt-3 text-xl text-white">
                蘊慢築民宿的女主人，邱姐是一位充滿活力、熱情好客的女士。退休後，她想要更不一樣的生活，於是決定開設民宿，並將綠植、花藝、品茗等生活美學帶入民宿的幽雅環境當中。
              </p>
              <a
                title="茶藝與花藝"
                href="#owner"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                觀看更多
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="owner">
          <div
            id="owner"
            className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                茶藝與花藝
              </h2>
              <p className="mt-4 text-gray-500">
                蘊慢築的男女主人是一對多才多藝的夫婦。男主人是一位花藝師，在20年的花藝教學經驗之後，決定將專業知識和經驗轉化為經營民宿。女主人是一位茶藝師，在退休後開始學習茶藝，決定將她的熱愛和專業知識分享給更多人。他們開設了這間民宿，讓更多人能夠體驗到茶與花的魅力，並在這裡享受到舒適的住宿環境。
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {features.map((feature, featureIdx) => (
                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div
                    className={classNames(
                      featureIdx % 2 === 0
                        ? "lg:col-start-1"
                        : "lg:col-start-8 xl:col-start-9",
                      "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4",
                    )}
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className={classNames(
                      featureIdx % 2 === 0
                        ? "lg:col-start-6 xl:col-start-5"
                        : "lg:col-start-1",
                      "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8",
                    )}
                  >
                    <div className="aspect-h-3 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 md:aspect-h-[2.4]">
                      <Image
                        fill
                        loading="lazy"
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* room-preview section */}
        <section aria-labelledby="room-preview">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="favorites-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                房間預覽
              </h2>
              <a
                title="查看所有房間"
                href="/rooms"
                className="hidden text-sm font-semibold text-teal-600 hover:text-teal-500 sm:block"
              >
                觀看完整房間照片
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
              {rooms.map((room) => (
                <div key={room.id} className="group relative">
                  <div className=" relative h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto ">
                    <Image
                      fill
                      loading="lazy"
                      src={room.imageSrc}
                      alt={room.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <a title={`${room.imageAlt}所有照片`} href={room.href}>
                      <span className="absolute inset-0" />
                      {room.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{room.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <a
                title="所有房間照片"
                href="/rooms"
                className="block text-sm font-semibold text-teal-600 hover:text-teal-500"
              >
                觀看完整房間照片
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* breakfast section */}
        <section aria-labelledby="breakfast">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-gray-800">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pb-16 pt-48 sm:pb-24">
                  <div>
                    <h2
                      id="sale-heading"
                      className="font-title-xl tracking-tight text-white"
                    >
                      蘊慢築招牌
                      <br />
                      豐盛蔬食早餐
                    </h2>
                    <div className="mt-6 text-base">
                      <a
                        title="所有房間照片"
                        href="rooms"
                        className="font-semibold text-white hover:text-slate-200"
                      >
                        觀看更多照片！
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="relative flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/Image_Food_Webp/_AJC5930.webp"
                            alt="蘊慢築民宿-早餐"
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/Image_Food_Webp/_AJC5929.webp"
                            alt="蘊慢築民宿-早餐"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/Image_Food_Webp/_AJC5931.webp"
                            alt="蘊慢築民宿-早餐"
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/Image_Food_Webp/_AJC5925.webp"
                            alt="蘊慢築民宿-早餐"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/Image_Food_Webp/_AJC5936.webp"
                            alt="蘊慢築民宿-早餐"
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/Image_Food_Webp/_AJC5922.webp"
                            alt="蘊慢築民宿-早餐"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
