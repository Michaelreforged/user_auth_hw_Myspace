import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
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
      <Link to="/login">
      <Menu.Item active={location.pathname ==="/login"}>Login</Menu.Item>
      </Link>
      <Link to="/register">
      <Menu.Item active={location.pathname ==="/register"}>Register</Menu.Item>
      </Link>
      </>
    )
  }

  return(
    <Menu>
        <Link to='/'>
          <Menu.Item active={location.pathname === '/'} >
            Home
          </Menu.Item >
        </Link>
        <Link to='/components'>
          <Menu.Item active={location.pathname === '/components'} >
            Components    
          </Menu.Item >
        </Link>
        <Link to='/viewusers'>
          <Menu.Item active={location.pathname === '/viewusers'} >
            View Other Users    
          </Menu.Item >
        </Link>
        <Menu.Menu position="right">{rightNavItems()}</Menu.Menu>
    </Menu>
  )
}

export default withRouter(NavBar)