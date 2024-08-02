import ConsultantCard from "@/components/cards/consultant/Consultant";
import { APP_COLORS } from "@/theme/colors/colors";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { MdMiscellaneousServices } from "react-icons/md";

const StyledWhyEliteComponent = styled(Box)(({ theme }) => ({
  padding: `100px 150px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const WhyElite = () => {
  return (
    <StyledWhyEliteComponent>
      <Box mb={2}>
        <Typography
          mb={3}
          gutterBottom
          fontWeight={700}
          variant="h4"
          textAlign="center"
        >
          Why Choose Elite Overseas
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <ConsultantCard
            icon={
              <IoDocumentTextOutline
                size={120}
                color={APP_COLORS.PRIMARY_COLOR}
              />
            }
            content="With years of experience in customs and taxation services, our team brings unparalleled expertise to the table. We stay up-to-date with the latest regulations and practices, ensuring that you receive accurate and effective solutions."
            header="Expertise and Experience"
          />
        </Grid>
        <Grid item md={4}>
          <ConsultantCard
            backgroundColor={APP_COLORS.PRIMARY_COLOR}
            icon={<RiVerifiedBadgeFill size={120} color={APP_COLORS.WHITE} />}
            header="Transparent and Ethical Practices"
            content="At Elite Overseas, we believe in transparency and integrity. Our processes are clear, and our pricing is straightforward. We charge a service fee only after you receive your IGST refund, demonstrating our commitment to your satisfaction and success."
          />
        </Grid>
        <Grid item md={4}>
          <ConsultantCard
            icon={<RiTeamLine size={120} color={APP_COLORS.PRIMARY_COLOR} />}
            header="Client-Centric Approach"
            content="Our clients are at the heart of everything we do. We tailor our services to meet your specific needs, providing personalized solutions that drive tangible results. Your success is our priority, and we work diligently to help you achieve it."
          />
        </Grid>
        <Grid item md={4}>
          <ConsultantCard
            backgroundColor={APP_COLORS.PRIMARY_COLOR}
            icon={<FaLocationDot size={120} color={APP_COLORS.WHITE} />}
            header="Comprehensive Services"
            content="We offer a wide range of services, from IGST refunds and DBK clearance to comprehensive taxation and customs-related services. This means you can rely on us for all your consultancy needs, saving you time and ensuring consistency in service quality."
          />
        </Grid>
        <Grid item md={4}>
          <ConsultantCard
            icon={<GrCertificate size={120} color={APP_COLORS.PRIMARY_COLOR} />}
            header="Dedicated Support"
            content="Our dedicated support team is always ready to assist you. We provide prompt responses and proactive solutions to any challenges you may face, ensuring smooth operations and peace of mind."
          />
        </Grid>
        <Grid item md={4}>
          <ConsultantCard
            backgroundColor={APP_COLORS.PRIMARY_COLOR}
            icon={
              <MdMiscellaneousServices
                size={120}
                color={APP_COLORS.WHITE}
              />
            }
            header="Proven Track Record"
            content="We have a proven track record of success, with numerous satisfied clients who have benefited from our expertise and dedication. Our reputation speaks for itself, and we are proud to be a trusted partner for businesses across various industries."
          />
        </Grid>
      </Grid>
    </StyledWhyEliteComponent>
  );
};

export default WhyElite;
