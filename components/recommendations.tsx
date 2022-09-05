import React from "react";
import { Grid } from "@mui/material";
import { SendiradidRecommendation } from "./recommendationsContent/SendiradidRecommendation";
import { SmariRecommendation } from "./recommendationsContent/SmariRecommendation";
import { KaiserRecommendation } from "./recommendationsContent/KaiserRecommendation";

export const Recommendations = () => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column", gap: 10, m: 10 }}>
      {/* RECOMMENDATION FROM SENDIRADID */}
      <SendiradidRecommendation />

      {/* RECOMMENDATION FROM SMÁRI */}
      <SmariRecommendation />

      {/* RECOMMENDATION FROM KAISER */}
      <KaiserRecommendation />
    </Grid>
  );
};
