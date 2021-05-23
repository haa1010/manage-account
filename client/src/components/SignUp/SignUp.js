import React from 'react';
import NewUser from './NewUser';

import './SignUp.module.css';
import {useHistory} from "react-router-dom";


const SignUp = (props) => {
    const history = useHistory();

    async function signUpHandler(newUser) {
        console.log("in login. js")
        console.log(newUser)

        try {
            const response = await fetch('http://127.0.0.1:8081/user',
                {
                    headers: {'Content-Type': 'application/json'},
                    method: 'POST',
                    body: JSON.stringify(newUser)
                })
            if (!response.ok) {
                const errMessage = await response.text()
                alert(errMessage)
                throw Error(response.statusText)
            }
            const data = await response.json()
            localStorage.setItem('isLogin', '1');
            history.push(`users/${data.id}`)

        } catch (e) {
            console.log("catch :", e)
        }
    }

    return (
        <NewUser onSignUp={signUpHandler}>
            {props.children}
        </NewUser>
    );
};
export default SignUp;
