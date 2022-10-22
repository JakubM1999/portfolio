import React from "react";
import { InnerProjectLayout } from "../../components/innerProjectLayout";
import PortfolioBanner from "../../images/InnerProjectImgs/portfoliobanner.png";
import { Grid, Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Code, DesignServices, Commit } from "@mui/icons-material";


const Portfolio = () => {
    return (
        <Grid container item xs={12}>
          <InnerProjectLayout
            image={PortfolioBanner}
            bannerColor={"#fffff"}
            bannerBorder={"solid 0.5px black"}
            buttonColor={"black"}
            buttonBorder={"solid 0.5px black"}
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
                  <a href={"https://github.com/JakubM1999/portfolio"}>
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
                      }}
                    >
                      Project Repository
                    </Typography>
                  </a>
                </Box>
    
                <Box sx={{ display: "flex", flexDirection: "column", textAlign:'center'}}>
                  <a href={"https://www.figma.com/file/xzDLJEU8yeUcEhSUrB2vgB/Portfolio?node-id=29%3A5985"}>
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
                        mb:'2vh'
                      }}
                    >
                      Project Design
                    </Typography>
                  </a>
                </Box>
    
                <Divider flexItem sx={{bgcolor:'darkgrey', width:'10vh'}}/>
    
                <Box sx={{ display: "flex", flexDirection: "column", textAlign:'center'}}>
                  <a href={"https://github.com/JakubM1999/portfolio/pull/4"}>
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
                      My Top Commit 1
                    </Typography>
                  </a>
                </Box>
    
                <Box sx={{ display: "flex", flexDirection: "column", textAlign:'center'}}>
                  <a href={"https://github.com/JakubM1999/portfolio/pull/15"}>
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
                      My Top Commit 2
                    </Typography>
                  </a>
                </Box>
    
                <Box sx={{ display: "flex", flexDirection: "column", textAlign:'center'}}>
                  <a href={"https://github.com/JakubM1999/portfolio/pull/3"}>
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
                      My Top Commit 3
                    </Typography>
                  </a>
                </Box>
    
              </Box>
            </Grid>
          </Grid>
        </Grid>
      );
}

export default Portfolio