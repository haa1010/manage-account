import React, {useState} from 'react';
import './NewUser.css'
import {Link} from "react-router-dom";

const NewUser = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [enteredUsername, setUsername] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredJob, setJob] = useState('Student');
    const [enteredFullname, setFullname] = useState('');
    const [enteredAddress, setAddress] = useState('');
    const [enteredDOB, setDOB] = useState('');

    const usernameChangeHandler = event => {
        setUsername(event.target.value)
        event.target.value.includes(' ') ? setIsValid(false) : setIsValid(true)
    }
    const passwordChangeHandler = event => {
        setPassword(event.target.value)
        event.target.value.includes(' ') ? setIsValid(false) : setIsValid(true)
    }
    const fullnameChangeHandler = event => {
        setFullname(event.target.value)
    }
    const jobChangeHandler = event => {
        setJob(event.target.value)
    }
    const addressChangeHandler = event => {
        setAddress(event.target.value)
    }
    const dobChangeHandler = event => {
        setDOB(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()
        if (Math.min(enteredUsername.length, enteredPassword.length, enteredAddress.length, enteredJob.length, enteredDOB.length, enteredDOB.length) <= 0 || enteredUsername.includes(' ') || enteredPassword.includes(' ')) {
            setIsValid(false)
            return;
        }
        const newUser = {
            username: enteredUsername,
            password: enteredPassword,
            fullname: enteredFullname,
            address: enteredAddress,
            dob: enteredDOB,
            job: enteredJob
        }
        setIsValid(true)
        props.onSignUp(newUser);

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
                <div className="form-field">
                    <label htmlFor="fullname">Full name <b>*</b></label>
                    <input type="text" value={enteredFullname} onChange={fullnameChangeHandler}
                           className={enteredFullname || isValid ? '' : 'invalid'}/></div>
                <div className="form-field">

                    <label htmlFor="address">Address <b>*</b></label>
                    <input type="text" value={enteredAddress} onChange={addressChangeHandler}
                           className={enteredAddress || isValid ? '' : 'invalid'}/></div>
                <div className="form-field">
                    <label htmlFor="dob">Date of Birth <b>*</b></label>
                    <input type="date" max={new Date().toLocaleString().slice(0,9)} min={'1970-01-01'} value={enteredDOB}
                           onChange={dobChangeHandler}
                           className={enteredDOB || isValid ? '' : 'invalid'}/></div>
                <div className="form-field">

                    <label htmlFor="job">Job <b>*</b></label>
                    <select name="job" value={enteredJob} onChange={jobChangeHandler}
                            className={enteredJob || isValid ? '' : 'invalid'}>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Developer">Developer</option>
                        <option value="Other">Other</option>
                    </select></div>
                <p>Already have an account? <Link to="/login"> Log in</Link></p>
                <button disabled={!isValid} type="submit">Sign up</button>
            </form>
        </div>)
}
export default NewUser;