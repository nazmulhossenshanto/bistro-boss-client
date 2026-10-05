import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [revies, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"What Our Client say"}
        heading={"Testimonials"}
      ></SectionTitle>

      <div>
        <Swiper
          slidesPerView={1}
          navigation={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {revies.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="md:px-36 space-y-3 text-center">
              <div className="flex items-center justify-center">
  <Rating
    style={{ maxWidth: 180 }}
    value={review.rating}
    readOnly
  />
</div>
                <p>{review.details}</p>
                <h3>{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
