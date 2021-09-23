import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";

const FetchUser = (props) => {
  let {user, setUser} = useContext(AuthContext);
  let [check, setCheck] = useState(false);

  useEffect(()=>{
    checkUser();
  },[]);


  const checkUser = async () =>{
    // checks to for user (or doesn't not have an access token) is authenticated and exits if true
    if (user || !localStorage.getItem("access-token")){
      setCheck(true)
      return;
    }
    // checks the access-token in local storage if valid set true and set user
    try {
      const res = await axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      
    }finally{
      setCheck(true)
    }
  }
  return check ? props.children : null;
}

export default FetchUser