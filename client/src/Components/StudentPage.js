import React, { useEffect, useState } from "react";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TutorCard from "../Components/TutorCard";
const StudentPage = () => {
  const [tutorsList, setTutorsList] = useState([]);
  const [filter, setFilter] = useState({
    language: "",
    days: [false, false, false, false, false, false, false],
    startTime: "",
    endTime: "",
    duration: "",
    budget: "",
  });
  const [value, setValue] = useState({ min: "", max: "" });
  const [newTutorsList, setNewTutorsList] = useState([]);
  const handleChange1 = (e) => {
    setValue({ ...value, min: e.target.value });
  };

  const handleChange2 = (e) => {
    setValue({ ...value, max: e.target.value });
  };
  
  useEffect(() => {
    axios.get("http://localhost:4000/getAllTutors").then((res) => {
      console.log(res.data);
      setTutorsList(res.data);
      setNewTutorsList(res.data);
    });
  }, []);
  
  const languageChangeHandler = (e) => {
    setFilter({
      ...filter,
      language: e.target.value,
    });
  };
  const dayChangeHandler = (index, e) => {
    // console.log(e.target.value);
    let newDays = filter.days;
    newDays[index] = !newDays[index];
    setFilter({
      ...filter,
      days: newDays,
    });
  };
  const startTimeChangeHandler = (e) => {
    setFilter({ ...filter, startTime: e.target.value });
  };
  const endTimeChangeHandler = (e) => {
    setFilter({ ...filter, endTime: e.target.value });
  };
  const durationChangeHandler = (e) => {
    setFilter({ ...filter, duration: e.target.value });
  };
  const langFilter = (tutor, language) => {
    // let subjects = tutor.subjectsTaught
    for (let i = 0; i < tutor.subjectsTaught.length; i++) {
      if (
        Object.values(tutor.subjectsTaught[i]).find((ele) => ele === language)
      ) {
        return true;
      }
    }
    return false;
  };
  const startTimeFilter=(tutor, sTime)=>{
    console.log(sTime)
    for(let i=0;i<tutor.timeSlot.length;i++){
      let obj1=tutor.timeSlot[i];
      if(
      Object.values(obj1)[1].find(e=>e.startTime===filter.startTime)){
        return true;
      }
    }
    return false;
  }
  const makeFilter = () => {
    //language
    let newList = newTutorsList;
    newList = newList.filter((tutor) => {
      return langFilter(tutor, filter.language);
    });
    //day filter
    // let dayIndexes=[];
    // for(let i=0;i<7;i++){
    //   if(filter.days[i]===true){
    //     dayIndexes.push(i);
    //   }
    // }

    // newList=newTutorsList.filter((tutor)=>{
    //   tutor.timeSlot
    // })
    //start time filter
    newList = newList.filter((tutor) => {
      return startTimeFilter(tutor, filter.startTime);
    });
    //budget filter
    
    console.log(newList)
  };
  return (
    <div>
      {newTutorsList.map((tutor, index) => {
        return <TutorCard tutor={tutor} key={index} filter={filter}/>;
      })}
      <h5>Filter</h5>
      <label htmlFor="language">Language</label>
      <input
        type="text"
        name="language"
        value={filter.language}
        onChange={languageChangeHandler}
      />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Monday"
          onChange={(e) => {
            dayChangeHandler(0, e);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Tuesday"
          onChange={(e) => {
            dayChangeHandler(1, e);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Wednesday"
          onChange={(e) => {
            dayChangeHandler(2, e);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Thursday"
          onChange={(e) => {
            dayChangeHandler(3, e);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Friday"
          onChange={(e) => {
            dayChangeHandler(4, e);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Satday"
          onChange={(e) => {
            dayChangeHandler(5, e);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Sunday"
          onChange={(e) => {
            dayChangeHandler(6, e);
          }}
        />
      </FormGroup>
      <label htmlFor="Start Time">Start Time</label>
      <input
        type="time"
        name="startTime"
        value={filter.startTime}
        onChange={startTimeChangeHandler}
      />
      <label htmlFor="End Time">End Time</label>
      <input
        type="time"
        name="endTime"
        value={filter.endTime}
        onChange={endTimeChangeHandler}
      />
      <label htmlFor="Duration">Duration Time in minutes</label>
      <input
        type="text"
        name="duration"
        value={filter.duration}
        onChange={durationChangeHandler}
      />
      <label htmlFor="Budget">Apply Budget</label>
      <input
        type="text"
        name="min value"
        value={value.min}
        placeholder="min price"
        onChange={handleChange1}
      />
      <input
        type="text"
        name="max value"
        value={value.max}
        placeholder="max price"
        onChange={handleChange2}
      />
      <button onClick={makeFilter}>Show filter</button>
    </div>
  );
};

export default StudentPage;
