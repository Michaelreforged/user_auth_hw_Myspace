import React, { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";

export default function ViewUserPage(props) {
  const { user: currentUser} = useContext(AuthContext)

  console.log(currentUser)
  const renderUser = () => {
    return (
      <h1>{currentUser.email}</h1>
    )
  }

  return (
    <div>
      <h1>User Info</h1>
      {renderUser()}
    </div>
  );
}