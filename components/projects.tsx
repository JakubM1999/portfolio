//FUNCTIONALITY
import React from "react";
import { Box, Container } from "@mui/material";

//CARDS
import { TrackaCard } from './ProjectCards/tracka'
import { PortfolioCard } from "./ProjectCards/portfolio";
import { EverBladeCard } from "./ProjectCards/everblade";
import { FraeCard } from "./ProjectCards/frae";
import { CssBasicsCard } from "./ProjectCards/cssbasics";
import { JsBasicsCard } from "./ProjectCards/jsbasics";
import { HtmlBasicsCard } from "./ProjectCards/htmlbasics";
import { ReactNativeBasicsCard } from "./ProjectCards/reactnativebasics";
import { HangryCard } from "./ProjectCards/hangry";


export const Projects = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        mb: 10,
        mt: 20,
        justifyContent:'center'
      }}
    >
      <Box sx={{ display: "flex",width:'110vh', gap:15, justifyContent: "center" }}>
        
        <TrackaCard />
       <PortfolioCard />
        <EverBladeCard />

      </Box>

      <Box sx={{ display: "flex",width:'110vh', gap:15, justifyContent: "center" }}>

        <FraeCard />
        <CssBasicsCard />
        <JsBasicsCard />

      </Box>

      <Box sx={{ display: "flex",width:'110vh', gap:15, justifyContent: "center" }}>
        <HtmlBasicsCard />
        <ReactNativeBasicsCard />
        <HangryCard />
      </Box>
    </Box>
  );
};
