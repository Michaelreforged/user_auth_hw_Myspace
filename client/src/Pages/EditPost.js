import React, { useCallback, useContext, useEffect, useState } from "react"
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
      let res = await axios.get(`/api/users/${currentUser.id}/posts`);
      setPosts(res.data)
      console.log(res.data)
    } catch (err) {
      alert("could not get posts")
    }
  }
  useEffect(() => {
    getPosts();
  }, [])

  const handleSubmit = async (e) => {
    console.log("handle submit:", posts)
    e.preventDefault();
    try {
      console.log("post submitted")
      let res = await axios.post(`/api/users/${currentUser.id}/posts`, {title, body})
      console.log(res);
      // let newPosts = {...posts, post}
      // setPosts(newPosts)
      console.log(posts)
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
        label = {"Title"}
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
    </div>
  )
}

export default NewPost;