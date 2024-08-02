import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const StyledOverSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: `100px 150px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const OverViewSection = () => {
  return (
    <StyledOverSection>
      <Typography
        mb={3}
        gutterBottom
        fontWeight={700}
        variant="h4"
        textAlign="center"
      >
        Elite Overseas Overview
      </Typography>
      <Typography textAlign="justify">
      ELITE OVERSEAS offers specialized consulting services in Indirect Taxation regarding DGFT Services, Customs Services and GST etc. from various Government Departments. With extensive experience in this sector helps us to be a business-oriented firm while, our expertise in the subject matter provide comprehensive solutions to help organizations achieve their goals, high quality services and innovative solution to our customers.

      </Typography>
    </StyledOverSection>
  );
};

export default OverViewSection;
