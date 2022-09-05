import React from "react";
import { Avatar, Typography, Grid, Box } from "@mui/material";
import { SendiradidRecommendation } from "./recommendationsContent/SendiradidRecommendation";
import { SmariRecommendation } from "./recommendationsContent/SmariRecommendation";
import { KaiserRecommendation } from "./recommendationsContent/KaiserRecommendation";

export const Recommendations = () => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column", gap: 15, m: 10 }}>
      {/* RECOMMENDATION FROM SENDIRADID */}
      <SendiradidRecommendation />

      {/* RECOMMENDATION FROM SMÁRI */}
      <SmariRecommendation />

      {/* RECOMMENDATION FROM KAISER */}
      <KaiserRecommendation />
    </Grid>
  );
};
