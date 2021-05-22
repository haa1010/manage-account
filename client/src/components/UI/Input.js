import React from 'react';

const Input = (props) => {
    return (
        <div className={props.isValid === false ? 'invalid' : ''}>
            <label htmlFor={props.label}>{props.label}</label>
            <input type={props.type} value={props.value} onChange={props.onChange} onBlur={props.onBlur}/>
        </div>
    )
};

export default Input;