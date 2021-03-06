import React, { useEffect,useState } from 'react';
import {useHistory} from 'react-router-dom';
import Header from "../header/Header";
import axios from 'axios';

const Login= () => {
   const history = useHistory();
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
 
     useEffect(()=>{
        if(localStorage.getItem('user-info')){
          history.push("/Album");
        }
        

     },[])  
  


  

   async function handleSubmit(e){
      e.preventDefault();
   
      // console.log(email,password);


    let item = {email,password} 

      let result = await axios.post('http://192.168.1.77:30/user/signin',{
          headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
              "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZjZTAzYWRhNTdmODExZjkwZDI2OTg4In0sImlhdCI6MTYxNDk0NjY1MH0.423nKl2ydGOw55G9BfJlHP-qNxOwt2xzOvqeu0Zjk2k"
          },
          body:JSON.stringify(item)
    
        
      });

      result = await result.json;
      localStorage.setItem("user-info",JSON.stringify(result));
       history.push("/Album");
       console.log(result);
    }






    
        return (
            <div>
                <Header/>
                <h1 className="text-center my-3">LOGIN PAGE</h1>
               <div className="col-sm-6 offset-sm-3 ">  
               <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" className="form-control" placeholder="email"  style={{width:"30%!important"}}/>
                <br/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} name="password" className="form-control" placeholder="password"  style={{width:"30%!important"}}/>
                <br/>
                <button className="btn btn-primary">Login</button>
                </form>         
            </div>
            </div>
        )
    
}

export default Login;