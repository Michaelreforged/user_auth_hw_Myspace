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
        <Card.Content>
      <Card.Header>{currentUser.email}</Card.Header>
      <Card.Description>{currentUser.name}</Card.Description>
      <Link to={`/user/edit`}>
      <Button color="green">
        Edit
      </Button>
      </Link>
      </Card.Content>
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