import React from 'react'
import './User.css';

const User = (props) => {
    const user = props.userInfo
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
                    <h2>{user.dob.toDateString()}</h2>
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