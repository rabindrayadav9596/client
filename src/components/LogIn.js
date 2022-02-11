import React from 'react';
import '../styles/Login.css';

export default function LogIn() {
  const placeholder =()=>{

  }
  return (
    <div className="scanner">
            
             <form className="form">
             {/* <input id="object" type="text" onChange={placeholder} placeholder="case number" />
             <input id="object" type="text" onChange={placeholder} placeholder="brand" />
             <input id="object" type="text" onChange={placeholder} placeholder="model" /> */}
             <input id="object" type="text" onChange={placeholder} placeholder="email" />
             <input id="object" type="text" onChange={placeholder} placeholder="password " />
             <input id="submit" type = "submit" onClick={placeholder} value="Login"/>
             <br>
             </br>
             <a id="login-a" href = "#">Create an account?</a>
            </form>
          
        
        </div>
  );
}
