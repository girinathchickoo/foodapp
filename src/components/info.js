import React from "react";
import "./restaurant.css";

function Info(props){
  

return(
<div className="info">
        
       <h1>{props.name}</h1>
       <p>{props.cuisines}</p>
       <div className="flex">
       <div className="align">
       <h3>Time</h3>
       <h2>{props.time}</h2></div>
       <div className="align space">
       <h3>Price</h3>
       <h2>{props.cost}</h2></div>
       <div className="align">
       <h3>Rating</h3>
       <h2 className="star" style={{color:"white"}}>*{props.review}</h2>
       </div></div></div>
     )}

       export default Info;