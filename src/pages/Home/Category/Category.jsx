 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Category = () => {
  return (
   <section>
    <SectionTitle heading={'ORDER ONLINE'} subHeading={'From 11.00am to 10.00pm'}></SectionTitle>
     <Swiper
      slidesPerView={1}
      spaceBetween={15}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        // Mobile
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        // Tablet
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        // Laptop/Desktop
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        // Large Desktop
        1280: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
      modules={[Pagination]}
      className="mySwiper mb-24 px-2 md:px-2"
    >
      <SwiperSlide>
        <div className="relative px-2">
          <img
            src={slide1}
            alt="Salads"
            className="w-full rounded-lg h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
          />

          <h3 className="absolute bottom-6 left-0 w-full text-center text-xl sm:text-2xl md:text-3xl uppercase text-white font-semibold">
            Salads
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative px-2">
          <img
            src={slide2}
            alt="Soups"
            className="w-full rounded-lg h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
          />

          <h3 className="absolute bottom-6 left-0 w-full text-center text-xl sm:text-2xl md:text-3xl uppercase text-white font-semibold">
            Soups
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative px-2">
          <img
            src={slide3}
            alt="Pizzas"
            className="w-full rounded-lg h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
          />

          <h3 className="absolute bottom-6 left-0 w-full text-center text-xl sm:text-2xl md:text-3xl uppercase text-white font-semibold">
            Pizzas
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative">
          <img
            src={slide4}
            alt="Desserts"
            className="w-full rounded-lg h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
          />

          <h3 className="absolute bottom-6 left-0 w-full text-center text-xl sm:text-2xl md:text-3xl uppercase text-white font-semibold">
            Desserts
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative">
          <img
            src={slide5}
            alt="Salads"
            className="w-full rounded-lg h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
          />

          <h3 className="absolute bottom-6 left-0 w-full text-center text-xl sm:text-2xl md:text-3xl uppercase text-white font-semibold">
            Salads
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default Category;
 
