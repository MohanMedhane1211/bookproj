import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import './login.css';

const Login = () => {
    const btnLogin = {
        padding: "0.8rem 2rem",
        color: "#fff",
        background: "#04a528",
        border: "1px solid #777",
        marginTop: "10px",
        width: "30%"
    }
    return (
        <div>
            <div style={{display: 'flex',justifyContent: 'center', marginTop: '80px', alignItems:'center', flexDirection: 'column'}}>
                <input type='text' placeholder='Enter Email' className='form-control'  style={{position: 'static', marginBottom: '10px'}} />
                <input type='text' placeholder='Enter Password' className='form-control' style={{position: 'static'}} />
                <button type='button' style={btnLogin}>Sign In</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <GoogleOAuthProvider clientId="892544453603-4oqlbik6f3pjprcg0lbu0n5ngqkof2mg.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const details = jwtDecode(credentialResponse.credential)
                            console.log('====>>>', details);
                            window.location.replace("http://localhost:3000/home/");
                        }}
                        onError={(err) => {
                            console.log('Login Failed', err);
                        }}
                    />
                </GoogleOAuthProvider>
            </div>
        </div>
    )
}

export default Login;
