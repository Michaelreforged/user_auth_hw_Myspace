import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import  { AuthContext } from "../Providers/AuthProvider";

const Register = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("Test@lsfjalsf.com")
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
    <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' mini color='blue' textAlign='center'>
          <Image src='/friends.png' /> Register new account
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input 
              onChange={(e,{value}) =>{
                setEmail(value)
              }}
              fluid icon='user' 
              iconPosition='left' 
              placeholder='E-mail address' 
            />
            <Form.Input
              onChange={(e,{value}) =>{
                setPassword(value)
              }}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              onChange={(e,{value}) =>{
                setPwdConfirm(value)
              }}
              label={"Confirm Password"}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
  
            <Button color='blue' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href='/developers'>Contact Us</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Register;

