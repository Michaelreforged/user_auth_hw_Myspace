import { Segment } from "semantic-ui-react";


const ErrorMsg = ({loc, error}) => {
  return(
    <Segment>
    <h1>Error in {loc}</h1>
    <code>{JSON.stringify(error)}</code>
    </Segment>
  )
}

export default ErrorMsg;