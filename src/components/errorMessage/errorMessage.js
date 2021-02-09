import React from 'react';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img>
            <span>Упс, щось пішло не так</span>
        </>
    )
}

export default ErrorMessage;