import { aboutUsPlaceholder } from "@/utils/constants";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React from "react";
import Typography from "@mui/material/Typography";

const StyledAboutUsComponent = styled(Box)(({ theme }) => ({
  padding: `100px 150px`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: 600,
  height: "auto",
  overflow: "hidden",
  position: "relative",
  "& .MuiTypography-root": {
    color: theme.palette.common.white,
  },
  "& .MuiTypography-h2": {
    fontWeight: 800,
  },
}));

const AboutUsComponent = () => {
  return (
    <StyledAboutUsComponent
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${aboutUsPlaceholder})`,
      }}
    >
      <Box component="div" className="__overly">
        <Grid container>
          <Grid item xs={12}>
            <Typography mb={5} textAlign="center" variant="h2">
              ABOUT US
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography mb={4} textAlign="left">
            Welcome to Elite Overseas, your trusted consultancy partner specializing in customs and taxation services. With a wealth of experience and a dedicated team of experts, we are committed to providing top-notch solutions tailored to meet your business needs.

            </Typography>
            <Typography mb={4} fontWeight={700} variant="h4">
            WHO ARE WE
            </Typography>
            <Typography mb={4} textAlign="left">
            At Elite Overseas, we pride ourselves on our deep understanding of the intricate processes involved in customs and taxation. Our mission is to simplify these complexities, allowing you to focus on what you do best – growing your business. We offer a comprehensive range of services, including:

            IGST Refunds: Ensuring that you receive your rightful IGST refunds with our meticulous and transparent process. We only charge a service fee after the refund is credited to your account.

            DBK Clearance: Facilitating smooth and efficient DBK clearance to maximize your benefits.

            Taxation Services: Providing expert advice and solutions for all your taxation needs.

            Customs-Related Services: Handling all customs-related matters with precision and expertise.

            </Typography>
            <Typography mb={4} fontWeight={700} variant="h4">
              OUR COMMITMENT
            </Typography>
            <Typography mb={4} textAlign="left">
            We understand that every business is unique, and so are its needs. That's why we take a personalized approach to every client, offering customized solutions that drive success. Our team of professionals is dedicated to delivering results with integrity, efficiency, and a commitment to excellence.

Join hands with Elite Overseas and experience the difference of working with a consultancy that truly cares about your success.

            </Typography>
            <Typography mb={1} textAlign="left">
              1. Replies to Show Cause Notices, Filing of Appeals and Submission
              of Grievances.
            </Typography>
            <Typography mb={2} textAlign="left">
              2. Representation against Speaking Orders issued by the Customs
              Authority for mis-declaration /wrong declaration /wrong
              classification / undervaluation / higher Valuation, etc
            </Typography>
            <Typography mb={2} textAlign="left">
              3. Consulting / Facilitation of various Industrial Subsidies
            </Typography>
            <Typography mb={4} textAlign="left">
              4. Legal Advisory related to Exim procedures
            </Typography>
            {/* <Typography mb={4} fontWeight={700} variant="h4">
              Ease of Doing Business
            </Typography>
            <Typography mb={4} textAlign="left">
              With a vision to make Import & Export business management more
              simpler, we have developed a customized Enterprise Resource
              Planning (ERP) software which will help you in the following areas
            </Typography>
            <Typography mb={1} textAlign="left">
              1. Safekeeping of all Import Export Documentation
            </Typography>
            <Typography mb={2} textAlign="left">
              2. Monitoring of Export Obligation
            </Typography>
            <Typography mb={2} textAlign="left">
              3. Timely reminders of expiry dates and other important milestones
              of licenses
            </Typography>
            <Typography mb={2} textAlign="left">
              4. Intimation for applying of extensions and closure of licenses
            </Typography>
            <Typography mb={2} textAlign="left">
              5. Constant updations regarding the new Notifications / Policy
              Circulars / Public Notices / Trade Notices from DGFT & Customs
              which are related to your business. We request you to provide us
              with a chance to speak to you and see how we can be helpful for
              DGFT (EXIM) / Customs related matters
            </Typography> */}
          </Grid>
        </Grid>
      </Box>
    </StyledAboutUsComponent>
  );
};

export default AboutUsComponent;
