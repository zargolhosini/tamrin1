import { useState } from "react";
function Form() {
    const [email , setemail ] =  useState ("");
    const [password , setpassword ] =  useState ("");
     const LoginHanler = ()=>{console.log(email);}
     const emailHandler=(event)=>{ setemail(event.target.value);};
     const passwordHandler=(event)=>{ setpassword(event.target.value);};

     return (
        <div>
            <input type="text" 
             placeholder="email"
              value={email} 
              onClick={emailHandler}/>
              <input type="text"
              placeholder="password"
              value={password} 
              onClick={passwordHandler}
              />
          <button onClick={LoginHanler}>login</button>
    
        </div>
      );
    

    };
    
export default Form;
