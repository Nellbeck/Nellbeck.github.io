import React from 'react';
import gif from "../pics/ZKZg.gif"
function Loading() {
  return (
    <div className="loading" >
        
            <img src={gif} style={{width: "100px", marginTop: "100px"}} alt="A loading gif"/>
        
    </div>
  );
}

export default Loading;
