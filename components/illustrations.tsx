import React from "react";
import { Grid } from "@mui/material";

import { LogoSection } from "./illustrationsContent/logoSection";
import { DrawingSection } from "./illustrationsContent/drawingSection";
import { BuissnessCardSection } from "./illustrationsContent/buissnessCardSection";
import { PosterSection } from "./illustrationsContent/posterSection";

export const Illustrations = () => {
  return (
    <Grid container xs={12} sx={{ mt: 10, mb: 10 }}>
      <LogoSection />

      <DrawingSection />

      <BuissnessCardSection />

      <PosterSection />
    </Grid>
  );
};
