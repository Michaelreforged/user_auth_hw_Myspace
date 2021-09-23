//How we will use this.
// Think of this Protected Route that has the ability to render out desired component if we have a valid user or redirect to a login page if we do not
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";


//  Remember we wrap all of our components in a FetchUser which see if 
//  we have an Authenteciated user and will set the user in our AuthProvider

// we go from this...
// <Route exact path="/things" component={Things} />

// to this...
// <FetchUser>
//    <ProtectedRoute exact path="/thingsDemo" component={ThingsDemo} />
// </FetchUser>

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          // if we are authenticated tham go to route
          <Component {...props} />
        ) : (
          // if not authenticated return to login screen
          <Redirect
            to={{
              pathname: "/login",
              from: props.location,
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;