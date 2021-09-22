import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user,setUser] = useState(null);

  const handleRegister = async (user, history) => {
    console.log(user)
    try{
      let res = await axios.post("/api/auth/sign_in")
    }catch(err){
      
    }
  }

};

export default AuthProvider