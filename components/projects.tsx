//FUNCTIONALITY
import React from "react";
import { Container, Box } from "@mui/material";

//CARDS
import { TrackaCard } from './ProjectCards/tracka'
import { PortfolioCard } from "./ProjectCards/portfolio";
import { EverBladeCard } from "./ProjectCards/everblade";
import { FræCard } from "./ProjectCards/fræ";
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
        gap: 15,
        mb: 20,
        mt: 20,
        justifyContent: "center",
        width: "120vh",
      }}
    >
      <Container sx={{ display: "flex", gap: 15, justifyContent: "center" }}>
        
        <TrackaCard />
       <PortfolioCard />
        <EverBladeCard />

      </Container>

      <Container sx={{ display: "flex", gap: 15, justifyContent: "center" }}>

        <FræCard />
        <CssBasicsCard />
        <JsBasicsCard />

      </Container>

      <Container sx={{ display: "flex", gap: 15, justifyContent: "center" }}>
        <HtmlBasicsCard />
        <ReactNativeBasicsCard />
        <HangryCard />
      </Container>
    </Box>
  );
};
