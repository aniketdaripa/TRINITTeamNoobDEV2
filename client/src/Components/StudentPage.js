import React, { useEffect, useState } from "react";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TutorCard from "../Components/TutorCard";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from '@mui/material/Slider';
import TutBox from "./TutBox";
const topLanguages = [
  "All",
  "English",
  "Mandarin Chinese",
  "Hindi",
  "Spanish",
  "French",
  "Standard Arabic",
  "Bengali",
  "Russian",
  "Portuguese",
  "Urdu",
];

const Ratings = ["All", "1", "2", "3", "4", "5"];
const Prices = [500, 50, 100,150,200,250,300,350,400,450];
const StudentPage = () => {
  const [tutorsList, setTutorsList] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState("All");
  const [filterRating, setFilterRating] = useState("All");
  const [filterPrice, setFilterPrice] = useState(50);

  useEffect(() => {
    axios.get("http://localhost:4000/getAllTutors").then((res) => {
      console.log(res.data);
      setTutorsList(res.data);
    });
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
    <Box>Filters</Box>
      <Box display={"flex"} justifyContent={"space-between"} width={"80vw"} alignItems={"center"} >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Language"
            sx={{ width: "20ch" }}
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
          >
            {topLanguages.map((data) => {
              return <MenuItem value={data}>{data}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Rating</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Rating"
            sx={{ width: "20ch" }}
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
          >
            {Ratings.map((data) => {
              return <MenuItem value={data}>{data}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Price"
            sx={{ width: "20ch" }}
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
          >
            {Prices.map((data) => {
              return <MenuItem value={data}>More than ${data}</MenuItem>;
            })}
          </Select>
        </FormControl>

      </Box>
      <Box>
        {tutorsList.map((data)=>{
          return <TutBox data={data} />
        })}
      </Box>
    </Box>
  );
};

export default StudentPage;
