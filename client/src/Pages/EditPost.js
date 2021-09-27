import React, { useContext, useEffect, useState } from "react"
import { Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react"
import axios from "axios"
import { AuthContext } from "../Providers/AuthProvider";

const EditPost = ({ post }) => {
  const { user: currentUser } = useContext(AuthContext)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    console.log("handle submit:", post)
    e.preventDefault();
    try {
      console.log("post submitted")
      let res = await axios.put(`/api/users/${currentUser.id}/posts/${post.id}`, {title, body})
      console.log(res);
      console.log(post)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
        value = {title}
        onChange = {(e, { value }) => {
          setTitle(value);
        }}
        label = {"Edit Title"}
        />
        <Form.Input 
        value = {body}
        label = {"Edit Body"}
        onChange = {(e, { value }) => {
          setBody(value);
        }}
        />
        <Button>Update Post</Button>
      </Form>
    </div>
  )
}

export default EditPost;