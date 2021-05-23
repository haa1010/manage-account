import React from 'react';

const Input = (props) => {

    return (
        <div className= "form-field ">
            <label htmlFor={props.label}>{props.label} <b>*</b></label>
            <input type={props.type} value={props.value} onChange={props.onChange} onBlur={props.onBlur} className={props.isValid === false ? 'invalid' : ''}/>
        </div>
    )
};

export default Input;