//FUNCTIONALITY
import React from "react";
import { Typography, Button, Box } from "@mui/material";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

//IMAGE
import fraeImg from "../../images/ProjectCardImgs/fræ.png";

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

const firstColumnAnim = {
  before: {
    opacity: 0,
    x: -100,
  },
  after: {
    opacity: 1,
    x: 0,
  },
};

export const FraeCard = () => {
  const Router = useRouter();

  return (
    <Box
      initial={firstColumnAnim.before}
      animate={firstColumnAnim.after}
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
          Router.push("./projects/frae");
        }}
      >
        <Image alt="tracka app" src={fraeImg} />
      </CardContainer>
      <Typography
        sx={{ textAlign: "center", letterSpacing: "2px", fontSize:{lg:'17px', sm:'12px'} }}
      >
        DESIGN
      </Typography>
    </Box>
  );
};
