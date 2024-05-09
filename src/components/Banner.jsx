import bgImage1 from "../assets/banner/cbanner1.png";
import bgImage2 from "../assets/banner/cbanner1.png";
import bgImage3 from "../assets/banner/cbanner1.png";
import { useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[85vh] "
      >
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`,
            }}
            className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center -z-10 "
          >
            <h2
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px]"
            >
              Explore Alternative Gadget Choices
            </h2>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="flex items-center gap-8 mt-10"
            >
              <Link to='/queries' className="px-4 py-3 md:px-7 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300">
                See All Queries
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage2})`,
            }}
            className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center "
          >
            <h2 
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px]">
            Discover Better Alternatives for Your Tech Needs
            </h2>
            <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            className="flex items-center gap-8 mt-10">
            <Link to='/queries' className="px-4 py-3 md:px-7 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300">
                See All Queries
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage3})`,
            }}
            className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center "
          >
            <h2
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px] px-2">
            Uncover Unique Gadget Alternatives
            </h2>
            <div 
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            className="flex items-center gap-8 mt-10">
              <Link to='/queries' className="px-4 py-3 md:px-7 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300">
                See All Queries
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;