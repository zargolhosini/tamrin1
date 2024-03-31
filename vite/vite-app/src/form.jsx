import { useState } from "react";
function Form() {
    const [email , setemail ] =  useState ("");
    const [password , setpassword ] =  useState ("");
    const [gender , setgender]=useState("male");

     const LoginHanler = ()=>{console.log(email);}
     const emailHandler=(event)=>{ setemail(event.target.value);};
     const passwordHandler=(event)=>{ setpassword(event.target.value);};
     const genderhandler = (event)=>{setgender(event.target.value);}

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
<label htmlFor="female"></label>
          <input type="radio"
          name="gender"
          value="female"
          id ="female"
          onChange={genderhandler}
          checked={gender==="female"} />
<label htmlFor="male"></label>
<input type="radio"
          name="gender"
          value="male"
          id ="male"
          onChange={genderhandler}
          checked={gender==="male"} />

<label htmlFor="other"></label>
<input type="radio"
          name="gender"
          value="other"
          id ="other"
          onChange={genderhandler}
          checked={gender==="other"} />
    
        </div>
      );
    

    };
    
export default Form;
