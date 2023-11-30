import { useEffect, useState } from "react";
import "./login.css";
import BG from "../img/login-bg.jpg"
// import SetCookie from "../components/Hooks/setCookie";
// import GetCookie from "../components/Hooks/getCoookie";
// import RemoveCookie from "../components/Hooks/RemoveCookie";

const admin = {
    userName: "admin",
    password: "admin"
}

const Login = () => {
    // const items = [{value: "Sing In", href: '/home'}]
    const [userNameInput, setUserNameInput] = useState('');
    const [userPasswordInput, setPasswordInput] = useState('')
    const [singIn, setSingIn] = useState(false)
        
        
useEffect(()=> {
    if (userNameInput === admin.userName && userPasswordInput === admin.password)
        setSingIn(true)
    }, [userPasswordInput, userNameInput])
    

    
    return (
        
        <div className="login-page" style={{backgroundImage: `url(${BG})`}} >
            
            <div className="login-box">
                <form className="box" action="/home">
                    <label className="login_box-title" htmlFor="login" >Login</label>
                    <input className="login-username" type="text" placeholder="User name" onChange={(e) => setUserNameInput(e.target.value)}/>
                    <input className="login-password" type="password" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)}/>
                    <div className="remember">
                        <input type="checkbox" />
                        <p className="checkbox-title">Remember me?</p>
                        
                    </div>
                    <button className="login-button"    disabled={!singIn}>Sign In</button>
                </form>
            </div>
        </div>
    )
}




export default Login