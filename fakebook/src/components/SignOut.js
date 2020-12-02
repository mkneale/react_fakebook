import '../style.css';
import React from 'react';

function SignOut () {

    window.localStorage.clear();

    return (
         <div className="main">You have been signed out</div>
    )

}

export default SignOut;