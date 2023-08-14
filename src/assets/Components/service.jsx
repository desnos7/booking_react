import React from 'react'
import { Link } from "react-router-dom";
import * as Far from "react-icons/fa6"


import  Video from "../../../public/image/beach.mp4"
import Bird from "../../../public/image/bird.jpg"

import "../Css/service.css"

function  service(){
 
    return (
      <>
      <div className='video'>
        <div className='title'>
            <h1>Wonderful House</h1>
            <h1>experience nin here!</h1>

            <p>the Adventure subrankingis based on an equaly weighted average of scores from five country</p>
        </div>
        <div className='autoPlay'>      
          <video src={Video} muted autoPlay loop type="video/mp4"></video>
       </div>
        
      </div>


<div  className='bordu'> 
        <h2>0ur best blog?</h2>
       
      <p>An insight to the incredible experience in the world</p>
</div>

      
       <div className='bord'>
        
        
        <div className='carde'>
          <div className='des'><img src={Bird} alt="" /></div>
          <div className='dese'><h3>Beautiful Moroco let us traveel</h3>
          <p>Beautiful Moroco let us traveel,Beautiful Moroco let us traveel,Beautiful Moroco let us traveel</p>
          <Link to="#" id='te'> View detail <Far.FaArrowRightLong/></Link></div>

        </div>
        <div className='carde'>
          <div className='des'><img src={Bird} alt="" /></div>
          <div className='dese'><h3>Beautiful Moroco let us traveel</h3>
          <p>Beautiful Moroco let us traveel,Beautiful Moroco let us traveel,Beautiful Moroco let us traveel</p>
          <Link to="#" id='te'> View detail <Far.FaArrowRightLong/></Link></div>

        </div>
        <div className='carde'>
          <div className='des'><img src={Bird} alt="" /></div>
          <div className='dese'><h3>Beautiful Moroco let us traveel</h3>
          <p>Beautiful Moroco let us traveel,Beautiful Moroco let us traveel,Beautiful Moroco let us traveel</p>
          <Link to="#" id='te'> View detail <Far.FaArrowRightLong/></Link></div>

        </div>
        <div className='carde'>
          <div className='des'><img src={Bird} alt="" /></div>
          <div className='dese'><h3>Beautiful Moroco let us traveel</h3>
          <p>Beautiful Moroco let us traveel,Beautiful Moroco let us traveel,Beautiful Moroco let us traveel</p>
          <Link to="#" id='te'> View detail <Far.FaArrowRightLong/></Link></div>

        </div>
        </div> 
        
      </>

     
    )
  
}


export default service