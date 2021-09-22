import './App.css';
import NavBar from './Components/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home.js';

function App() {
  return (
   <>
   <NavBar/>
   <Container>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route component={() => <p>react router 404 path not found</p>} />
      </Switch>
   </Container>
   </>
  );
}

export default App;
