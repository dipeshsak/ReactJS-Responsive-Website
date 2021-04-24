import React,{useState} from 'react'

const Contact =()=>{

 const [data,setData] = useState({
   fullname:"",
   phone:"",
   email:"",
   msg:""
 })
 
  

  const formSubmit=()=>{
    
  }
  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Contact US</h1>
    </div>
    <div className="container contact_div">
         <div className="row">
           <div className="col-md-6 col-10 mx-auto">
           <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" 
    placeholder="Enter Full Name"
    name="fullname"
    onChange={InputEvent}
    value={data.fullname}
    />
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" name="email" id="exampleFormControlInput1" value={data.email} placeholder="name@example.com" onChange={InputEvent}/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" name="phone" id="exampleFormControlInput1" value={data.phone} placeholder="Enter your mobile number" onChange={InputEvent}/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" name="msg" id="exampleFormControlTextarea1" rows="3"  value={data.msg} onChange={InputEvent}></textarea>
  </div>

  <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit</button>
  </div>
</form>
           </div>
         </div>
    </div>
    </>
  )
}

export default Contact