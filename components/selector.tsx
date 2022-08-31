import { Button, Container, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FC } from "react";
// import { motion, MotionProps } from "framer-motion";
// import styled from "styled-components";

type Props = {
  setContent: any;
};

export const Selector: FC<Props> = ({ setContent }) => {
  const [selected, setSelected] = useState(3);
  // const [change, setChange] = useState(false);

  const options = [
    "RECOMMENDATIONS",
    "CV",
    "ABOUT",
    "PROJECTS",
    "ILLUSTRATIONS",
  ];

  useEffect(() => {
    setContent(options[selected]);
  });

  if (selected < 0) setSelected(options.length - 1);

  if (selected >= options.length) setSelected(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3,
        position: "fixed",
        width: "30vh",
        bottom: 0,
        top: 0,
      }}
    >
      <Container>
        <Button
          onClick={() => {
            setSelected(selected - 1);
            // setChange(change)
          }}
          sx={{ border: "solid 1px black", width: "11vh", color: "black" }}
        >
          <KeyboardArrowUpIcon sx={{ color: "black" }} />
        </Button>
      </Container>

      <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography
            variant='caption'
            // variants={variantText}
            // component={motion.p}
            // className={(styles.change)}
            // transition={{ delay:2 }}
            // animate={{y: [selected - 2] || options[options.length + (selected - 2)]}}
            sx={{
              color:'#CDCDCD',
              letterSpacing: 3,
              filter: "blur(1.5px)",
              fontWeight: "700",
            }}
          >
            {options[selected - 2] || options[options.length + (selected - 2)]}
          </Typography>
        </Box>
        <Box>
          <Typography
          variant='body2'
            //  variants={variantText}
            //  component={motion.p}
            //  className={(styles.change)}
            //  transition={{ delay:2 }}
            //  animate={{y: [selected - 1] || options[options.length + (selected - 1)]}}
            sx={{
              color:'#787878',
              letterSpacing: 3,
              filter: "blur(1px)",
              fontWeight: "700",
            }}
          >
            {options[selected - 1] || options[options.length + (selected - 1)]}
          </Typography>
        </Box>
        <Box>
          <Typography
          variant='body1'
            //  variants={variantText}
            //  component={motion.p}
            //  className={(styles.change)}
            //  transition={{ delay:2 }}
            //  animate={{y: [selected]}}
            sx={{
              fontSize: "24px",
              letterSpacing: 3,
              fontWeight: "700",
            }}
          >
            {options[selected]}
          </Typography>
        </Box>
        <Box>
          <Typography
          variant='body2'
            //  variants={variantText}
            //  component={motion.p}
            //  className={(styles.change)}
            //  transition={{ ease: "easeOut", duration: 2 }}
            //  animate={{ transition: change ? easing : easing}}
            sx={{
              color:'#787878',
              letterSpacing: 3,
              fontWeight: "700",
              filter: "blur(1px)",
            }}
          >
            {options[selected + 1] || options[selected + 1 - options.length]}
          </Typography>
        </Box>
        <Box>
          <Typography
          variant='caption'
            //  variants={variantText}
            //  component={motion.p}
            //  className={(styles.change)}
            //  transition={{ ease: "easeOut", duration: 2 }}
            //  animate={{ transition: change ? easing : easing}}
            sx={{
              color:'#CDCDCD',
              letterSpacing: 3,
              fontWeight: "700",
              filter: "blur(1.5px)",
            }}
          >
            {options[selected + 2] || options[selected + 2 - options.length]}
          </Typography>
        </Box>
      </Container>

      <Container>
        <Button
          onClick={() => {
            setSelected(selected + 1);
          }}
          sx={{ border: "solid 1px black", width: "11vh", color: "black" }}
        >
          <KeyboardArrowDownIcon sx={{ color: "black" }} />
        </Button>
      </Container>
    </Box>
  );
};
