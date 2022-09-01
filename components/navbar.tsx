import { AppBar, Box, Toolbar, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const Navbar = () => {
  const Router = useRouter();

  const handleClick = () => {
    Router.push("/contact");
  };

  const animNavbar = {
    before: {
      opacity: 0,
      x: -100,
    },
    after: {
      opacity: 1,
      x: 0,
    },
  };

  const animLinks = {
    icon1: {
      before: {
        opacity: 0,
      },
      after: {
        opacity: 1,
      },
    },
    icon2: {
      before: {
        opacity: 0,
      },
      after: {
        opacity: 1,
      },
    },
    button: {
      before: {
        opacity: 0,
      },
      after: {
        opacity: 1,
      },
    },
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "white", p: 2 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component={motion.div}
            initial={animNavbar.before}
            animate={animNavbar.after}
            sx={{ width: "30vh", height: "auto" }}
          >
            <Image src={logo} alt="logo" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              component={motion.div}
              transition={{ delay: 0.5 }}
              initial={animLinks.icon1.before}
              animate={animLinks.icon1.after}
            >
              <a href="https://www.linkedin.com/in/jakub-mierzejek/">
                <LinkedInIcon fontSize="large" sx={{ color: "black" }} />
              </a>
            </Box>
            <Box
              component={motion.div}
              transition={{ delay: 0.7 }}
              initial={animLinks.icon2.before}
              animate={animLinks.icon2.after}
            >
              <a href="https://www.github.com/jakubm1999">
                <GitHubIcon fontSize="large" sx={{ color: "black" }} />
              </a>
            </Box>
            <Box
              component={motion.div}
              transition={{ delay: 1 }}
              initial={animLinks.button.before}
              animate={animLinks.button.after}
            >
              <Button
                size="large"
                onClick={() => handleClick()}
                sx={{ border: "solid 0.5px black", color: "black" }}
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
