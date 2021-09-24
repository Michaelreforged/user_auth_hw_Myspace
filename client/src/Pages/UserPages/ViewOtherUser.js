import React, { useContext, useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import ErrorMsg from "../../Components/ErrorMsg";
import LoadingIndicator from "../../Components/LoadingIndicator";
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import { AuthContext } from "../../Providers/AuthProvider";

export default function ViewUsers(props) {
  const { data: users, setData: setUsers, loading, setLoading, error} = useAxiosOnMount("/api/users");
  const { user: currentUser} = useContext(AuthContext)
  const [ didFilter, setDidFilter] = useState(false);


  useEffect(()=>{
    setLoading(true)
    console.log("Filtered users ran")
    filteredUsers();
  },[didFilter])

  const filteredUsers = () => {
    if (didFilter === true){
      return setLoading(false)
    }
    else if(users !== null){
    let newList = users.filter((u)=>(u.id !== currentUser.id))
    setUsers(newList)
    setLoading(true)
    return setDidFilter(true)
    }
    else if (didFilter === null){
      setLoading(true)
      return setDidFilter(false)
    }
    else {
      setLoading(true)
      return setDidFilter(null)
    }
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
      <Segment key={u.id}>{u.email}</Segment>
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