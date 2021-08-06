/* to register users*/

import { useState, useEffect } from "react"; 

const Login = () => {
    const [name, setname] = useState();
    const [password, setPassword] = useState();
    const [email, setemail] = useState();
    const [result, setResult] = useState([]);

    const fetchLogin = async (name,password,email) => {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
        })
        const data = await response.json()
        console.log(data)
        setResult(data);
    }
    
    const getLogin = (e) => {  
        console.log("lkhsdfkl;sfdakl;fdsaljkfds;jk;s")  
        e.preventDefault();
        fetchLogin(name,password,email)
    }

    return (
        <div> 
         <form onSubmit={getLogin}>
             <label>name:</label> 
             <input onChange={(e) => setname(e.target.value)} /><br/>
             <label>email:</label> 
             <input onChange={(e) => setemail(e.target.value)} /><br/>
             <label>password:</label> 
             <input onChange={(e) => setPassword(e.target.value)} /><br/>
             <button type="submit">Login</button>
         </form>
         {/* <p>{result.map(result => <div>{result.object}, {result.date}</div>)}</p> */}
         </div>
      )
}

export default Login;