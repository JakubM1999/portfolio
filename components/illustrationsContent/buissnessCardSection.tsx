import {
  Divider,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import Image from "next/image";

//-------------BUISSNESS CARDS IMAGES----------------
import card1 from "../../images/Illustrations/card1.png";
import card2 from "../../images/Illustrations/card2.jpg";

export const BuissnessCardSection = () => {
  return (
    <>
      <Grid item sx={{ mt: 10 }}>
        <Typography sx={{ fontSize: { lg: 40, sm: 25 } }}>
          BUISSNESS CARDS
        </Typography>
        <Divider sx={{ width: "70vh" }} />
      </Grid>
      <Grid item xs={10} sx={{ mt: 3 }}>
        <ImageList>
          <ImageListItem sx={{ width: "50vh" }}>
            <Image alt="eldur card" src={card1} />
          </ImageListItem>
          <ImageListItem sx={{ width: "55vh" }}>
            <Image alt="raff card" src={card2} />
          </ImageListItem>
        </ImageList>
      </Grid>
    </>
  );
};
