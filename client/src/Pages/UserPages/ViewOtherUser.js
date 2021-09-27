import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import ErrorMsg from "../../Components/ErrorMsg";
import LoadingIndicator from "../../Components/LoadingIndicator";
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import { AuthContext } from "../../Providers/AuthProvider";
import Friends from "./Friends";

export default function ViewUsers(props) {
  const { data: users, setData: setUsers, loading, setLoading, error} = useAxiosOnMount("/api/notFriended");
  const { user: currentUser, setUser: setCurrentUser} = useContext(AuthContext)

  const removeUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const addFriend = async (id) => {
    try {
      let res = await axios.put(`/api/friending`);
      setCurrentUser({...currentUser, friend: [...currentUser.friend, id ] })
      let newUser = users.map((user)=>{
        return user.id !== currentUser.id ? user : currentUser
      })
      console.log(newUser)
      setUsers(newUser)
      console.log(users)
      removeUser(id);
    } catch (err) {
      console.log(err);
    }
  };

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
      if(u.id !== currentUser.id){
      return(
        <Card>
        <Card.Content>
      <Card.Header>{u.email}</Card.Header>
      <Card.Description>{u.name}</Card.Description>
      <Button color="green" onClick={() => removeUser(u.id)}>
        Remove from List
      </Button>
      <Button color="green" onClick={() => addFriend(u.id)}>
        Add User as Friend
      </Button>
      </Card.Content>
      </Card>
      )}
    })
    
  }

  return (
    <div>
      <h1>Other Users</h1>
      <Button color="green" onClick={()=>{props.history.push("/user/friends")}}>
        View Friends
      </Button>
      {renderUsers()}
    </div>
  );
}