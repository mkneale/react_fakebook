import './style.css';
import React from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Posts from './components/Posts';
import NavBarComponent from './components/NavBar';
import { Route, Switch, Redirect} from 'react-router-dom';

export const Routes =() => {
    return (
        <div>
          <NavBarComponent />
          <Switch>
          <Route exact path="/Home" component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/posts' component={Posts} />
          </Switch>
        </div>
    );
}
