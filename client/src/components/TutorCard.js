import React from "react";

const TutorCard = (props) => {
  return (
    <div
      style={{
        height: "30vh",
        width: "40vw",
        border: "2px solid gray",
        overflowY: "scroll",
      }}
    >
      <h4>{props.tutor.name} </h4>
      <h5>{props.tutor.description}</h5>
      <h5>
        prices : 45 min: {props.tutor.price[45]},60 min: {props.tutor.price[60]}
        ,90 min: {props.tutor.price[90]}
      </h5>
      <h5>
        Subject Taught: {props.tutor.subjectsTaught[0].language} with a level of{" "}
        {props.tutor.subjectsTaught[0].level}
      </h5>
      <h5>Availability</h5>
      {props.tutor.timeSlot.map((session, index) => {
        return (
          <div key={index}>
            <h5>
              {session.day} :{" "}
              {session.slot.map((s, index) => {
                return (
                  <div>
                    {s.enrolledStudent.email.length === 0 && (
                      <div>
                        <h3>Start Time: {s.startTime}</h3>
                        <h3>End Time: {s.endTime}</h3>
                        <h3>Duration: {s.duration} minutes</h3>
                        <button>book a session</button>
                      </div>
                    )}
                    {s.enrolledStudent.email.length >0 && (
                      <h5>Not Available</h5>
                    )}
                  </div>
                );
              })}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default TutorCard;
