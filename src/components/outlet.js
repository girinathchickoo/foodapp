import React,{useState} from "react";
import "./restaurant.css";



function Outlet(props){
	const {outlet,renderOutlet}=props;



    console.log(outlet)
	
	return(<div   className="flex">
	  <img src={props.outlet.image} alt=""/>
	  <div className="info">
        
       <h1>{props.outlet.outletName}</h1>
       <p>{props.outlet.cuisines}</p>
       <div className="flex">
       <div className="align">
       <h3>Time</h3>
       <h2>{props.outlet.displayTime}</h2></div>
       <div className="align space">
       <h3>Price</h3>
       <h2>{props.outlet.displayCostForTwo}</h2></div>
       <div className="align">
       <h3>Rating</h3>
       <h2 className="star" style={{color:"white"}}>*{props.outlet.averageReview}</h2>
       </div></div></div>
        </div>
        )}

      


export default Outlet;