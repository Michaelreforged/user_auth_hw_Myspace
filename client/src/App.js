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
<<<<<<< HEAD
import ViewUserPage from './Pages/UserPages/ViewUserpage';
import EditUserForm from './Pages/UserPages/EditUser';
=======
import NewPost from './Pages/NewPost';
>>>>>>> a66023f7ffbe4b979996e6c7e124d6bbf493b328

function App() {
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/newpost" component={NewPost}/>
        <Route component={() => <p>react router 404 path not found</p>} />
      </Switch>
    </Container>
    </FetchUser>
  </>
  );
}

export default App;
