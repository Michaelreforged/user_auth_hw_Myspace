import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import { AuthContext } from "../../Providers/AuthProvider";

export default function ViewUserPage(props) {
  const { user: currentUser} = useContext(AuthContext)

  console.log(currentUser)
  const renderUser = () => {
    return (
      <Card>
      <Card.Header>{currentUser.email}</Card.Header>
      <Card.Content>{currentUser.name}</Card.Content>
      <Link to={`/user/edit`}>
            <Button color="green">
              Edit
            </Button>
      </Link>
      </Card>
    )
  }

  return (
    <div>
      <h1>User Info</h1>
      {renderUser()}
    </div>
  );
}