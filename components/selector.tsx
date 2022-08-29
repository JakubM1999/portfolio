import { Button, Container, List, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FC } from "react";

type Props = {
  items: string[];
  onSelect: (vaule: string) => void;
  value: string;
};

export const Selector = () => {
  const [selected, setSelected] = useState("");


  const handleSelecting = () => {};

  
  return (
    <Container sx={{display:'flex', flexDirection: 'column',justifyContent:'center'}} >
      <Container>
        <Button sx={{ border: "solid 1px black", width: 136, color: "black" }}>
          <KeyboardArrowUpIcon sx={{ color: "black" }} />
        </Button>
      </Container>

      <Container>
        <li
            value={selected}
            onChange={(e) => {
            const selectedItem = (e.target as HTMLInputElement).value;
            setSelected(selectedItem);
          }}
        >
          <option value={"RECOMMENDATIONS"}>RECOMMENDATIONS</option>
          <option value={"CV"}>CV</option>
          <option selected value={"ABOUT"}>ABOUT</option>
          <option value={"PROJECTS"}>PROJECTS</option>
          <option value={"ILLUSTRATIONS"}>ILLUSTRATIONS</option>
        </li>
      </Container>
      
      <Container>
        <Button sx={{ border: "solid 1px black", width: 136, color: "black" }}>
          <KeyboardArrowDownIcon sx={{ color: "black" }} />
        </Button>
      </Container>
      {selected}
    </Container>
  );
};

// const selectItems = [
  //     {item: 'RECOMMENDATIONS'},
  //     {item: 'CV'},
  //     {item: 'ABOUT'},
  //     {item: 'PROJECTS'},
  //     {item: 'ILLUSTRATIONS'},
  // ]
  // const listItems = selectItems.map((items) => {return <Typography key={items.item}>{items.item}</Typography>})
