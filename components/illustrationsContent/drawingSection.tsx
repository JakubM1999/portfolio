import {
  Divider,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import Image from "next/image";

//-------------DRAWING IMAGES----------------
import spiderman from "../../images/Illustrations/drawing1.png";
import batman from "../../images/Illustrations/drawing2.png";
import sonic from "../../images/Illustrations/drawing3.png";

export const DrawingSection = () => {
  return (
    <>
      <Grid item sx={{ mt: 10 }}>
        <Typography sx={{ fontSize: { lg: 40, sm: 25 } }}>DRAWINGS</Typography>
        <Divider sx={{ width: "70vh" }} />
      </Grid>
      <Grid container item xs={10} sx={{ justifyContent: "center", mt: 3 }}>
        <ImageList cols={1}>
          <ImageListItem sx={{ width: "70vh" }}>
            <Image alt="spiderman" src={spiderman} />
          </ImageListItem>
          <ImageListItem sx={{ width: "70vh" }}>
            <Image alt="batman" src={batman} />
          </ImageListItem>
          <ImageListItem sx={{ width: "70vh" }}>
            <Image alt="sonic" src={sonic} />
          </ImageListItem>
        </ImageList>
      </Grid>
    </>
  );
};
