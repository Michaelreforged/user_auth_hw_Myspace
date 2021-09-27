import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";
import { AuthContext } from "../../Providers/AuthProvider";

const EditUserForm = (props) =>{
  const {user, setUser}  = useContext(AuthContext)
  console.log(user)
  const[name, setName] = useState(user.name)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      let res = await axios.put(`/api/users/${user.id}`, { name: name });
      setUser(res.data)
      props.history.push("/user")
    }catch (err) {
      console.log(err)
    };
  }

  return(
    <div>
    <h1>{"Edit User Information"}</h1>
    <form onSubmit={handleSubmit}>
    <p>User's Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <br></br>
    <Button>{"Edit"}</Button>
    </form>
    </div>
  )

}

export default EditUserForm