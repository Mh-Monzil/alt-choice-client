import bgImage1 from "../assets/banner/cbanner1.png";
import bgImage2 from "../assets/banner/cbanner2.png";
import bgImage3 from "../assets/banner/cbanner3.png";
import watch from "../assets/banner/watch.png";
import monitor from "../assets/banner/monitor.png";
import headphone from "../assets/banner/headphone.png";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div className="h-[100vh] lg:h-[70vh]">
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
        className="mySwiper h-full rounded-md -z-10"
      >
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`,
            }}
            className=" flex flex-col-reverse lg:flex-row items-center justify-center md:justify-evenly gap8 w-full h-full text-white  bg-cover bg-center -z-10 container px-6 py-16 mx-auto"
          >
            <div className="items-center lg:flex">
              <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="w-full lg:w-1/2">
                <div className="lg:max-w-lg space-y-10 text-center md:text-start">
                  <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
                    Explore Alternative Gadget
                    <span className="text-green-400 ">Choices</span>
                  </h1>

                  <div className="flex justify-center md:justify-start">
                    <Link
                      to="/queries"
                      className="px-4 py-3 md:px-7 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300"
                    >
                      See All Queries
                    </Link>
                  </div>
                </div>
              </div>

              <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:max-w-3xl"
                  src={watch}
                />
              </div>
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
            <div className="items-center lg:flex">
              <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="w-full lg:w-1/2">
                <div className="lg:max-w-lg space-y-10 text-center md:text-start">
                  <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
                  Uncover Unique Gadget 
                    <span className="text-green-400 ">Alternatives</span>
                  </h1>

                  <div className="flex justify-center md:justify-start">
                    <Link
                      to="/queries"
                      className="px-4 py-3 md:px-7 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300"
                    >
                      See All Queries
                    </Link>
                  </div>
                </div>
              </div>

              <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:max-w-3xl"
                  src={watch}
                />
              </div>
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
            <div className="items-center lg:flex">
              <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="w-full lg:w-1/2">
                <div className="lg:max-w-lg space-y-10 text-center md:text-start">
                  <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
                    Discover Better Alternatives for Your Tech 
                    <span className="text-green-400 ">Needs</span>
                  </h1>

                  <div className="flex justify-center md:justify-start">
                    <Link
                      to="/queries"
                      className="px-4 py-3 md:px-7 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300"
                    >
                      See All Queries
                    </Link>
                  </div>
                </div>
              </div>

              <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:max-w-3xl"
                  src={watch}
                />
              </div>
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
