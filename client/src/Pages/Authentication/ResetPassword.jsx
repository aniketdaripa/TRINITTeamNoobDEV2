
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import { useAuth } from "../../Context/AuthContext";
import Toast from "../../Components/Toast";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

export default function ResetPassword() {
  const navigate = useNavigate();

  const { resetPassword } = useAuth();
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const query = useQuery();

  // Toast Starts
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Toast Ends

  const submitHandler = () => {
    if (password.length === 0) {
      setToastMessage("Password  Cannot be Empty!!");
      setToastType("warning");
      setOpen(true);
    } else {
      setIsSubmitting(true);
      resetPassword(query.get("oobCode"), password)
        .then((res) => {
          setToastMessage("Your Password has been Chnaged!!");
          setToastType("success");
          setOpen(true);
          navigate("/");
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
        <Typography color="red" variant="h3">
          Reset Password
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
          <Typography variant="h6">New Password</Typography>
          <TextField
            label=""
            id="login-password"
            size="small"
            type="password"
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
            Reset Password
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}
