import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import ErrorMsg from "../../Components/ErrorMsg";
import LoadingIndicator from "../../Components/LoadingIndicator";
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import { AuthContext } from "../../Providers/AuthProvider";

export default function ViewUsers(props) {
  const { data: users, setData: setUsers, loading, error} = useAxiosOnMount("/api/users");
  const { user: currentUser} = useContext(AuthContext)
  const [ didFilter, setDidFilter] = useState(false);


  useEffect(()=>{
    console.log("useEffect ran")
    filteredUsers();
  },[didFilter])

  const filteredUsers = () => {
    if (didFilter === true){
      return
    }
    if(users !== null){
    let newList = users.filter((u)=>(u.id !== currentUser.id))
    console.log(newList)
    setUsers(newList)
    return setDidFilter(true)
  }
    if (didFilter === null){
      return setDidFilter(false)
    }
    else {
      return setDidFilter(null)
    }
  }

  console.log("didfilter",didFilter)

  const renderUsers = () => {

    if (loading){
      return <LoadingIndicator/>
    }
    if (error){
        return(
        <ErrorMsg
        loc = "Users (Getting Data)"
        error = {error}/>
      )}
    if (users.length === 0 ){
      return <p>No Users</p>
    }
    return users.map((u)=>{
      return(
      <h1>{u.email}</h1>
      )
    })
    
  }

  return (
    <div>
      <h1>Other Users</h1>
      {renderUsers()}
    </div>
  );
}