import React, {useState, useReducer, useEffect} from 'react';
import { useHistory, Link} from "react-router-dom";
import Input from "../UI/Input";

import './Login.css'

const usernameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.trim().length > 0};
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.trim().length > 0};
    }
    return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.trim().length > 0};
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.trim().length > 0};
    }
    return {value: '', isValid: false};
};

const Login = (props) => {

    const [isValid, setIsValid] = useState(true);
    const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
        value: '',
        isValid: false,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false,
    });
    useEffect(() => {
        setTimeout(() => {
            setIsValid(passwordState.isValid && usernameState.isValid)
        })
    }, [passwordState.isValid, usernameState.isValid])

    const usernameChangeHandler = (event) => {
        dispatchUsername({type: 'USER_INPUT', val: event.target.value})
    }
    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value})
    }

    const validateUsernameHandler = () => {
        dispatchUsername({type: 'INPUT_BLUR'})
    }
    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'})
    }

    const history = useHistory();

    async function submitHandler(event) {
        event.preventDefault()
        const userLogin = {
            username: usernameState.value,
            password: passwordState.value
        }
        console.log(userLogin, isValid)

        try {
            const response = await fetch('http://127.0.0.1:8081/users/login',
                {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'POST',
                    body: JSON.stringify(userLogin)
                })
            console.log(response)
            if (!response.ok) {
                const errMessage = await response.text()

                alert(errMessage)
                throw Error(response.statusText)
            }
            const data = await response.json()
            console.log(data)
            history.push(`users/${data.id}`)

        } catch (e) {
            console.log("catch :", e)
        }
    }

    return (
        <div className="card">
            <h1>Log in</h1>
            <form onSubmit={submitHandler}>
                <Input
                    // ref={emailInputRef}
                    label="Username"
                    type="text"
                    isValid={usernameState.isValid}
                    value={usernameState.value}
                    onChange={usernameChangeHandler}
                    onBlur={validateUsernameHandler}
                />
                <Input
                    // ref={passwordInputRef}
                    label="Password"
                    type="password"
                    isValid={passwordState.isValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                {/*<div className={isValid ? 'valid' : ''}>Please fill in all required fields!</div>*/}
                <p>Don't have an account yet? <Link to="/signup"> Sign up</Link></p>
                <button type="submit" disabled={!isValid}>Log in</button>
            </form>
        </div>
    )
}
export default Login;