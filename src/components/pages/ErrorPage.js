import React from 'react';
import UseTitle from '../hooks/UseTitle';

const ErrorPage = () => {
    UseTitle('Error')
    return (
        <div className='text-3xl text-center mt-60 text-amber-900 font-medium'>
            <h1>Upps! your search link is not available.</h1>
            <p>404 Not Found</p>
            <p>Please check the link you clicked</p>
        </div>
    );
};

export default ErrorPage;