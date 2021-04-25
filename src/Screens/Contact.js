import React,{useState} from 'react'

const Contact =()=>{

 
 const [fn,setFn] = useState()
 const [email,setEmail] = useState()
 const [phone,setPhone] = useState()
 const [msg,setMsg] = useState()

  

  const formSubmit=(e)=>{
    e.preventDefault()
    alert("My Name is : "+fn+" My email is : "+email+" Mobile number : " + phone +" I want to say : "+msg)
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
  <div className="form-group">
    <label>Full Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" 
    placeholder="Enter Full Name"
    name="fullname"
    onChange={(e)=>setFn(e.target.value)}
    value={fn}
    />
  </div>

  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" name="email" id="exampleFormControlInput1" value={email} placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
  </div>

  <div className="form-group">
    <label >Phone</label>
    <input type="number" className="form-control" name="phone" id="exampleFormControlInput1" value={phone} placeholder="Enter your mobile number" onChange={(e)=>setPhone(e.target.value)}/>
  </div>

  <div className="form-group">
    <label >Message</label>
    <textarea className="form-control" name="msg" id="exampleFormControlTextarea1" rows="3"  value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
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