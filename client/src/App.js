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

function App() {
  return (
  <>
    <NavBar/>
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/components" component={Components} />
        <ProtectedRoute exact path="/protectedcomponents" component={Components} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}/>
        <Route component={() => <p>react router 404 path not found</p>} />
      </Switch>
    </Container>
    </FetchUser>
  </>
  );
}

export default App;
