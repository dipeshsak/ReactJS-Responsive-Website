import React from 'react'
import CommonComp  from '../Components/CommonComp'
import AboutImg from '../Images/building-rb.png'

const About =()=>{
  return(
    <>
     <CommonComp
      name="Welcome to About page"
      imgSrc={AboutImg}
      visit="/Contact"
      btname="Contact Now"
      />
    </>
  )
}

export default About