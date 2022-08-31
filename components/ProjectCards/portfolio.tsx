//FUNCTIONALITY
import React from "react";
import { Typography, Button, Box } from "@mui/material";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

//IMAGE
import portfolioImg from "../../images/portfolio.png";


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


export const PortfolioCard = () => {

    const Router = useRouter();

    return (
       <Box
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
              Router.push("./projects/portfolio");
            }}
          >
            <Image alt="tracka app" src={portfolioImg} />
          </CardContainer>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            FRONT-END & DESIGN
          </Typography>
        </Box>
    )
}