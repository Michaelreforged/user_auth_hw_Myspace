import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosOnMount = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    console.log(`Getting Data from ${url}`)
    getData();
  },[])

  const getData = async () => {
    try {
      let res = await axios.get(url)
      setData(res.data.data ? res.data.data : res.data)
    } catch (error) {
      console.log(error)
      setError(error)
      
    }finally{
      setLoading(false)
    }
  }
  console.log(data)
  return{data,setData,loading,error}
}


export default useAxiosOnMount