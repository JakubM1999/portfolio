import { AppBar, Box, Toolbar, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const Router = useRouter();

  const handleClick = () => {
    Router.push("/contact");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "white", p: 2, }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{width:'30vh', height:'auto'}}>
            <Image src={logo} alt="logo"/>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <a href="https://www.linkedin.com/in/jakub-mierzejek/">
              <LinkedInIcon fontSize='large' sx={{ color: "black"}} />
            </a>
            <a href="https://www.github.com/jakubm1999">
              <GitHubIcon fontSize='large' sx={{ color: "black" }} />
            </a>
            <Button
              size="large"
              onClick={() => handleClick()}
              sx={{ border: "solid 0.5px black", color: "black"}}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
