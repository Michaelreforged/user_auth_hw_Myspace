import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user, history) => {
    console.log("register user");
    try{
      let res = await axios.post("/api/auth/auth", user);
      console.log(res);
      setUser(res.data.data);
      // history.push("/")
    }catch(err){
      alert("Unsuccessful register");
      console.log(err);
    };
  };

  const handleLogin = async (user, history) => {
    console.log("Login user");
    try{
      let res = await axios.post("/api/auth/sign_in", user);
      console.log(res);
      setUser(res.data.data);
      // history.push("/")
    }catch(err){
      alert("unsuccessful login, please check username or password");
      console.log(err);
    }
  }

  const handleLogout = async (history) => {
    console.log("Logout User");
    setUser(null);
    localStorage.removeItem("access-token");
    // history.push("/login")
  }

  return(
    <AuthContext.Provider
    value = {{
      user,
      handleRegister,
      handleLogin,
      handleLogout,
      setUser,
      authenticated: user?true:false,
    }}
    >
      {props.children}
    </AuthContext.Provider>

  )

};

export default AuthProvider