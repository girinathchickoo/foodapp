import React,{useState,useEffect} from "react";
import './App.css';
import Header from './components/header';
import Restaurant from './components/restaurants';
import Outlet from './components/outlet';
function App () {

  const [data,setData]=useState([]);
  const[click,setClick]=useState(false);
  const[outlet,setOut]=useState([]);
 
  

   useEffect(()=>{
    fetch("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({ "latitude":13.0358481, "longitude":80.244455 }),
    }).then(res=>res.json()).then(d=>setData(data.concat(d.listRestaurants)))
    
  },["giri"]);
  function setOutlet(out){
       setOut(out)
       if(out.length === 3){
        out.forEach(d=>d.image="https://eatoo.uberdoo.com/foodapp/public/images/Restaurant/image81969.jpg")

       }else{
        out.forEach(d=>d.image="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-frozen-vegetables-feature.jpg?1436799508")

       }
  }

  function renderOutlet(c){
    setClick(c);
    console.log(c)

  }
  
  var o=outlet.map((d,i)=>{ return(<Outlet key={i} outlet={d} renderOutlet={renderOutlet}/>)})
  console.log(o)
return (

    <div className="container">
    <div className="container1">
    
    <Header  count={data.length} />
    {click?
       
   <div>
   <button></button>
   {o}</div>
    :
   
    <Restaurant  data={data} renderOutlet={renderOutlet} setOutlet={setOutlet} />
    }
    </div>
    </div>

)}


export default App;
