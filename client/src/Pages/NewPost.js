import React, { useCallback, useContext, useState } from "react"
import { Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react"
import axios from "axios"
import { AuthContext } from "../Providers/AuthProvider";

const NewPost = () => {
  const { user: currentUser } = useContext(AuthContext)
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const getPosts = async () => {
    try {
      let res = await axios.get("/api/posts");
      setPosts(res.data)
      console.log(res.data)
    } catch (err) {
      alert("could not get posts")
    }
  }

  const handleSubmit = async (e, post) => {
    try {
      console.log("post submitted")
      let res = await axios.post("/api/posts", post)
    } catch (err) {
      alert("post not added")
    }
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
        value = {title}
        label = {"Title"}
        onChange = {(e, { value }) => {
          setTitle(value);
        }}
        />
        <Form.Input 
        value = {body}
        label = {"Body"}
        onChange = {(e, { value }) => {
          setBody(value);
        }}
        />
        <Button>Add Post</Button>
      </Form>
      <Button onClick={()=>getPosts()}>get posts</Button>
    </div>
  )
}

export default NewPost;