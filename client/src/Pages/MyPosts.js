import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import Post from "../Components/Post";
import { AuthContext } from "../Providers/AuthProvider";
import EditPost from "./EditPost";

const MyPosts = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

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

  return (  
    <div>
      <h1>My Posts</h1>
      {posts.map((post)=> {
        return (
          <Post key={post.id} post={post}/>
        )
      })}
    </div>
  )
}

export default MyPosts;