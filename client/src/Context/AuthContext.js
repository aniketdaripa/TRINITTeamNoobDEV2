import React, { createContext, useContext,useState } from "react";
import { auth } from "../utils/init-firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  confirmPasswordReset,
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
  userType:null
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const [userType,setUserType]=useState("")

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function forgotPassword(email) {
    console.log(email);
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000`,
    });
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  function logout() {
    localStorage.clear();
    return signOut(auth);
  }

  const value = {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    userType,
    setUserType

  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
