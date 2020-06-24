import React from "react"

function Main(props){
  console.log(props)
  return( <section id="container">
   <div className="row">

   <div className="mainText">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>{props.text} </p>
        <a href="#" className="card-items white-btn btn btn-danger">Make an appointment</a>  
    </div>

   <div className= "mainImg" >
   <img className="runman"src={props.img} alt="running man" />
   </div>
   
    </div>
   </section>
   )}

export default Main