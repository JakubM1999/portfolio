//FUNCTIONALITY
import React from "react";
import { Typography, Button, Box } from "@mui/material";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

//IMAGE
import hangryImg from "../../images/ProjectCardImgs/hangry.png";

const CardContainer = styled(Button)`
  & {
    color: grey;
    transition: 0.3s;
    border: solid 3.5px rgba(0, 0, 0, 0);
  }
  &:hover {
    border: solid 3.5px rgba(0, 0, 0, 200);
    cursor: pointer;
    border-radius: 17px;
  }
`;

const thirdColumnAnim = {
  before: {
    opacity: 0,
    x: -420,
  },
  after: {
    opacity: 1,
    x: 0,
  },
};

export const HangryCard = () => {
  const Router = useRouter();

  return (
    <Box
      initial={thirdColumnAnim.before}
      animate={thirdColumnAnim.after}
      transition={{ delay: 0.5 }}
      component={motion.div}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#7A7A7A",
        gap: 1,
      }}
    >
      <CardContainer
        onClick={() => {
          Router.push("./projects/hangry");
        }}
      >
        <Image alt="tracka app" src={hangryImg} />
      </CardContainer>
      <Typography
        sx={{ textAlign: "center", letterSpacing: "2px", fontSize:{lg:'17px', sm:'12px'} }}
      >
        FRONT-END & DESIGN
      </Typography>
    </Box>
  );
};
