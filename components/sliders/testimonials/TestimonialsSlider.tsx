import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialCardComponent from "@/components/cards/testimonial/TestimonialCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledSlideBox = styled(Box)(({ theme }) => ({
  //minHeight: 300,
  width: "100%",
  height: "auto",
  position: "relative",
  overflow: "hidden",
}));

const reviews= [{
  companyName: "ETA AEROSPACE",
  content: "Elite Overseas has been our go-to partner for all things related to customs clearance and tax consultation. Their team’s expertise and dedication to ensuring our GST refunds are processed efficiently have been outstanding. Their proactive approach and attention to detail have made a significant impact on our operations. We couldn't ask for a better service provider!",
  authorName: "ETA AEROSPACE",
  authorDesignation: "Business Executive"
}]
const TestimonialSliderComponent = () => {
  return (
    <StyledSlideBox>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <TestimonialCardComponent review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSlideBox>
  );
};

export default TestimonialSliderComponent;
