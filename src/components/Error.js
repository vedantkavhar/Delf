import React from 'react';
import { useRouteError } from 'react-router-dom';
import { error_img } from '../utils/constants';

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-body">
        <div className="error-container">
            <div className="error-image">
                <img src={error_img} alt="Error" />
            </div>
            <div className="error-info">
                <p className="error-heading">{err.status + ' : ' + err.statusText}</p>
                <p className="error-message">{err.error.message}</p>
                <p className="error-message">
                Sorry, but we can't find the page you are looking for...
                </p>
                <button className="home-button" onClick={() => window.location.href = '/'}>
                Go to Home
                </button>
            </div>
        </div>
    </div>
  );
};

export default Error;
