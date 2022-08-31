import React from "react";
import { Box, Grid, Button, Typography, List } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";

interface Props {
  image: any;
  buttonColor: String;
  buttonBorder: String;
  description: String;
//   link: String[];
//   linkName: String;
}

export const InnerProjectLayout: FC<Props> = ({
  image,
  buttonColor,
  buttonBorder,
  description,
//   link,
//   linkName,
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
      <Grid item xs={8}>
          <Typography variant='h5' sx={{fontWeight:'700', mt:10, ml:10}}>Projects description</Typography>
          <Typography variant='body1' sx={{fontWeight:'400',mt:5, ml:10}}>{description}</Typography>
      </Grid>
      <Grid item xs={4}>
          <Typography variant='h5' sx={{fontWeight:'700', mt:10}}>Projects Links</Typography>
          <List sx={{mt:5}}>
            {/* <a href={link}>{linkName}</a> */}
          </List>
      </Grid>
    </Grid>
  );
};
