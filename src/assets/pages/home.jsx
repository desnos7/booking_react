import React from 'react'
import { Link } from "react-router-dom";
import  Navbar  from "../Components/navbar.jsx";
import Populaire from "../Components/populaire_Destination.jsx";
import "../Css/home.css";
function Home(){
    
    return (
        <>
        <Navbar/>
        <section className="header">
            <div className='text'>
            <h1>Plan your Trip whith travel Dot</h1>
    <p>Plan your Trip whith travel Dot</p>
    <button>explorer</button>
            </div>
   
  </section>
  <div className="search">
    <form >
    <div><p>Location</p><input type="text" placeholder="Destination"/></div>
    <div><p>Distance</p><input type="text" placeholder="Destination"/></div>
    <div><p>categorie</p><input type="text" placeholder="Destination"/></div>
    <div><button>explorer</button></div>
    </form>
  </div>
  <div className='popu'> <Populaire/></div>
 


        </>
      
    )
 
}

export default Home