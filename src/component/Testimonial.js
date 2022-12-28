
import React, { useState } from 'react'

const Testimonial = () => {
  const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

  function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<9 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
  return (
    <>
  <div className="testimonial">
    <div className="small-container">
      <h2 className="title">TECH FOR TEENS -A RUBIXE @INITIATIVE</h2>
      <div className="row" >

        <div className="col-4" style={{height:"300px",width:"250px"}}>
        <div style={{height:"40px",backgroundColor:"#25215e",width:"110%",borderRadius:"25px 25px 0px 0px",marginLeft:"-12px"}}></div>
          <img src="assets/first.jpg" alt="" style={{height:"80px",width:"90px"}} />
          <p classname="card-info" style={{fontSize:"20px",color:"black"}}>
            Introducing AI to a  children in an age Appropriate Manner 
          </p>
        </div>
       
        <div className="col-4" style={{height:"300px",width:"250px"}}>
          <p style={{fontSize:"20px",color:"black"}}>
          Gain awareness on AI and build an interactive story around it
          </p>
          <img src="assets/sec.jpg" alt="" style={{height:"80px",width:"90px"}}/> 
          <div style={{height:"40px",backgroundColor:" rgb(220, 20, 177)",width:"110%",borderRadius:"0px 0px 25px 25px",marginLeft:"-12px",marginTop:"60px"}}></div>  
        </div>

        <div className="col-4" style={{height:"300px",width:"250px"}}>
        <div style={{height:"40px",backgroundColor:"#ff6c0c",width:"110%",borderRadius:"25px 25px 0px 0px",marginLeft:"-12px"}}></div>
        <img src="assets/thr.jpg" alt="" style={{height:"80px",width:"90px"}} />
          <p style={{fontSize:"20px",color:"black"}}>
           Acquire Programming skills in a user friendly format
          </p>
        </div>

        <div className="col-4" style={{height:"300px",width:"250px"}}>
          <p style={{fontSize:"20px",color:"black"}}>
            Exposer to mini project on diverse topics
          </p>
          <img src="assets/fourth.jpg" alt="" style={{height:"80px",width:"90px"}} />
          <div style={{height:"40px",backgroundColor:"#006903",width:"110%",borderRadius:"0px 0px 25px 25px",marginLeft:"-12px",marginTop:"90px"}}></div>  
        </div>

        <div className="col-4" style={{height:"300px",width:"250px"}}>
        <div style={{height:"40px",backgroundColor:"#e0aa24",width:"110%",borderRadius:"25px 25px 0px 0px",marginLeft:"-12px"}}></div>
        <img src="assets/fifth.jpg" alt="" style={{height:"80px",width:"90px"}}/>
          <p style={{fontSize:"20px",color:"black"}}>
            Exposer to mini project on diverse topics
          </p>
        </div>
        
      </div>
    </div>

    <div className="Reg-div">
     <div className="left">
        <h1>GET IN TOUCH</h1><br></br>
        <h4>Please complete the form and we will get back to you</h4>
     </div>

     <div className="right">
       <label for="Name*">Name*</label>
       <input type="text" placeholder="Enter your name" ></input>

       <label for="Email*">Email*</label>
       <input type="text" placeholder="Enter your email" onChange={userHandler} ></input>{userErr?<span>User Not Valid</span>:""}

       <label for="Mobile no">Mobile no</label>
       <input type="text" placeholder="Enter your Mobile no" onChange={passwordHandler}></input>{passErr?<span>Mobile no Not Valid</span>:""}


       <button className="Btn" >Register now</button>

       {/* <div>
            <h1>Login</h1>
           <form onSubmit={loginHandle}>
           <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
            <br /> <br />
            <input type="number" placeholder="Enter User Mobile no" onChange={passwordHandler}/>{passErr?<span>Mobile no Not Valid</span>:""}

            <br /> <br />
            <button type="submit" >Login</button>
           </form>
        </div> */}
     </div>

    </div>
  </div>

 
  
</>

  )
}

export default Testimonial