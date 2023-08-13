import React from 'react'
import { Link } from "react-router-dom";
import * as Faicon from "react-icons/fa6";
import '../Css/navbar.css';

function Navbar(){
    
    return (
      <div className='navbar'>
        <div className='icon'><Faicon.FaBars/></div>
        <div className='Navbar-item'>
          <ul>
            <li>HOME</li>
            <li>Ressource</li>
            <li>Produits</li>
            <li>insription</li>
            <li>connexion</li>
          </ul>
        </div>
        
      </div>
    )
 
}

export default Navbar