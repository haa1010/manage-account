import React, {useState} from 'react';
import './Login.css'

const Login = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [enteredUsername, setUsername] = useState('');
    const [enteredPassword, setPassword] = useState('');

    const usernameChangeHandler = event => {
        setUsername(event.target.value)
        setIsValid(true)
    }
    const passwordChangeHandler = event => {
        setPassword(event.target.value)
        setIsValid(true)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (Math.min(enteredUsername.length, enteredPassword.length) <= 0) {
            setIsValid(false)
            return;
        }
        const userLogin = {
            username: enteredUsername,
            password: enteredPassword
        }
        props.onLogin(userLogin);
        setIsValid(true)
        console.log(enteredUsername, enteredPassword, isValid)
    }

    return (
        <div className="card">
            <h1>Sign up</h1>
            <form onSubmit={submitHandler}>
                <div className="form-field">
                    <label htmlFor="username">Username <b>*</b></label>
                    <input type="text" value={enteredUsername} onChange={usernameChangeHandler}
                           className={enteredUsername || isValid ? '' : 'invalid'}/>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password <b>*</b></label>
                    <input type="password" value={enteredPassword} onChange={passwordChangeHandler}
                           className={enteredPassword || isValid ? '' : 'invalid'}/></div>
                <div className={isValid ? 'valid' : ''}>Please fill in all required fields!</div>
                <button type="submit">Log in</button>
            </form>
        </div>)
}
export default Login;