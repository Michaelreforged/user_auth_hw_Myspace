import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const EditPersonForm = (props) =>{
  console.log(props)
  let url = props.match.url
  url = url.replace("edit","")
  console.log(url);
  const [name, setName] = useState("")
  
  useEffect(()=>{
  getData()
  }, [])
  
  const getData = async () => {
    try {
      let res = await axios.get(`/api/${url}`)
      setName(res.data.name)
      console.log(res.data.name)
    } catch {
  
    }
  };

  if (props.match.path == "/users/:id/edit"){
    const handleSubmit = async (e) =>{
      e.preventDefault()

    try {
      let res = await axios.put(`/api/users/${props.match.params.id}`, {name});
      props.history.push("/users")
    } catch (err) {
      console.log(err)
    };
  }

  return(
    <div>
    <h1>{"Edit User "}</h1>
    <form onSubmit={handleSubmit}>
    <p>User Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <br></br>
    <button>{"Edit "}</button>
    </form>
    </div>
  )
    }

  if (props.match.path == "/doctors/:id/edit"){
    const handleSubmit = async (e) =>{
      e.preventDefault()

    try {
      let res = await axios.put(`/api/doctors/${props.match.params.id}`, {name});
      props.history.push("/doctors")
    } catch (err) {
      console.log(err)
    };
  }

  return(
    <div>
    <h1>{"Edit User "}</h1>
    <form onSubmit={handleSubmit}>
    <p>Doctor Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <br></br>
    <button>{"Edit"}</button>
    </form>
    </div>
  )
    }
}

export default EditPersonForm