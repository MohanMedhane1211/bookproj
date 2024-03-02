import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import './login.css';
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
    const btnLogin = {
        padding: "0.8rem 2rem",
        color: "#fff",
        background: "#04a528",
        border: "1px solid #777",
        marginTop: "10px",
        width: "30%"
    }
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMob] = useState(null);
    const getSignupData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/signup/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            signupUserData: {
                email,
                password,
                name,
                mobile
            },            
        })
            .then(resp => {
                console.log(resp)
                setEmail("");
                setPass("");
                setName("");
                setMob("");
                console.log(email,password,name,mobile)
            })
            .catch(err => console.log('something went wrong', err))
    }
    return (
        <form onSubmit={(e) => getSignupData(e)}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', alignItems: 'center', flexDirection: 'column' }} >
                <input type='email' placeholder='Enter Email' className='form-control' style={{ position: 'static', marginBottom: '10px' }} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Enter Password' className='form-control' style={{ position: 'static', marginBottom: '10px' }} onChange={(e) => setPass(e.target.value)} />
                <input type='text' placeholder='Enter Name' className='form-control' style={{ position: 'static', marginBottom: '10px' }} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Enter Mobile' className='form-control' style={{ position: 'static' }} onChange={(e) => setMob(e.target.value)} />

                <button type='submit' style={btnLogin}>Sign In</button>
            </div>
        </form>
    )
}

export default Signup;
