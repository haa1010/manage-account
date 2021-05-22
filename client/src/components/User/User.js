import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import './User.css';

const User = () => {

    const params = useParams();

    const [user, setUser] = useState({
        id: 1,
        username: "",
        address: "",
        job: "",
        dob: "",
        fullname: ""
    });

    useEffect(() => {
        console.log('params', params)
        fetch(`http://localhost:8081/users/${params.userId}`)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                setUser(data)
                console.log("user ", user)
            })

    }, [])


    return (
        <div className="card user-detail">
            <img src={process.env.PUBLIC_URL + "/user.png"} alt="" style={{maxWidth: '250px', width: '50%'}}/>
            <h1>{user.username}</h1>
            <div className="detail">
                <div className="form-field">
                    <label>Full name</label>
                    <h2>{user.fullname}</h2>
                </div>
                <div className="form-field">
                    <label>Address</label>
                    <h2>{user.address}</h2>
                </div>
                <div className="form-field">
                    <label>Date of Birth</label>
                    <h2>{ new Date(Date.parse(user.dob)).toLocaleDateString()}</h2>
                </div>
                <div className="form-field">
                    <label>Job</label>
                    <h2>{user.job}</h2>
                </div>
            </div>
            <button>Log out</button>
        </div>
    )
};

export default User;