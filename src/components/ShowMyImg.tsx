import React, { useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

{
  /* Show IMAGE */
}
const ShowMyImg_1 = ({
  visible,
  onClose,
  img_src,
  prevSlide,
  nextSlide,
}: {
  visible: any;
  onClose: any;
  img_src: string;
  prevSlide: any;
  nextSlide: any;
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);
  const handleOnClose = (img: any) => {
    if (img.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <IoIosArrowBack
        onClick={prevSlide}
        className="absolute left-[30px] top-[50%] z-[1000] cursor-pointer select-none text-white/60 duration-300 hover:scale-[1.3]"
        size={50}
      />
      <Image
        className="z-50 scale-95 rounded-lg md:scale-125"
        src={img_src}
        alt=""
        width={720}
        height={405}
      />
      <IoIosArrowForward
        onClick={nextSlide}
        className="absolute right-[30px] top-[50%] z-[1000] cursor-pointer select-none text-white/60 duration-300 hover:scale-[1.3]"
        size={50}
      />
    </div>
  );
};

export default ShowMyImg_1;
