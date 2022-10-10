import React from "react";
import { InnerProjectLayout } from "../../components/innerProjectLayout";
import TrackaBanner from "../../images/InnerProjectImgs/trackabanner.png";
import { Grid, Typography, List } from "@mui/material";

const Tracka = () => {
  return (
    <Grid container>
     <InnerProjectLayout 
        image={TrackaBanner}
        buttonColor={"white"}
        buttonBorder={"solid 0.5px white"}
        />;
         <Grid item xs={6}>
          <Typography variant='h5' sx={{fontWeight:'700', mt:10, ml:10}}>Projects description</Typography>
          <Typography variant='body1' sx={{fontWeight:'400',mt:5, ml:10}}></Typography>
      </Grid>
      <Grid item spacing={12} xs={2}>
          <Typography variant='h5' sx={{fontWeight:'700', mt:10}}>Links</Typography>
          <List sx={{mt:5}}>
          </List>
      </Grid>
    </Grid>
  )
};

export default Tracka;

