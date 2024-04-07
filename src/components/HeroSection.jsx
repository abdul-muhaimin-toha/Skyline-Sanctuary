import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <section className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-hero-slider-1 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-100px)] w-full bg-gradient-to-b from-[#222222ee] to-[#222222ee] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-2 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-100px)] w-full bg-gradient-to-b from-[#222222ee] to-[#222222ee] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-3 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-100px)] w-full bg-gradient-to-b from-[#222222ee] to-[#222222ee] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-4 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-100px)] w-full bg-gradient-to-b from-[#222222ee] to-[#222222ee] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-5 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-100px)] w-full bg-gradient-to-b from-[#222222ee] to-[#222222ee] opacity-70"></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2  justify-center  p-10">
        <div className="flex max-w-full flex-col  text-center md:max-w-2xl">
          <h1 className=" mb-6 text-4xl font-bold capitalize text-white md:text-5xl lg:text-6xl">
            The easiest way to find your dream home
          </h1>
          <p className=" mb-6 text-sm text-white md:text-base">
            We're the real estate experts who can help you find the perfect
            place to call home. We know the real estate market inside and out,
            and we're committed to helping you find the right home for your
            needs and budget.
          </p>
          <button className="self-center rounded-md bg-primary px-5 py-3 font-bold text-white transition duration-200 hover:bg-blue-800">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
