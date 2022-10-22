import React from "react";
import { InnerProjectLayout } from "../../components/innerProjectLayout";
import ReactNativeBanner from "../../images/InnerProjectImgs/reactnativebasicsbanner.png";
import { Grid, Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Code, DesignServices, Commit } from "@mui/icons-material";

const ReactNativeBasics = () => {
    return (
        <Grid container item xs={12}>
          <InnerProjectLayout
            image={ReactNativeBanner}
            bannerColor={"#003E46"}
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
                  <a href={"https://github.com/JakubM1999/ReactNativeApp"}>
                    <Button
                      sx={{
                        color: "black",
                        fontSize: "6.5vh",
                        borderRadius: "999px",
                      }}
                    >
                      <Code fontSize="inherit" />
                    </Button>
                    <Typography
                      sx={{
                        fontSize: { xl: "13px", lg: "8px" },
                        fontStyle: "italic",
                        mb:'2vh'
                      }}
                    >
                      Project Repository
                    </Typography>
                  </a>
                </Box>
    
                <Divider flexItem sx={{bgcolor:'darkgrey', width:'10vh'}}/>
    
                <Box sx={{ display: "flex", flexDirection: "column", textAlign:'center'}}>
                  <a href={"https://github.com/JakubM1999/ReactNativeApp/commit/ba203bb515569328bc8573a98613edd5f689e543"}>
                    <Button
                      sx={{
                        color: "black",
                        fontSize: "6.5vh",
                        borderRadius: "999px",
                      }}
                    >
                      <Commit fontSize="inherit" />
                    </Button>
                    <Typography
                      sx={{
                        fontSize: { xl: "13px", lg: "8px" },
                        fontStyle: "italic",
                      }}
                    >
                      My Commit
                    </Typography>
                  </a>
                </Box>
    
              </Box>
            </Grid>
          </Grid>
        </Grid>
      );
}

export default ReactNativeBasics