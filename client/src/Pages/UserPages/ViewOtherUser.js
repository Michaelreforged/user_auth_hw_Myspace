import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import ErrorMsg from "../../Components/ErrorMsg";
import LoadingIndicator from "../../Components/LoadingIndicator";
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import { AuthContext } from "../../Providers/AuthProvider";

export default function ViewUsers(props) {
  const { data: users, setData: setUsers, loading, error} = useAxiosOnMount("/api/users");
  const { user: currentUser} = useContext(AuthContext)

  useEffect(()=>{
    filteredUsers();
  },[setUsers])

  const filteredUsers = () => {
    if(users !== null){
    let newList = users.filter((u)=>(u.id !== currentUser.id))
    console.log(newList)
    setUsers(newList)}
    return setUsers(users)
  }
  
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