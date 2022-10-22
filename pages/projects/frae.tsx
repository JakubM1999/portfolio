import React from "react";
import { InnerProjectLayout } from "../../components/innerProjectLayout";
import FraeBanner from "../../images/InnerProjectImgs/fraebanner.png";
import { Grid, Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Code, DesignServices, Commit } from "@mui/icons-material";

const Frae = () => {
    return (
        <Grid container item xs={12}>
          <InnerProjectLayout
            image={FraeBanner}
            bannerColor={"#30361E"}
            bannerBorder={"none"}
            buttonColor={"white"}
            buttonBorder={"solid 0.5px white"}
          />
          <Grid container item xs={12} justifyContent="space-between">
            <Grid
              container
              item
              xs={10}
              justifyContent="flex-start"
            >
              <Typography>What is it about?</Typography>
            </Grid>
            <Grid
              item
              container
              xs={1}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "calc(100vh - 24.3vh)" }}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "fixed",
                  flexDirection: "column",
                  gap: "1.5vh",
                  alignItems:'center'
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", textAlign:'center'}}>
                  <a href={"https://www.figma.com/file/cBAzOTyemRP3hK4afAy4HD/FR%C3%86?node-id=51%3A604"}>
                    <Button
                      sx={{
                        color: "black",
                        fontSize: "6.5vh",
                        borderRadius: "999px",
                      }}
                    >
                      <DesignServices fontSize="inherit" />
                    </Button>
                    <Typography
                      sx={{
                        fontSize: { xl: "13px", lg: "8px" },
                        fontStyle: "italic",
                      }}
                    >
                      Project Design
                    </Typography>
                  </a>
                </Box>
    
              </Box>
            </Grid>
          </Grid>
        </Grid>
      );
}

export default Frae