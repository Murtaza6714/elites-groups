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
  companyName: "MCNROE",
  content: "The team's expertise in handling our IGST application was evident from the start. Their thorough understanding of the regulations ensured that our claims were processed swiftly and without issues. We appreciated their proactive communication and detailed reporting throughout the process.",
  authorName: "MCNROE",
  // authorDesignation: "Business Executive"
},
{
  companyName: "CHITRA MACHINERIES",
  content: "Thanks to ELITE OVERSEAS, we navigated the complexities of IGST Drawback with ease. Their detailed guidance and support were invaluable in securing our rightful claims. The professional approach and timely responses were commendable.",
  authorName: "CHITRA MACHINERIES",
  // authorDesignation: "Business Executive"
},
{
  companyName: "ACME INTERNATIONAL",
  content: "We were impressed with the efficiency and accuracy of ELITE OVERSEAS in handling our Drawback submissions. Their deep knowledge of the tax system and dedication to resolving queries made the entire process seamless. Highly recommend their services for any DRAWBACK -related needs.",
  authorName: "ACME INTERNATIONAL",
  // authorDesignation: "Business Executive"
},
{
  companyName: "SAPL INDUSTRIES PVT LTD",
  content: "The team;s attention to detail and thorough understanding of IGST regulations significantly benefited our organization. They not only ensured compliance but also optimized our claims to maximize returns. Their support was instrumental in our success.",
  authorName: "SAPL INDUSTRIES PVT LTD",
  // authorDesignation: "Business Executive"
},
{
  companyName: "SASMOS HET TECHNOLOGIES LTD",
  content: "Exceptional service from start to finish. ELITE OVERSEAS handled our IGST Drawback process with a high level of professionalism and efficiency. Their expertise alleviated much of the complexity, allowing us to focus on our core business activities.",
  authorName: "SASMOS HET TECHNOLOGIES LTD",
  // authorDesignation: "Business Executive"
},
{
  companyName: "VENUS ENTERPRISES",
  content: "Working with Elite Overseas has been a seamless experience. Their team is knowledgeable and responsive, always ready to assist with our GST and Drawback queries. We are extremely satisfied with their transparent and efficient process.",
  authorName: "VENUS ENTERPRISES",
  // authorDesignation: "Business Executive"
},
{
  companyName: "RISHABH TERRYTEX",
  content: "I was initially skeptical about outsourcing our GST services, but Elite Overseas proved to be an excellent choice. Their client-centric approach and commitment to delivering results have exceeded our expectations. The service fee structure, where they charge only after we receive the refund, is very reassuring.",
  authorName: "RISHABH TERRYTEX",
  // authorDesignation: "Business Executive"
},
{
  companyName: "KALIMATI THE CARBON COMPANY",
  content: "Elite Overseas has simplified the complexities of GST refunds and DBK clearance for our business. Their professional and proactive team ensures that we stay compliant and receive our refunds on time. Their dedication to client satisfaction is evident in their work.",
  authorName: "KALIMATI THE CARBON COMPANY",
  // authorDesignation: "Business Executive"
},
{
  companyName: "DHEER HEALTH CARE PRIVATE LIMITED",
  content: "The team at Elite Overseas is highly skilled and efficient. Their in-depth knowledge of customs and taxation processes has been invaluable to our operations. We have seen significant improvements in our refund timelines and overall compliance.",
  authorName: "DHEER HEALTH CARE PRIVATE LIMITED",
  // authorDesignation: "Business Executive"
},
]
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
