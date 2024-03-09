import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';


export default function Thome() {
const {logout}=useAuth();
const navigate=useNavigate();
  return (
    <div>
      <button  onClick={async (e) => {
          logout();
          navigate("/");
        }}>Logout</button>
    </div>
  )
}
