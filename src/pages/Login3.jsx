// import { useEffect, useState } from "react";
// import React from "react";
// import "./login.css";
// import SetCookie from "../components/Hooks/setCookie";
// import GetCookie from "../components/Hooks/getCoookie";
// import RemoveCookie from "../components/Hooks/RemoveCookie";
// import axios from "axios";

// const AuthContext = React.createContext();

// export const AuthProvider = ({children}) => {
//     const [loading, setLoading] = React.useState(false);
//     const [newError, setNewError] = React.useState('');
//     const [succes, setSucces] = React.useState(false);
//     const [imageUrl, setImageUrl] = React.useState('');

//     const checkUser = GetCookie('usrin');
//     const [userIn, setUserIn] = React.useState(checkUser == undefined ? {} : JSON.parse(checkUser));
//     const registerUser = async (userData) =>{

//     }
//     const login = async (userData) => {
//         try{
//             setLoading(true);
//             const res = await axios.post('/users/login', userData);
//             if (res.data){
//                 RemoveCookie('usrin');
//                 SetCookie('usrin', JSON.stringify(res.data))
//                 setSucces(true);
//                 setUserIn(res.data);
//                 return res.data;
//             };
//         }catch(error){
//             if(error.response) {
//                 console.log(error.response.data.massage)
//                 setNewError(error.response.data.massage)
//             } else if (error.request) {
//                 console.log(error.request)
//             }else {
//                 console.log('Error', error.massage)
//             };
//         }finally{
//             setLoading(false);
//             setNewError('');
//             setSucces(false);
//         };
//     }

//         const LogOut = () => {
//             RemoveCookie('usrin')
//             setUserIn({});
//         }
//         const checkToken = async (token) =>{
//             try{
//                 const res = await axios.get('/users/me', {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`,
//                     }
                    
//                 });
//                 if(res.data){

//                 }
//             }
//         }

// }

    
//     return (
        
//         <div className="login-page">
//             <div className="login-box">
//                 <form className="box" action="/home">
//                     <label className="login_box-title" htmlFor="login" >Login</label>
//                     <input className="login-username" type="text" placeholder="User name" />
//                     <input className="login-password" type="password" placeholder="Password" />
//                     <div className="remember">
//                         <input type="checkbox" />
//                         <p className="checkbox-title">Remember me?</p>
                        
//                     </div>
//                     <button className="login-button">Sing In</button>
//                 </form>
//             </div>
//         </div>
//     )





// export default Login