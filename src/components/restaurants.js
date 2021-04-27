import React,{useState} from "react";
import "./restaurant.css";
import im from "./resimg.png";
import Image from "./image";
import Info from "./info";
function Restaurant(props){
	const [isClicked,setClick]=useState(false);
	var outlet=[]
	const {data}=props
	data.forEach(d=>{outlet.push(d.outlet)})



	function setOutlet(outlet){
			
			props.renderOutlet(true)
			props.setOutlet(outlet)
			
			
	}
	
	var e=data.map((d,i)=>{
	

    
	if(outlet[i].length === 1){
   
	  return(<div  key={i} className="flex">
	  <Image img={d.restaurantImage}/>
        <Info name={d.restaurantName} cuisines={d.cuisines} time={d.displayTime} 
        cost={d.displayCostForTwo}
        review={d.averageReview}/>
        </div>)}
 else{
      
	   return (<div  key={i} className="flex" onClick={()=>{setOutlet(outlet[i])}}>
	  <Image img={d.restaurantImage}/>
        <Info name={d.restaurantName} cuisines={d.cuisines} time={d.displayTime} 
        cost={d.displayCostForTwo}
        review={d.averageReview}/>
        </div>)}

      }) 
	console.log(e)
	return(<div>{e}</div>)}
       
export default Restaurant;