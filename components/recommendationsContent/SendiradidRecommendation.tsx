import React from 'react'
import {Avatar, Grid, Box, Typography} from '@mui/material'
import { motion } from 'framer-motion'

const avatarAnim = {
    before: {
        opacity:0,
    },
    after: {
        opacity:1,
    }
}

const titleAnim = {
    before: {
        opacity:0,
        x:-50
    },
    after: {
        opacity:1,
        x:0
    }
}

const textAnim = {
    before: {
        opacity: 0,
    },
    after: {
        opacity:1,
    }
}

export const SendiradidRecommendation = () => {
    return (
        <Grid container xs={12}>
        <Grid container item sx={{ alignItems: "center", gap: 3 }}>
          <Avatar
          component={motion.div}
          initial={avatarAnim.before}
          animate={avatarAnim.after}
            sx={{ width: "8vh", height: "auto" }}
            src="https://github.com/JakubM1999/portfolio/blob/main/images/sendiradid.png?raw=true"
          />
          <Box
          component={motion.div}
          initial={titleAnim.before}
          animate={titleAnim.after}>
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
        transition={{ delay: 0.4}}
        component={motion.div}
        initial={textAnim.before}
        animate={textAnim.after}
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
            When I think of Jakub, I picture an independent, artistic frontend
            developer.
            <br />
            <br /> He has outstanding communication skills, is well-organized,
            and makes a great team member. Jakub delivered his work on time,
            finished the summer internship project to a high degree, and showed
            excellent presentational skills.
          </Typography>
        </Grid>
      </Grid>
    )
}