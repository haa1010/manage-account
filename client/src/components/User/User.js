import React, {useEffect, useState} from 'react'
import {useHistory, useParams, Link} from 'react-router-dom'

import './User.css';

const User = () => {

    const params = useParams();
    const history = useHistory();

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

    const logOutHandler = () => {
        localStorage.removeItem('isLogin');
        history.push('/login')
    }

    let content = <div className='card'>Please <Link to='/login'>log in </Link> to see this page</div>;

    if (localStorage.getItem('isLogin') !== null) {
        content = <div className="card user-detail">
            <img src={process.env.PUBLIC_URL + "/user.png"} alt="" style={{maxWidth: '250px', width: '50%'}}/>
            <h1>{user.username}</h1>
            <div className="detail">
                <div className="form-field">
                    <label>Full name</label>
                    <h3>{user.fullname}</h3>
                </div>
                <div className="form-field">
                    <label>Address</label>
                    <h3>{user.address}</h3>
                </div>
                <div className="form-field">
                    <label>Date of Birth</label>
                    <h3>{new Date(Date.parse(user.dob)).toLocaleDateString()}</h3>
                </div>
                <div className="form-field">
                    <label>Job</label>
                    <h3>{user.job}</h3>
                </div>
            </div>
            <button onClick={logOutHandler}>Log out</button>
        </div>

    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
};

export default User;