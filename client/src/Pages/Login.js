import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import  { AuthContext } from "../Providers/AuthProvider";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("Test@test.com")
  const [password, setPassword] = useState("123456")
  const {handleLogin} = useContext(AuthContext)

  const handleSubmit = (e) => {
    handleLogin({email, password}, history)
  }

  return(
    <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          <Image src='/friends.png' /> Log-in to your account
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

            <Button color='blue' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/register'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Login;
