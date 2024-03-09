import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


export default function TutorForm() {
  const [tutorData, setTutorData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
    price: {
      45: "",
      60: "",
      90: "",
    },
    subjectTaught: {
      subject: "",
      level: "",
    },
    timeSlot: [
      { day: "monday", slot: [] },
      { day: "tuesday", slot: [] },
      { day: "wednesday", slot: [] },
      { day: "thursday", slot: [] },
      { day: "friday", slot: [] },
      { day: "saturday", slot: [] },
      { day: "sunday", slot: [] },
    ],
  });
  const [prices, setPrices] = useState({
    45: "",
    60: "",
    90: "",
  });
  const [subjectTaught, setSubjectTaught] = useState({
    subject: "",
    level: "",
  });
  const [sampleTimeSlot,setTimeSlot]=useState({
    startTime:"",
    endTime:"",
    duration:""
  })
  const nameChangeHandler = (e) => {
    setTutorData({ ...tutorData, name: e.target.value });
  };
  const emailChangeHandler = (e) => {
    setTutorData({ ...tutorData, email: e.target.value });
  };
  const phoneChangeHandler = (e) => {
    setTutorData({ ...tutorData, phoneNumber: e.target.value });
  };
  const descriptionChangeHandler = (e) => {
    setTutorData({ ...tutorData, description: e.target.value });
  };
  const priceChangeHandler1 = (e) => {
    setPrices({ ...prices, 45: e.target.value });
  };
  const priceChangeHandler2 = (e) => {
    setPrices({ ...prices, 60: e.target.value });
  };
  const priceChangeHandler3 = (e) => {
    setPrices({ ...prices, 90: e.target.value });
    setTutorData({ ...tutorData, price: prices });
  };
  const subjectTaughtChangeHandler1 = (e) => {
    setSubjectTaught({
      ...subjectTaught,
      subject: e.target.value,
    });
  };
  const subjectTaughtChangeHandler2 = (e) => {
    setSubjectTaught({
      ...subjectTaught,
      level: e.target.value,
    });
  };
  const addSubjectHandler=()=>{
    setTutorData({
      ...tutorData,
      subjectTaught:subjectTaught
    })
  }
  const timeSlotChangeHandler1 = (e) => {
    setTimeSlot({
      ...sampleTimeSlot,
      startTime:e.target.value
    })
  };
  const timeSlotChangeHandler2 = (e) => {
    setTimeSlot({
      ...sampleTimeSlot,
      endTime:e.target.value
    })
  };
  const timeSlotChangeHandler3 = (e) => {
    setTimeSlot({
      ...sampleTimeSlot,
      duration:e.target.value
    })
  };
  const addtimeSlotHandler=(index)=>{ 
    let newTimeSlot=tutorData.timeSlot;
    newTimeSlot[index].slot.push(sampleTimeSlot)
    setTutorData({
      ...tutorData, 
      timeSlot:newTimeSlot
    })
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    // console.log(tutorData.timeSlot[0].slot)
    const res = await axios({
      method: "post",
      url: "http://localhost:4000/saveTutorData",
      data: tutorData,
    });
  }
  return (
    <FormStyled>
      <form onSubmit={submitHandler}>
        <div className="FormContent">
        <label for="name">Name</label>
        <input
          placeholder="Name"
          type="text"
          onChange={nameChangeHandler}
          value={tutorData.name}
        />
        <label for="email">Email</label>
        <input
          placeholder="Email"
          type="text"
          onChange={emailChangeHandler}
          value={tutorData.email}
        />
        <label for="phoneNumber">PhoneNumber</label>
        <input
          placeholder="phoneNumber"
          type="text"
          onChange={phoneChangeHandler}
          value={tutorData.phoneNumber}
        />
        <label for="description">Description</label>
        <input
          placeholder="description"
          type="text"
          onChange={descriptionChangeHandler}
          value={tutorData.description}
        />
        <label for="price">Price</label>
        <input
          placeholder="for 45 minutes"
          type="text"
          onChange={priceChangeHandler1}
          value={prices[45]}
        />
        <input
          placeholder="for 60 minutes"
          type="text"
          onChange={priceChangeHandler2}
          value={prices[60]}
        />
        <input
          placeholder="for 90 minutes"
          type="text"
          onChange={priceChangeHandler3}
          value={prices[90]}
        />
        <label for="subjectTaught">subjectTaught</label>
        <input
          placeholder="subjectTaught"
          type="text"
          onChange={subjectTaughtChangeHandler1}
          value={subjectTaught.subject}
        />
        <input
          placeholder="level"
          type="text"
          onChange={subjectTaughtChangeHandler2}
          value={subjectTaught.level}
        />
        <button onClick={addSubjectHandler}>Add Subject</button>
        <label for="TimeSlot" >TimeSlot</label>
        {[
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday",
        ].map((day, index) => {
          return (
            <>
              <label for={`${day}-start-time`} className="TimeSlot">{`${day} Start time`}</label>
              <input
                 id={`${day}-start-time`}
                placeholder={`${day} Start time`}
                type="time"
                onChange={timeSlotChangeHandler1}
                value={sampleTimeSlot.startTime}
                
              />
               <label for={`${day}-end-time`} className="TimeSlot">{`${day} End time`}</label>
              <input
                placeholder={`${day} end time`}
                type="time"
                onChange={timeSlotChangeHandler2}
                value={sampleTimeSlot.endTime}
              />
              <label for={`${day}-class-duration`} className="TimeSlot">{`${day} class duration`}</label>
              <input
                placeholder="45 minutes/60 minutes/90 minutes"
                type="text"
                onChange={timeSlotChangeHandler3}
                value={sampleTimeSlot.duration}
              />
              <button onClick={e=>addtimeSlotHandler(index)} >Add+</button>
            </>
          );
        })}
        <button type="submit" >Submit</button>
        </div>
        
      </form>
    </FormStyled>
  );
}
const FormStyled = styled.div`
   
  .FormContent{
    display: flex;
    flex-direction: column;
    width: 45vw;
    margin: auto;
    padding: 20px;
    border: 2px solid black;
    background-color: black;
    color:white;
    border-radius: 30px;
    /* flex: 1; */
  }
  input , select , option{
    margin: 10px;
    padding: 1rem;
    width: 20vw;
    border-radius: 7px;
    border: 1px solid ;
  }
  input:hover{
    border: 2px solid black;
  }
  span{
    font-size: 1rem;
    display: block;
    
  }
  label{
    font-size: 1rem;
  }
  .TimeSlot{
    font-size: medium;
  }
  button {
 --color: #00A97F;
 --color2: rgb(10, 25, 30);
 padding: 0.8em 1.75em;
 background-color: transparent;
 border-radius: 6px;
 border: .3px solid var(--color);
 transition: .5s;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 z-index: 1;
 font-weight: 300;
 font-size: 17px;
 font-family: 'Roboto', 'Segoe UI', sans-serif;
 text-transform: uppercase;
 color: var(--color);
 /* margin: 0.3rem; */
 width: 40vw;
 margin: auto;
 margin-top: 0.3rem;
 margin-bottom: 0.3rem;
}

button::after, button::before {
 content: '';
 display: block;
 height: 100%;
 width: 100%;
 transform: skew(90deg) translate(-50%, -50%);
 position: absolute;
 inset: 50%;
 left: 25%;
 z-index: -1;
 transition: .5s ease-out;
 background-color: var(--color);
}

button::before {
 top: -50%;
 left: -25%;
 transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

button:hover::before {
 transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

button:hover::after {
 transform: skew(45deg) translate(-50%, -50%);
}

button:hover {
 color: var(--color2);
}

button:active {
 filter: brightness(.7);
 transform: scale(.98);
}
`;