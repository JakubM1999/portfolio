import React from "react";
import cvImg from "../images/cv.png";
import Image from "next/image";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const animation = {
  before: {
    opacity: 0,
    y: -30,
  },
  after: {
    opacity: 1,
    y: 0,
  },
};

export const Cv = () => {
  return (
    <Box
      initial={animation.before}
      animate={animation.after}
      component={motion.div}
      sx={{ width: "90vh", m: 15, border: "solid 0.5px grey" }}
    >
      <Image alt="cv" src={cvImg} />
    </Box>
  );
};
