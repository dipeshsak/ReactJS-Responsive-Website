import React from 'react'
import CommonComp from '../Components/CommonComp'
import HomeImg from '../Images/Laptop-rb.png'
import './Home.css'
const Home =()=>{
  return(
    <>
    <CommonComp
      name="Grow your business with"
      imgSrc={HomeImg}
      visit="/services"
      btname="Get Started"
      />
    </>
  )
}

export default Home