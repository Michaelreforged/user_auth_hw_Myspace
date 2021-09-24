import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Cards from "../Components/Cards";
import ErrorMsg from "../../Components/ErrorMsg";
import LoadingIndicator from "../../Components/LoadingIndicator";
import useAxiosOnMount from "../Components/useAxiosOnMount";

export default function Models(props) {
  const { data: models, setData: setModels, loading, error} = useAxiosOnMount("/api/models");

  const deleteModels = async (id) => {
    try {
      await axios.delete(`/api/models/${id}`)
      const newModels = models.filter((u)=>(u.id !== id))
      setModels(newModels)
    } catch (error) {
      
    }
  }

  const renderModels = () => {

    if (loading){
      return <LoadingIndicator/>
    }
    if (error){
        return(
        <ErrorMsg
        loc = "Models (Getting Data)"
        error = {error}/>
      )}
    if (models.length === 0 ){
      return <p>No Models</p>
    }
    return models.map((u)=>{
      return(
      <Cards
      data = {u}
      key = {u.id}
      loc = "models"
      del = {deleteModels}
      />
      )
    })
    
  }

  return (
    <div>
      <h1>Models</h1>
      <Link to={`/models/new`}>
            <Button color="green">
              New
            </Button>
      </Link>
      {renderModels()}
    </div>
  );
}