import {
  Divider,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import Image from "next/image";

//-------------LOGO IMAGES----------------
import eldur from "../../images/Illustrations/logo1.png";
import framtidin from "../../images/Illustrations/logo2.png";
import raff from "../../images/Illustrations/logo3.png";
import glassur from "../../images/Illustrations/logo4.png";
import frae from "../../images/Illustrations/logo5.png";
import everbalde from "../../images/Illustrations/logo6.png";
import logopic1 from "../../images/Illustrations/logopic1.jpg";
import logopic2 from "../../images/Illustrations/logopic2.jpg";

export const LogoSection = () => {
  return (
    <>
      <Grid item>
        <Typography sx={{ fontSize: { lg: 40, sm: 25 } }}>LOGOS</Typography>
        <Divider sx={{ width: "70vh" }} />
      </Grid>
      <Grid item xs={10}>
        <ImageList cols={3}>
          <ImageListItem
            sx={{
              width: "15vh",
              height: "auto",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            <Image alt="eldur" src={eldur} />
          </ImageListItem>

          <ImageListItem
            sx={{
              width: "35vh",
              height: "auto",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            <Image alt="glassur" src={glassur} />
          </ImageListItem>

          <ImageListItem
            sx={{
              width: "30vh",
              height: "auto",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            <Image alt="raff" src={raff} />
          </ImageListItem>

          <ImageListItem
            sx={{
              width: "25vh",
              height: "auto",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            <Image alt="framtidin" src={framtidin} />
          </ImageListItem>

          <ImageListItem
            sx={{
              width: "25vh",
              height: "auto",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            <Image alt="frae" src={frae} />
          </ImageListItem>

          <ImageListItem
            sx={{
              width: "25vh",
              height: "auto",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            <Image alt="everbalde" src={everbalde} />
          </ImageListItem>
        </ImageList>

        <ImageList sx={{ mt: 10 }} cols={2}>
          <ImageListItem>
            <Image alt="Logo Poster Eldur" src={logopic1} />
          </ImageListItem>
          <ImageListItem>
            <Image alt="Logo Poster Framtidin" src={logopic2} />
          </ImageListItem>
        </ImageList>
      </Grid>
    </>
  );
};
