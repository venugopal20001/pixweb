import React from 'react'
import './Services.css'
import CardContainer from './CardContainer'
import CardContainerr from './CardContainerr'



function Services() {
  return (
    <div>
        
        <h1 className="webcard"  id='Services' style={{margin:"0px"}}>WEB SERVICES</h1>
        <CardContainer/>
        <h1 className="webcard" style={{margin:"0px"}}>DIGITAL MARKETING</h1>
        <CardContainerr/>
    </div>
  )
}

export default Services