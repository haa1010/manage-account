import React from 'react';
import NewUser from './NewUser';

import './SignUp.module.css';


const SignUp = (props) => {
    const signUpHandler = (newUser) => {
        console.log("in login. js")
        console.log(newUser)
    }
    return (
        <NewUser onSignUp={signUpHandler}>
            {props.children}
        </NewUser>
    );
};
export default SignUp;
