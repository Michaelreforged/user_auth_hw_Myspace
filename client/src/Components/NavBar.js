import '../App.css';
import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Image, Menu, Sticky } from 'semantic-ui-react'
import { AuthContext } from '../Providers/AuthProvider';
import { useHistory } from 'react-router';



const NavBar = (props) =>{
  const history = useHistory();
  const {user, handleLogout} = useContext(AuthContext);
  const { location } = props;

  const rightNavItems = () => {
    if(user){
      return(
        <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
      )
    }
    return(
      <>
        <Menu.Item as='a' active={location.pathname ==="/login"}>
          <Link to="/login">
            Login
          </Link>
        </Menu.Item>

        <Menu.Item as='a' active={location.pathname ==="/register"}>
          <Link to="/register">
            Register
          </Link>
        </Menu.Item>
      </>
    )
  }

  return(
    <Sticky>
      <Menu stackable inverted color='blue'>
        <Menu.Item as='a' header active={location.pathname === '/'}>
          <Image size='mini' src='/friends.png' style={{ marginRight: '1.5em' }}/>
          <Link to='/'>
            Friends
          </Link>
        </Menu.Item>
        
        <Menu.Item as='a' active={location.pathname === '/components'} >
          <Link to='/components'>
            Components    
          </Link>
        </Menu.Item >
        
        <Menu.Item as='a' active={location.pathname === '/protectedcomponents'} >
          <Link to='/protectedcomponents'>
            Protected Components    
          </Link>
        </Menu.Item >

        <Menu.Menu position="right">{rightNavItems()}</Menu.Menu>
      </Menu>
    </Sticky> 
  )
}

export default withRouter(NavBar);