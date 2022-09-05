import React from 'react'
import {Avatar, Grid, Box, Typography} from '@mui/material'

export const KaiserRecommendation = () => {
    return (
        <Grid container xs={12}>
        <Grid container item sx={{ alignItems: "center", gap: 3 }}>
          <Avatar
            sx={{
              width: "8vh",
              height: "auto",
              p: 1,
              border: "solid 0.5px lightGrey",
            }}
            src="https://github.com/JakubM1999/portfolio/blob/main/images/kaiser.png?raw=true"
          />
          <Box>
            <Typography
              sx={{
                fontSize: { lg: 25, sm: 17 },
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Andri Andrésson
            </Typography>
            <Typography
              color={"grey.700"}
              sx={{ fontSize: { lg: 17, sm: 11 } }}
            >
              COO at Sendiráðið
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDriection: "row",
            gap: 3,
          }}
        >
          <Avatar sx={{ width: "8vh", height: "auto", opacity: 0 }} />
          <Typography
            color={"grey.700"}
            sx={{
              bgcolor: "#FFF7F9",
              p: 3,
              fontSize: { lg: 20, sm: 12 },
              borderRadius: 2,
              fontStyle: "italic",
              fontWeight: 100,
            }}
          >
            To Whom It May Concern: I would like to write a letter of support
            and recommendation for the following individuals who participated as
            a team in the European Space Agency’s CASSINI Hackathon that took
            place the weekend of 5-7 Nov 2021 at Reykjavik University: 
            <br />
            <br />
            • Attila Balatoni
            <br />
            • Jakub Mierzejek
            <br />
            • Kristrún Úlfarsdóttir
            <br />
            • Tinna Hallsdóttir
            <br />
            • Úlfur Þór Böðvarsson
            <br />
            • Þorbergur Haraldsson 
            <br />
            <br />
            The event’s objective was to leverage space-based data & signals to
            understand and protect the Arctic region. One of three challenges
            under the theme of Connecting the Arctic could be addressed: safe
            passage at sea, life on land, and caring for our wildlife. Of all
            the teams I had the opportunity to mentor, this team was my clear
            favorite. Their hard work, discipline, idea development,
            coordination, teamwork, and final presentation far exceeded my
            expectations.<br /><br /> In my opinion, this group’s efforts and final product
            were on-par with industry professionals. As they further their
            professional experience, I enthusiastically recommend your
            consideration of their talents. As the developer of the Reykjavik
            Institute – a supercomputing and AI research lab for space,
            sustainability, and environmental studies – I have the pleasure of
            observing and managing many early career professionals. These
            individuals earned our attention and respect. I think you will find
            them equally as impressive.
          </Typography>
        </Grid>
      </Grid>
    )
}