import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login";
        }
        else {
            newUrl += "/api/user/register";
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        }
        else {
            alert(response.data.message);
        }


    }

    return (
        <div className='login-popup' onClick={() => setShowLogin(false)}>
            <form onSubmit={onLogin}
                action=""
                className="login-popup-container"
                onClick={(e) => e.stopPropagation()} /* Prevent closing on form click */
            >
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <FontAwesomeIcon
                        onClick={() => setShowLogin(false)}
                        icon={faXmark}
                        style={{ fontSize: '24px', cursor: 'pointer' }}
                    />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? null : <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
