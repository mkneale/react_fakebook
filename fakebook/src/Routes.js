import './style.css';
import React from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Posts from './components/Posts';
import SignOut from './components/SignOut';
import Comment from './components/Comment';
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
            <Route exact path='/signout' component={SignOut} />
          </Switch>
        </div>
    );
}
