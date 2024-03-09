
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import { useAuth } from "../../Context/AuthContext";
import Toast from "../../Components/Toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
 
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toast Starts
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // Toast Ends

  const submitHandler = () => {
    if (email.length === 0 || password.length === 0) {
      console.log("hi");
      setToastMessage("Password and Email Cannot be Empty!!");
      setToastType("warning");
      setOpen(true);
    } else {
      console.log(email, password);
      setIsSubmitting(true);
      login(email, password)
        .then((res) => {
          localStorage.setItem("user", email);
         
        axios.get("http://localhost:4000/getUserType", {params:{email:email}}).then((data)=>{
          console.log(data)
          if(data.userType==="tutor"){
            navigate("/home")
          }else{
            navigate("/home")
          }
        })
        })
        .catch((error) => {
          console.log(error.message);
          setToastMessage(error.message);
          setToastType("error");
          setOpen(true);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      height={"100vh"}
      gap={3}
    >
      <Toast
        open={open}
        handleClose={handleClose}
        message={toastMessage}
        type={toastType}
      />
      <Box>
        <Typography color={"black"} variant="h3">
          Welcome
        </Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        borderRadius={5}
        component="form"
        p={5}
        sx={{
          "& .MuiTextField-root": { m: 0, width: "25ch" },
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
        noValidate
        autoComplete="off"
        gap={3}
        width={"auto"}
        border="2px solid white"
      >
        <Box>
          <Typography variant="h6">Email</Typography>
          <TextField
            label=""
            id="login-email"
            size="small"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <Typography variant="h6">Password</Typography>
          <TextField
            label=""
            id="login-password"
            type="password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box width={"100%"}>
          <LoadingButton
            variant="contained"
            loading={isSubmitting}
            onClick={submitHandler}
            sx={{
              backgroundColor: `red`,
              width: "100%",
              ":hover": {
                bgcolor: `red`,
                color: "white",
              },
            }}
          >
            Login
          </LoadingButton>
        </Box>
        <Box
          color="red"
          sx={{ fontWeight: "700", cursor: "pointer" }}
          onClick={() => {
            navigate("/forgotPassword");
          }}
        >
          Forgot Password?
        </Box>
      </Box>
    </Box>
  );
}
