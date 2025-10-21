// File: App.jsx located in src folder
import { useState, useEffect } from "react";

function App() {

const getDataFromApi = async () =>{
  let myEndpoint = "PasteYourEndPointHere";
  let myData = await fetch(myEndpoint);
  //console.log("received Data: ", myData);
  let parsedData = await myData.json(); /* Must wait for myData.json */
  //console.log("parsed received Data: ", parsedData);
}

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Basic application<br />for<br />Fetching API</h1>
    </div>
  );
}
 
export default App;
