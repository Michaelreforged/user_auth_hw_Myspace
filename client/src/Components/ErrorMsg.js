

const ErrorMsg = ({loc, error}) => {
  return(
    <>
    <h1>Error in {loc}</h1>
    <code>{JSON.stringify(error)}</code>
    </>
  )
}

export default ErrorMsg;