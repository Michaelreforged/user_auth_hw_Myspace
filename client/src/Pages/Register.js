import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form } from "semantic-ui-react";
import  { AuthContext } from "../Providers/AuthProvider";

const Register = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("Test@test.com")
  const [password, setPassword] = useState("123456")
  const [pwdConfirm, setPwdConfirm] = useState("123456")
  const {handleRegister} = useContext(AuthContext)

  const handleSubmit = (e) => {
    if(password !== pwdConfirm){
      alert("Password do not match")
      return;
    }
    handleRegister({email, password}, history)
  }

  return(
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        value={email}
        onChange={(e,{value}) =>{
          setEmail(value)
        }}
        label={"Email"}
        />
        <Form.Input
        value={password}
        onChange={(e,{value}) =>{
          setPassword(value)
        }}
        label={"Password"}
        />
        <Form.Input
        value={pwdConfirm}
        onChange={(e,{value}) =>{
          setPwdConfirm(value)
        }}
        label={"Confirm Password"}
        />
        <Button>Register</Button>
      </Form>
    </div>
  )
}

export default Register