import React, { useContext } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorMsg from "../Components/ErrorMsg";
import { AuthContext } from "../Providers/AuthProvider";
import { useHistory } from "react-router";

export default function Components() {
  const { authenticated} = useContext(AuthContext)
  const history = useHistory();
  return (
    <div>
      {authenticated && history.location.pathname == "/protectedcomponents" ? <h1>Protected Components</h1>:<h1>Components</h1>}
      <LoadingIndicator/>
      <ErrorMsg/>
    </div>
  );
}