import React from "react";
import styled from "styled-components";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import AlbumIcon from "@mui/icons-material/Album";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

export default function TutBox(props) {
  return (
    <TutBoxStyled>
      <div class="card">
        <div className="tutor-intro">
          <div class="avatar">
            <img src="../math-teacher.jpg" alt="TUT IMG" />
          </div>
          <div className="tut-name">{props.data.name}</div>
        </div>
        <div className="tutor-info">
          <div className="one">
            <div className="Language"> {props.data.subjectsTaught[0].language}</div>
            <div className="active-student">
              {" "}
              <AlbumIcon /> 5 active students
            </div>
            {/* <div className="experience"></div> */}
          </div>

          <div className="description">
           {props.data.description}
          </div>
        </div>
        <div className="tut-rating">
          <div className="fees">
            <div className="rating">
              {" "}
              <StarOutlinedIcon /> 5.0
            </div>
            <div className="cost">
              {" "}
              <SellOutlinedIcon /> 1234$
            </div>
            <div className="like">
              {" "}
              <FavoriteOutlinedIcon /> 45
            </div>
          </div>

          <div className="book">
            <button className="book-now">Book Trial Lesson</button>
            <button className="send-msg">Send Message</button>
          </div>
        </div>
      </div>
    </TutBoxStyled>
  );
}

const TutBoxStyled = styled.div`
  /* box-sizing: border-box; */
  margin: 0;
  padding: 0;
  width: 80vw;
  margin: auto;
  .card {
    /* border: 2px solid gray; */
    font-size: medium;
    width: 80vw;
    height: 45vh;
    border-radius: 44px;
    background: lightgrey;
    background: linear-gradient(145deg, #ff6b6b, #d43636);
    box-shadow: 2px 3px 3px #ba2f2f, 2px 3px 3px #ff4949;
    display: flex;
  }
  .card:hover {
    border: 3px solid black;
  }
  .tutor-intro {
    flex: 2;
    /* border: 3px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .avatar {
    border: 2px solid black;
    padding: 0.5;
    height: 65%;
    width: 80%;
    margin: auto;
  }
  .tut-name {
    padding: 0.3rem;
  }
  .tutor-info {
    flex: 3;
    /* border: 2px solid wheat; */
    display: flex;
    flex-direction: column;
  }
  .one {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-evenly;
  }
  .active-student {
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
  .Language {
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
  .description {
    flex: 2;
  }
  .tut-rating {
    flex: 2;
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .fees {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
  }
  .book {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .rating {
    margin: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cost {
    display: flex;
    margin: 0.1rem;
    justify-content: center;
    align-items: center;
  }
  .like {
    display: flex;
    margin: 0.1rem;
    justify-content: center;
    align-items: center;
  }
  button {
    padding: 15px 35px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 0.5s ease;
    margin: 0.4rem;
  }

  button:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
  }

  button:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }

`;
