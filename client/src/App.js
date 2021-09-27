import './App.css';
import NavBar from './Components/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home.js';
import Components from './Pages/Show_Components';
import Register from './Pages/Register';
import Login from './Pages/Login';
import FetchUser from './Components/FetchUsers';
import ProtectedRoute from './Components/ProtectedRoutes';
import ViewUsers from './Pages/UserPages/ViewOtherUser';
import ViewUserPage from './Pages/UserPages/ViewUserpage';
import EditUserForm from './Pages/UserPages/EditUser';
import NewPost from './Pages/NewPost';
<<<<<<< HEAD
import MyPosts from './Pages/MyPosts';
import EditPost from './Pages/EditPost';
import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import Post from './Components/Post';
=======
import Friends from './Pages/UserPages/Friends';
>>>>>>> 68fc2555db003881f850aaa7b4a53e9c6c6bef7a

function App() {
  const { user: currentUser } = useContext(AuthContext);
  return (
  <>
    <NavBar/>
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/components" component={Components} />
        {/* <ProtectedRoute exact path="/protectedcomponents" component={Components} /> */}
        <ProtectedRoute exact path="/viewusers" component={ViewUsers} />
        <Route exact path="/user" component={ViewUserPage} />
        <ProtectedRoute exact path="/user/edit" component={EditUserForm} />
        <ProtectedRoute exact path="/user/friends" component={Friends} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/newpost" component={NewPost}/>
        <Route exact path="/myposts" component={MyPosts}/>
        <Route exact path="/editpost" component={EditPost}/>
        <Route exact path="/post" component={Post}/>
        <Route component={() => <p>react router 404 path not found</p>} />
      </Switch>
    </Container>
    </FetchUser>
  </>
  );
}

export default App;
