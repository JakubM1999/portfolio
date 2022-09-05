import {
  Divider,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import Image from "next/image";

//-------------POSTER IMAGES----------------
import poster1 from "../../images/Illustrations/poster1.png";
import poster2 from "../../images/Illustrations/poster2.jpg";

export const PosterSection = () => {
  return (
    <>
      <Grid item sx={{ mt: 10 }}>
        <Typography sx={{ fontSize: { lg: 40, sm: 25 } }}>POSTERS</Typography>
        <Divider sx={{ width: "70vh" }} />
      </Grid>
      <Grid container item xs={10} sx={{ justifyContent: "center", mt: 3 }}>
        <ImageList cols={1}>
          <ImageListItem sx={{ width: "80vh" }}>
            <Image alt="sonic poster" src={poster1} />
          </ImageListItem>
          <ImageListItem sx={{ width: "80vh" }}>
            <Image alt="raff poster" src={poster2} />
          </ImageListItem>
        </ImageList>
      </Grid>
    </>
  );
};
