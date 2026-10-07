import { useState } from 'react'
 function LoginInputs() { 
    const [email, setEmail]       = useState("") 
    const [password, setPassword] = useState("")
     return (
         <div> 
            <input
             type="email" 
             value={email}
              onChange={(event) => setEmail(event.target.value)}
               placeholder="Enter email" 
               />
                <input type="password"
                 value={password}
                  onChange={(event) => setPassword(event.target.value)} 
                  placeholder="Enter password" 
                  />
                   <p>Email: {email}</p>
                    <p>Password: {password}</p>
                 </div> 
                 )
                 }
                 export default LoginInputs;