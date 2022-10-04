import { Button, Container, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  setContent: any;
};

// const textVariants = {
//   upUp: {
//     filter: "blur(1.5px)",
//     color:'#CDCDCD',
//     y:0
//   }, 
//   upMiddle: {
//     filter: "blur(1px)",
//     color:'#787878',
//     y:0
//   },
//   current: {
//     filter: "blur(0px)",
//     color:'black',
//     y:0
//   },
//   downMiddle: {
//     filter: "blur(1px)",
//     color:'#787878',
//     y:0
//   },
//   downDown: {
//     filter: "blur(1.5px)",
//     color:'#CDCDCD',
//     y:0
//   }
// }

export const Selector: FC<Props> = ({ setContent }) => {
  const [selected, setSelected] = useState(0);
  
  const options = [
    "RECOMMENDATIONS",
    "CV",
    "ABOUT",
    "PROJECTS",
    "ILLUSTRATIONS",
  ];

  // const styles = [
  //   {...textVariants.upUp},
  //   {...textVariants.upMiddle},
  //   {...textVariants.current},
  //   {...textVariants.downMiddle},
  //   {...textVariants.downDown}
  // ]

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
            // textVariants.upUp.y -= 45;
            // textVariants.upMiddle.y -= 45;
            // textVariants.current.y -= 45;
            // textVariants.downMiddle.y -= 45;
            // textVariants.downDown.y -= 145;
          }}
          sx={{ border: "solid 1px black", width: "14vh", color: "black" }}
        >
          <KeyboardArrowUpIcon sx={{ color: "black" }} />
        </Button>
      </Container>

      <Container sx={{ display: "flex", flexDirection: "column", gap: 2.5, m:1}}>
          <Typography
            // component={motion.p}
            // initial={textVariants.upUp}
            // animate={styles[0]}
            // transition={{type: "spring", stiffness: 100}}
            sx={{
              filter: "blur(1.5px)",
              color:'#CDCDCD',
              fontSize: { lg:12, sm:7 },
              letterSpacing: 3,
              fontWeight: "500",
            }}
          >
            {options[selected - 2] || options[options.length + (selected - 2)]}
          </Typography>

          <Typography
            // component={motion.p}
            // initial={textVariants.upMiddle}
            // animate={styles[1]}
            // transition={{type: "spring", stiffness: 100}}
            sx={{
              filter: "blur(1px)",
              color:'#787878',
              fontSize: { lg:17, sm:9 },
              letterSpacing: 3,
              fontWeight: "600",  
            }}
          >
            {options[selected - 1] || options[options.length + (selected - 1)]}
          </Typography>

          <Typography
            // component={motion.p}
            // initial={textVariants.current}
            // animate={styles[2]}
            // transition={{type: "spring", stiffness: 100}}
            sx={{
                filter: "blur(0px)",
                color:'black',
                fontSize: { lg:22, sm:16 },
                letterSpacing: 3,
                fontWeight: "700",  
            }}
          >
            {options[selected]}
          </Typography>

          <Typography
          // component={motion.p}
          // initial={textVariants.downMiddle}
          // animate={styles[3]}
          // transition={{type: "spring", stiffness: 100}}
            sx={{
              filter: "blur(1px)",
              color:'#787878',
              fontSize: { lg:17, sm:9 },
              letterSpacing: 3,
              fontWeight: "600",  
            }}
          >
            {options[selected + 1] || options[selected + 1 - options.length]}
          </Typography>

          <Typography
          // component={motion.p}
          // initial={textVariants.downDown}
          // animate={styles[4]}
          // transition={{type: "spring", stiffness: 100}}
            sx={{
              filter: "blur(1.5px)",
              color:'#CDCDCD',
              fontSize: { lg:12, sm:7 },
              letterSpacing: 3,
              fontWeight: "500",  
            }}
          >
            {options[selected + 2] || options[selected + 2 - options.length]}
          </Typography>
      </Container>

      <Container>
        <Button
          onClick={() => {
            setSelected(selected + 1);
          }}
          sx={{ border: "solid 1px black", width: "14vh", color: "black" }}
        >
          <KeyboardArrowDownIcon sx={{ color: "black" }} />
        </Button>
      </Container>
    </Box>
  );
};
