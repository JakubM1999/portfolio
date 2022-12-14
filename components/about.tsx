import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Me from '../images/me.png'
import Image from "next/image";
import { motion } from 'framer-motion'

const animation = {
  before: {
    opacity: 0,
    y: -50,
  },
  after: {
    opacity: 1,
    y: 0,
  },
};

export const About = () => {
  return (
    <Box
    initial={animation.before}
      animate={animation.after}
      component={motion.div}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Box sx={{justifyContent:'center', width: '27.5%', alignSelf:'end',mt:4}}>
        <Image src={Me}
               priority
               alt="me"
               />
      </Box>
      <Container sx={{display:'flex', flexDirection:'column', gap: 1.5, width:'70vh', mb:3}}>
        <Typography sx={{fontSize:{lg:'56px', sm:'32px'}}} >Hello</Typography>
        <Typography color='grey.800' sx={{fontSize:{lg:'18px', sm:'11px'}}} >
          My career started as I wanted to become graphic designer since from
          young age I was good at drawing, I was very motivated after first
          semester of graphic design to learn more so I applied to couple of
          printing companies as a summer job and got a job in Pixel as a
          receptionist. My tasks were a bit diverse since I was handling smaller
          projects like e.g. print brochures, small books, posters,
          architectural drawings and finishing by binding or laminating them for
          companies as well as for individuals. I was using adobe softwares like
          InDesing and photoshop to prepare some project for print if there was
          a need, I was also doing a bit of handy tasks like putting photos on a
          canvas(Strigamyndir).
          </Typography>

          <Typography color='grey.800'  sx={{fontSize:{lg:'18px', sm:'11px'}}}>
          Pixel gave me opportunity when the pandemic
          started to finish my contract which was required in order to finish my
          degree as a graphic designer (Sveinspr??f) which then allowed me to
          develop my knowledge and skills even further as it gave me a
          possibility to apply to Vefsk??li and learn about web development, I
          learned about frontend development with HTML, CSS, JavaScript and then
          React, working together in groups as a team, IU and UX design using
          Figma (which I was familiar with because of my graphic design
          experience) as well as some basics of backend development.
          </Typography>

          <Typography color='grey.800'  sx={{fontSize:{lg:'18px', sm:'11px'}}}>
          As part of education in Vefsk??li the last project is the internship in a company
          that I and other students choose as a client for whom we would create
          a real project and experience how it is to work in a real environment.
          I chose Sendir????i?? where I was position as frontend developer on
          Tracka application and learned about nx workspace, more react,
          material-ui library and bit of typescript and styled-components, which
          was very educational for me and motivated me to continue develop
          myself and my skill.
          </Typography>
      </Container>
    </Box>
  );
};
