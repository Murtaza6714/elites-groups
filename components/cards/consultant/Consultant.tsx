import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import React from "react";
import { CardContent, Grid, Typography } from "@mui/material";
import { shouldForwardProp } from "@/utils/func";
const StyledConsultantCard = styled(Card, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<{ backgroundColor?: string }>(["backgroundColor"], prop),
})<{ backgroundColor?: string }>(({ theme, backgroundColor }) => ({
  height: "100%",
  width: "100%",
  backgroundColor: backgroundColor || theme.palette.common.white,
  "& .MuiCardContent-root": {
    paddingTop: 30,
  },
  "& .MuiTypography-body1": {
    fontWeight: 600,
    ...(backgroundColor && {
      color: theme.palette.common.white,
    }),
  },
}));

interface ConsultantCardProps {
  content: string;
  icon: React.ReactNode;
  backgroundColor?: string;
  header: string;
}

const ConsultantCard = ({
  content,
  icon,
  header,
  backgroundColor,
}: ConsultantCardProps) => {
  return (
    <StyledConsultantCard backgroundColor={backgroundColor}>
      <CardContent>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item>{icon}</Grid>
          <Grid item>
          <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold' }}>
          {header}
        </Typography>
            <Typography variant="body1" textAlign="justify" // Justify text
      sx={{
        width: '80%', // Set the desired width here
        margin: '0 auto', // Center the content
        whiteSpace: 'pre-wrap', // Maintain whitespace and line breaks
        wordWrap: 'break-word', // Break long words to fit within the width
      }}>
              {content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledConsultantCard>
  );
};

export default ConsultantCard;
