import React, {useState,useEffect}from 'react'
import {useNavigate} from 'react-router-dom'


function Login() {
    const [email,setEmail]=useState(" ");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate("/Feed")
        }
    }, []);  
   async function login(){
        let item={email,password}
        let result=await fetch('http://localhost:5000/api/users/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"appliction/json"
            } ,body:JSON.stringify(item)      
        })
        result=await result.json();
        localStorage.setItem('user-info', JSON.stringify(result))
        navigate("/Feed")
    }

  return (
    <div>
        <h1>Login Page</h1>
        <div className="col-sm-6 offset-sm-3">
            <h1>email</h1>
            <input type="text" placeholder='email'onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
            <br/>
            <input type="text" placeholder='password'onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
            <br/>
            <button onClick={login} className='btn btn-primary'>Login</button>
        </div>
    </div>

  )
}

export default Login