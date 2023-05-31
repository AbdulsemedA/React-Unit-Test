import React,{useEffect, useState} from "react";
import './login.css'

const LoginForm = ({submit}) =>{
    const [values, setValues] = useState({
        username: '',
        password:'',
    })
    const [butStat, setButStat] = useState(true)
    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.id]: event.target.value,
        });
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        submit(values)
    }
    useEffect(()=>{
        if (values.username!=="" && values.password!==""){
            setButStat(false)
        }
        else{
            setButStat(true)
        }
    },[values])

    return (
        <div class="login-container">
        <h2>Login</h2>
        <form onSubmit = {handleSubmit} id="demoform">
          <div class="input-group">
          <label htmlFor="username">username</label>
            <input type="text" id="username" name="username" onChange={handleChange} value={values.username}></input>
          </div>
          <div class="input-group">
          <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" onChange={handleChange} value={values.password}></input>
          </div>
          <button type="submit" disabled={butStat} class="submit-btn">Submit</button>
        </form>
        </div>
    )
}


export default LoginForm