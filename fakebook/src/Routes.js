import './style.css';
import React from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Posts from './components/Posts';
import SignOut from './components/SignOut';
import NewPost from './components/NewPost';
import NavBarComponent from './components/NavBar';
import { Route, Switch, Redirect} from 'react-router-dom';
import SinglePost from './components/SinglePost';

export const Routes =() => {
    return (
        <div>
          <NavBarComponent />
          <Switch>
          <Route exact path="/Home" component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/posts' component={Posts} />
            <Route path="/posts/:postId" component={SinglePost} />
            <Route exact path='/signout' component={SignOut} />
            <Route exact path='/newpost' component={NewPost} />
          </Switch>
        </div>
    );
}
