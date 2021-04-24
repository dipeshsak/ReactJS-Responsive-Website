import React from 'react'
import Card from '../Components/Card'
import sdata from '../Utility/Utility'

const Services =()=>{
  return(
    
    <>
    <div className="my-5">
      <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container contact_div">
     <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
              {
                sdata.map((val,ind)=>{
                  return <Card 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                })
              }
     </div>
    </div>
    </div>
          </div>

    
    </>
  )
}

export default Services