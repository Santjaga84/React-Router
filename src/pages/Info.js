import React, { useState, useEffect } from 'react';


function Info() {
  const [apiSrc, setApiSrc] = useState("");
  const [apiVideoSrc, setApiVideoSrc] = useState("");

  const getApiData = () => {
    return fetch("https://random.dog/woof.json").then((resp) => {
      return resp.json();
    });
  }
    
  useEffect(() => {
    getApiData().then((data) => {
      if(data.url.includes(".jpg",".jpeg",".gif")){
      setApiSrc(data.url);
      }else{
         setApiSrc(data.url);
     }
    
    }
  );
}, [apiSrc]);

  return (
    <div className="App">
       <img src={apiSrc} alt="" />
       <video 
       src={apiSrc} alt=""
       width="750" height="500" controls
       >
       </video>
       <button onClick={() => {
        getApiData().then((data) => {
      setApiSrc(data.url);
    });
       }} >Refresh</button>
    </div>
  );
}

export default Info;