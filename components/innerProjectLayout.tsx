import React from "react";
import { Box, Grid, Button, Typography, List } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";

interface Props {
  image: any;
  buttonColor: String;
  buttonBorder: String;
}

export const InnerProjectLayout: FC<Props> = ({
  image,
  buttonColor,
  buttonBorder,
}) => {

    const Router = useRouter();

  return (
    <Grid container>
      <Grid>
        <Button
          onClick={()=>{Router.push('../')}}  
          variant="outlined"
          sx={{
            position: "absolute",
            zIndex: 2,
            justifyContent: "left",
            color: `${buttonColor}`,
            border: `${buttonBorder}`,
            m:5
          }}
        >
          BACK
        </Button>
      </Grid>
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Box sx={{ width: "100%", bgcolor: "#0B1420", height: "24.3vh" }} />
        <Box sx={{ width: "100vh", position: "absolute", zIndex: 1 }}>
          <Image alt="projects banner" src={image} />
        </Box>
      </Grid>
    </Grid>
  );
};
