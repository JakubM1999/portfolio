import React from "react";
import { InnerProjectLayout } from "../../components/innerProjectLayout";
import TrackaBanner from "../../images/InnerProjectImgs/trackabanner.png";
import { Grid, Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Code, DesignServices, Commit } from "@mui/icons-material";

const Tracka = () => {
  return (
    <Grid container item xs={12}>
      <InnerProjectLayout
        image={TrackaBanner}
        bannerColor={"#0B1420"}
        bannerBorder={"none"}
        buttonColor={"white"}
        buttonBorder={"solid 0.5px white"}
      />
      <Grid container item xs={12} justifyContent="space-between">
        <Grid container item xs={10} sx={{p:{xl:15, lg:10}}}>
          <Typography sx={{ fontSize:{ xl: "40px", lg: "30px" }, fontWeight:200 }}>
            What is it about?
          </Typography>
          <Typography sx={{ fontSize:{ xl: "40px", lg: "30px" }, fontWeight:200 }}>
            What is it about?
          </Typography>
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
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <a href={"https://github.com/JakubM1999/tracka"}>
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
                    mb: "2vh",
                  }}
                >
                  Project Repository
                </Typography>
              </a>
            </Box>

            <Divider flexItem sx={{ bgcolor: "darkgrey", width: "10vh" }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <a href={"https://github.com/andriandresson/tracka/pull/30"}>
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

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <a href={"https://github.com/andriandresson/tracka/pull/12"}>
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

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <a href={"https://github.com/andriandresson/tracka/pull/64"}>
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
};

export default Tracka;
