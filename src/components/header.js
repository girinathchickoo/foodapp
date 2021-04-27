import React from "react";
import "./header.css";
import down from "./down.svg";
import filter from "./filter.svg";
function Header(props){
	
	
	return(
		<div className="container-app">
      
       <h2 >{props.count} RESTAURANTS</h2>
       <h2 className="space">RELEVANCE <img className="svg" src={down} /></h2>
       <h2>FILTERS<img className="svg" src={filter} /></h2>
       <hr />

       </div>)}
export default Header;