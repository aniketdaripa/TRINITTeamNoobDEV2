import { Box, Button } from "@mui/material";
import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function OptionPage() {
  const {setUserType}=useAuth();
  const navigate=useNavigate();
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box display={"flex"} width={"70%"} height={"70%"}>
        <Box sx={{ width: "50%" }}>
          <img src=""></img>{" "}
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"50%"}
          alignItems={"center"}
          gap={3}
        >
          <Box sx={{ fontSize: "32px", color: "#4b4b4b" }}>Join Us as??</Box>
          <Box display={"flex"} justifyContent={"center"} gap={4} alignItems={"center"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#58CC02",
                width: "50%",
                ":hover": {
                  bgcolor: "#58CC02",
                  color: "white",
                },
              }}
              size="large"
              onClick={()=>{
                setUserType("tutor");
                navigate('/register')}
                
                }
            >
              TUTOR
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#1cb0f6",
                backgroundColor: "white",
                width: "50%",
                ":hover": {
                  bgcolor: "white",
                  color: "#1cb0f6",
                },
              }}
              size="large"
              onClick={()=>{
                setUserType("student");
                navigate('/register')}
                
                }
            >
              STUDENT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
