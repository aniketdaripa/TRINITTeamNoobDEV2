import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  const navigate=useNavigate()
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box display={"flex"} width={"70%"} height={"70%"}>
        <Box sx={{  width: "50%" }}><img></img> </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"50%"}
          alignItems={"center"}
          gap={3}
        >
          <Box sx={{ fontSize: "32px", color: "#4b4b4b" }}>
            The free, fun, and effective way to learn a language!
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#58CC02",
                width: "100%",
                ":hover": {
                  bgcolor: "#58CC02",
                  color: "white",
                },
              }}
              size="large"
              onClick={()=>navigate('/choice')}
            >
              GET STARTED
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                color: "#1cb0f6",
                backgroundColor: "white",
                width: "100%",
                ":hover": {
                  bgcolor: "white",
                  color: "#1cb0f6",
                },
              }}
              size="large"
              onClick={()=>navigate('/login')}
            >
              I ALREADY HAVE ACCOUNT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
