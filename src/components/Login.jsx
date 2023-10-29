import React, { useState } from 'react'
// import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const navigate = useNavigate();

    const userLogin =async()=>{
        const payload={
            email,
            password
        }
        console.log(payload)
        try {
            let res = await fetch("https://energetic-plum-bison.cyclic.app/users/login",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(payload)
            });
            let data = await res.json();
            console.log(data.authToken);
            localStorage.setItem("token",data.authToken)
      

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <br/>

        <input type="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" value={password} placeholder='enter email' onChange={(e)=>setPassword(e.target.value)} />
        <br/>

        <button onClick={userLogin}>Login</button>
    </div>
  )
}

export default Login