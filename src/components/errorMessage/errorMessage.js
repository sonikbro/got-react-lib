import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Щось пішло не так</span>
        </>
    )
}

export default ErrorMessage;