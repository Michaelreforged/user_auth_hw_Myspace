import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { AuthContext } from "../../Providers/AuthProvider";

export default function ViewUserPage(props) {
  const { user: currentUser} = useContext(AuthContext)

  console.log(currentUser)
  const renderUser = () => {
    return (
      <>
      <h1>{currentUser.email}</h1>
      <h1>{currentUser.name}</h1>
      <Link to={`/user/edit`}>
            <Button color="green">
              Edit
            </Button>
      </Link>
      </>
    )
  }

  return (
    <div>
      <h1>User Info</h1>
      {renderUser()}
    </div>
  );
}