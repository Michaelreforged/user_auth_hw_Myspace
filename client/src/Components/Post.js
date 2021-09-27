import axios from "axios";
import React, { useCallback, useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import EditPost from "../Pages/EditPost";
import { AuthContext } from "../Providers/AuthProvider";

const Post = ( {post} ) => {
  const [showForm, setShowForm] = useState(false)
  const { user } = useContext(AuthContext);

  const deletePost = async () => {
    try {
      let res = await axios.delete(`/api/users/${user.id}/posts/${post.id}`)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <h1>Post</h1>
          <Card fluid>
            <Card.Content>{post.title}</Card.Content>
            <Card.Meta>{post.body}</Card.Meta>
            <Link to={{ pathname: "/post"}}>
              <Button>Show Post</Button>
            </Link>
            {showForm && <EditPost post={post}/>}
            <Button onClick={()=>{setShowForm(!showForm)}}>{showForm ? "Cancel" : "Edit Post"}</Button>
            <Button color="red" onClick={() => {deletePost(post.id)}}>Delete Post</Button>
          </Card>
    </div>
  )
};


export default Post;