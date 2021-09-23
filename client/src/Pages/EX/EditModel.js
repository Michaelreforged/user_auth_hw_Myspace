import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const EditModelForm = (props) =>{
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

  if (props.match.path == "/models/:id/edit"){
    const handleSubmit = async (e) =>{
      e.preventDefault()

    try {
      let res = await axios.put(`/api/models/${props.match.params.id}`, {name});
      props.history.push("/models")
    } catch (err) {
      console.log(err)
    };
  }

  return(
    <div>
    <h1>{"Edit Model "}</h1>
    <form onSubmit={handleSubmit}>
    <p>Model Name</p>
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
    <h1>{"Edit Model "}</h1>
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

export default EditModelForm