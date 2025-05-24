import React, { CSSProperties, useRef, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/Icon.png";
import img from "../../assets/bgs.png";
import Frame from "../../assets/womanshop.png";
import Frame2 from "../../assets/fram2.png";
import Frame3 from "../../assets/frame3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";

const slides = [
  {
    title: "برنامه ریزی خرید ها",
    text: "شما میتوانید خرید های هر روزی که میخواهید را اضافه و برای آنها تاریخ بزارید تا به شما یاد آوری شود",
    image: Frame,
  },
  {
    title: "مدیریت هزینه خرید",
    text: "شما میتوانید هزینه خرید های انجام شده را به صورت ماهانه داشته باشید تا بتوانید آنهارو مدیریت کنید",
    image: Frame2,
  },
  {
    title: "بزن بریــــم!",
    text: "حالا که با این برنامه آشنا شدی بزن بریم لیست خریدو آماده کنیم...",
    image: Frame3,
  },
];

const Use: React.FC = () => {
  const swiperRef = useRef<SwiperType>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles: CSSProperties = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSkip = () => {
    swiperRef.current?.slideTo(slides.length - 1);
  };

  return (
    <div className="w-[430px] m-auto min-h-screen bg-gradient-to-b from-[#D5D0FF] to-white bg-blend-overlay">
      <div style={styles}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center pt-10">
                <img src={slide.image} alt="slide" className="w-[245px] h-[390px]" />
                <div className="text-[30px] text-center mt-5 text-[#7265E2]">
                  {slide.title}
                </div>
                <div className="text-[16px] text-right mt-5 text-[#7265E2] px-10 leading-relaxed">
                  {slide.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center px-10 mt-10">
          <Link className="text-[#7265E2] cursor-pointer" onClick={handleSkip} to="/enter">
            گذشتن
          </Link>

          <div className="flex items-center justify-center space-x-1">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`transition-all duration-300 ease-in-out rounded-full ${
                  index === currentIndex
                    ? "w-6 h-[6px] bg-[#7265E2]"
                    : "w-2.5 h-[6px] bg-[#D5D0FF]"
                }`}
              />
            ))}
          </div>

          {currentIndex === slides.length - 1 ? (
            <Link
              to="/enter"
              className="bg-[#7265E2] p-3 rounded-full cursor-pointer"
            >
              <img src={icon} alt="start" className="w-[4px] h-[7px]" />
            </Link>
          ) : (
            <span
              className="bg-[#7265E2] p-3 rounded-full cursor-pointer"
              onClick={handleNext}
            >
              <img src={icon} alt="next" className="w-[4px] h-[7px]" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Use;
