import './style.css';
import React, {useEffect, useState, localStorage} from 'react';

 export default class App extends React.Component {
   useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
   render() { return (
        <p>
        You need to logged in to do anything here!
        </p>
    );
}}
