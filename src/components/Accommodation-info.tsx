"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accessibility,
  Baby,
  Bath,
  BusFront,
  CheckSquare,
  CigaretteOff,
  Clipboard,
  CreditCard,
  Flower2,
  Languages,
  LogIn,
  MapPinned,
  ParkingCircle,
  QrCode,
  Utensils,
  UtensilsCrossed,
  Wifi,
  XSquare,
} from "lucide-react";
import Image from "next/image";

const Accommodation = () => {
  const { toast } = useToast();
  return (
    <div>
      <section className="mx-auto max-w-[1240px]">
        <div className="mx-5 my-16 flex flex-col justify-center md:my-20">
          <div className="my-5 mb-4 grid grid-rows-1 gap-4 md:my-0 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="mb-2 font-bold">住宿周邊</CardTitle>
                <CardDescription className="flex text-lg font-semibold">
                  <MapPinned className="mr-1" />
                  附近景點
                </CardDescription>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/szmVoSpAGsDMhKA78"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    苗栗特色館
                  </a>
                  <p>600 公尺</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/BTQmfT4wPcsSvdsK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    火炎山生態教育館
                  </a>
                  <p>13 公里</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/A5soPx5oF5nUZTR59"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    三義木雕博物館
                  </a>
                  <p>11 公里</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/nMM4XfQFLWAFgk9e9"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    龍騰斷橋
                  </a>
                  <p>15 公里</p>
                </div>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <Utensils className="mr-1" />
                  餐廳 / 飲料店
                </CardDescription>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/cbMeYbw1yLWjn2wH9"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    鵝家庄
                  </a>
                  <p>290 公尺</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/MZVBbSVhW2PKogxV8"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    陶之飲
                  </a>
                  <p>2.5 公里</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/RtAbTC3sBNH6MfXs8"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    棗莊
                  </a>
                  <p>1.6 公里</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/3HxUVxX9QbkP24BMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    紅棗食府
                  </a>
                  <p>1.1 公里</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/N8V7VbjK22ikmy1v5"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    福樂麵店
                  </a>
                  <p>1.5 公里</p>
                </div>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <BusFront className="mr-1" />
                  大眾運輸工具
                </CardDescription>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/qbEAtZAL1A4Ab13N8"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    銅鑼火車站
                  </a>
                  <p>6.4 公里</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/pB8E8rob7rJ6GjMD7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    苗栗火車站
                  </a>
                  <p>12.3 公里</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <a
                    className="border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400"
                    href="https://maps.app.goo.gl/u4RdHM9tgRZkffsM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast({
                        title: "已開啟新分頁",
                      });
                    }}
                  >
                    苗栗高鐵站
                  </a>
                  <p>16.6 公里</p>
                </div>
              </CardHeader>
            </Card>
            <Card className="">
              <CardHeader>
                <CardTitle className="mb-2 font-bold">設施與服務</CardTitle>
                <CardDescription className="flex text-lg font-semibold">
                  <Bath className="mr-1" />
                  浴室 / 洗滌服務
                </CardDescription>
                <CardDescription className="flex justify-between">
                  乾濕分離
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  洗澡椅(年長者用)
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  洗烘衣機
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <Flower2 className="mr-1" />
                  戶外 / 園藝
                </CardDescription>
                <CardDescription className="flex justify-between">
                  花園 / 中庭景觀
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  戶外休息區
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  手做苔球課程
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  多肉組合課程
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <Baby className="mr-1" />
                  兒童友善
                </CardDescription>
                <CardDescription className="flex justify-between">
                  嬰兒床
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  兒童玩具
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  閱讀環境(繪本、書籍)
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <UtensilsCrossed className="mr-1" />
                  迷你吧 / 飲食
                </CardDescription>
                <CardDescription className="flex justify-between">
                  飲水機
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  烘碗機
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  蔬食早餐
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <Wifi className="mr-1" />
                  網路服務
                </CardDescription>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <Drawer>
                    <DrawerTrigger asChild className="flex">
                      <p className="cursor-pointer border-b-2 border-gray-500 hover:border-slate-400 hover:text-slate-400">
                        Wi-fi
                        <QrCode className="mx-1" />
                      </p>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="items-center justify-center">
                        <DrawerTitle className="flex items-center text-muted-foreground">
                          請掃描以下 <QrCode className="mx-1" /> 加入 Wi-fi
                        </DrawerTitle>
                        <DrawerDescription className="flex items-center text-muted-foreground">
                          此 <QrCode className="mx-1" /> 只供加入
                          Wi-fi，請放心掃描
                        </DrawerDescription>
                        <DrawerDescription className="flex items-center text-muted-foreground">
                          或點擊
                          <Clipboard
                            className="mx-1 hover:scale-105 hover:cursor-pointer hover:text-emerald-600"
                            onClick={() => {
                              navigator.clipboard.writeText("037221687");
                              toast({
                                title: "已複製 Wi-fi 密碼到剪貼簿",
                              });
                            }}
                          />
                          複製 Wi-fi 密碼
                        </DrawerDescription>
                        <DrawerDescription>
                          <Image
                            className="rounded-xl"
                            width={400}
                            height={800}
                            loading="lazy"
                            src="/free-wifi.jpg"
                            alt="wifi"
                          />
                        </DrawerDescription>
                      </DrawerHeader>
                    </DrawerContent>
                  </Drawer>
                  <CheckSquare className="size-5 text-green-600" />
                </div>
                <CardDescription className="flex justify-between">
                  有線網路
                  <XSquare className="size-5 text-red-600" />
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="">
              <CardHeader>
                <CardTitle className="mb-2 font-bold">入住須知</CardTitle>
                <CardDescription className="flex text-lg font-semibold">
                  <LogIn className="mr-1" />
                  入住 / 退房時間
                </CardDescription>
                <CardDescription className="flex justify-between">
                  入住時間
                  <span>15:00 至 20:00</span>
                </CardDescription>
                <CardDescription className="flex justify-between">
                  退房時間
                  <span>10:00 至 11:00</span>
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <CreditCard className="mr-1" />
                  付款方式
                </CardDescription>
                <CardDescription className="flex justify-between">
                  現金
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  信用卡
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  行動支付(LINE PAY,街口支付)
                  <XSquare className="size-5 text-red-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <ParkingCircle className="mr-1" />
                  停車服務
                </CardDescription>
                <CardDescription className="flex justify-between">
                  私人停車場
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <Accessibility className="mr-1" />
                  無障礙設施
                </CardDescription>
                <CardDescription className="flex justify-between">
                  無樓梯(民宿全部房間皆在一樓)
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription className="flex text-lg font-semibold">
                  <Languages className="mr-1" />
                  語言
                </CardDescription>
                <CardDescription className="flex justify-between">
                  中文
                  <CheckSquare className="size-5 text-green-600" />
                </CardDescription>
                <CardDescription className="flex justify-between">
                  英文(需透過翻譯無法流利溝通)
                  <XSquare className="size-5 text-red-600" />
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <div className="flex text-lg font-semibold text-muted-foreground">
                  <CigaretteOff className="mr-1" />
                  民宿全館禁菸！
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
