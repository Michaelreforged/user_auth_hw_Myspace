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
      <>
        <Link to="/user">
          <Menu.Item active={location.pathname ==="/user"}>User</Menu.Item>
        </Link>
        <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
      </>
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
          </Menu.Item >
        </Link>
        <Link to='/viewusers'>
          <Menu.Item active={location.pathname === '/viewusers'} >
            View Other Users    
          </Menu.Item >
        </Link>
        <Link to='/newpost'>
          <Menu.Item active={location.pathname === '/newpost'} >
            Create a Post    
          </Menu.Item >
        </Link>
        <Menu.Menu position="right">{rightNavItems()}</Menu.Menu>
      </Menu>
    </Sticky> 
  )
}

export default withRouter(NavBar);