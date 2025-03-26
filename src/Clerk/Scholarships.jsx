import React, { useEffect } from "react";
import axios from "axios";

const TestAPI = () => {

  const checkButton=()=>{

    axios
      .get("http://127.0.0.1:8000/api/test/")
      .then((response) => {
        console.log("Response from backend:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
 
  }
 
    

  return (
    <>
    <button onClick={checkButton}>click</button>
    </>
  )
};

export default TestAPI;