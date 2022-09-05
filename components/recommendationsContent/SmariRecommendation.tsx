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
        x:50
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

export const SmariRecommendation = () => {
    return (
        <Grid container xs={12} sx={{ justifyContent: "right" }}>
        <Grid
          container
          item
          sx={{ alignItems: "center", gap: 3, justifyContent: "right" }}
        >
          <Box 
            transition={{delay: 0.6}}
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
              Ellert Smári Kristbergsson
            </Typography>
            <Typography
              color={"grey.700"}
              sx={{ fontSize: { lg: 17, sm: 11 } }}
            >
              Teacher at Vefskóli
            </Typography>
          </Box>
          <Avatar
          transition={{ delay: 0.4}}
          component={motion.div}
          initial={avatarAnim.before}
          animate={avatarAnim.after}
            sx={{
              width: "8vh",
              height: "auto",
              p: 1,
              border: "solid 0.5px lightGrey",
            }}
            src="https://github.com/JakubM1999/portfolio/blob/main/images/tskoli.png?raw=true"
          />
        </Grid>
        <Grid
            transition={{ delay: 0.9}}
            component={motion.div}
            initial={textAnim.before}
            animate={textAnim.after}
          item
          xs={8}
          sx={{
            display: "flex",
            flexDriection: "row",
            gap: 3,
            justifyContent: "right",
          }}
        >
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
            Jakub studied at Vefskólinn in 2021 to 2022 and was active in his
            studies the whole time. It was nice to have him as a student since
            he was not afraid to ask for help whenever needed (a rear but
            important skill to have).
            <br />
            <br /> He was always helpful when his co-students needed help and
            got good feedback from his peers in group works. He had background
            in design but went out of his comfort zone and learned to code as
            well. If you manage to hire him you can consider yourself lucky to
            have him.
          </Typography>
          <Avatar sx={{ width: "8vh", height: "auto", opacity: 0 }} />
        </Grid>
      </Grid>
    )
}

