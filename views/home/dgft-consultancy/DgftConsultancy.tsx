import { dgftPlaceholderImg } from "@/utils/constants";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React from "react";
import { Typography } from "@mui/material";

const StyledDgftConsultancy = styled(Box)(({ theme }) => ({
  padding: `100px 150px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: 600,
  overflow: "hidden",
  position: "relative",
  "& .__overly": {
    position: "absolute",
    padding: `0px 150px`,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .MuiTypography-root": {
    color: theme.palette.common.white,
  },
  "& .MuiTypography-h2": {
    fontWeight: 800,
  },
}));

const DgftConsultancy = () => {
  return (
    <StyledDgftConsultancy
      style={{
        backgroundImage: `url(${dgftPlaceholderImg})`,
      }}
    >
      <Box component="div" className="__overly">
        <Grid container>
          <Grid item xs={12}>
            <Typography mb={4} textAlign="center" variant="h2">
            DGFT SERVICES
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography mb={2} textAlign="justify">
            Our DGFT services are designed to streamline and optimize your international trade operations. We provide comprehensive support to ensure compliance with DGFT regulations and facilitate smooth export and import processes by providing the following services: 
Export/Import Licensing, IEC (Import Export Code) Registration, End of Day Closure (EODC) services, Export Promotion Capital Goods (EPCG) services, Registration Cum Membership Certificate (RCMC) services etc..

            </Typography>
            {/* <Typography textAlign="justify">  1 We have been in this business since last two decades and we have
              accumulated vast knowledge in interpretation of the Foreign Trade
              Policy and the best practices to follow for doing imports and
              exports. There are various schemes from Govt. of India to make
              exports from India more competent in the International market.
              DGFT is the controlling office which monitors the operations of
              these schemes. We help businesses to get benefits of these schemes
              by following the prescribed procedures of DGFT</Typography> */}
          </Grid>
        </Grid>
      </Box>
    </StyledDgftConsultancy>
  );
};

export default DgftConsultancy;
