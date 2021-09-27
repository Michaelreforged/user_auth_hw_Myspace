import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import ErrorMsg from "../../Components/ErrorMsg";
import LoadingIndicator from "../../Components/LoadingIndicator";
import useAxiosOnMount from "../../hooks/useAxiosOnMount"

export default function Friends(props) {
  const { data: users, loading, setLoading, error} = useAxiosOnMount("/api/friended");

  console.log(users)

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
        <Card>
        <Card.Content>
      <Card.Header>{u.email}</Card.Header>
      <Card.Description>{u.name}</Card.Description>
      </Card.Content>
      </Card>
      )
    })
    
  }

  return (
    <div>
      <h1>Friends</h1>
      {renderUsers()}
    </div>
  );
}