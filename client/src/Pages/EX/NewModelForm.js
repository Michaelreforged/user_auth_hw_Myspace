import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const NewModelForm = (props) =>{
  console.log(props)
  let url = props.match.url
  url = url.replace("new","")
  console.log(url);
  const [name, setName] = useState("")
  

  if (props.match.path == "/models/new"){
    const handleSubmit = async (e) =>{
      e.preventDefault()
    try {
      let res = await axios.post("/api/models", {name})
      props.history.push("/models")
    } catch (err) {
      console.log(err)
    };
  }

  return(
    <div>
    <h1>{"New Model "}</h1>
    <form onSubmit={handleSubmit}>
    <p>Model Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <br></br>
    <button>{"Add"}</button>
    </form>
    </div>
  )
    }

  if (props.match.path == "/doctors/new"){
    const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      let res = await axios.post("/api/doctors", {name})
      props.history.push("/doctors")
    } catch (err) {
      console.log(err)
    };
  }

  return(
    <div>
    <h1>{"New Model "}</h1>
    <form onSubmit={handleSubmit}>
    <p>Doctor Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <br></br>
    <button>{"Add"}</button>
    </form>
    </div>
  )
    }

}

export default NewModelForm