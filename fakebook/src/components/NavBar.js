import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';

class NavBarComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    };

    componentDidMount(){
    const retrievedUser = window.localStorage.getItem('user');
        if (retrievedUser) {
            this.setState({
                loggedIn: true
            });
        }
    }
render() {
    const { loggedIn } = this.state;
    return (
        
        <div className="NavBar">
                <Navbar variant="dark" style={{backgroundColor: "rgba(45, 85, 199, 1)"}} expand="lg" fixed="top" className="title">
                    <Navbar.Brand href="/home">FakeBook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {loggedIn ? <div /> : <Nav.Link href="/signin">Sign In</Nav.Link> }
                        {loggedIn ? <Nav.Link href="/signout">Sign Out</Nav.Link> : <div /> }
                        {loggedIn ? <div /> : <Nav.Link href="/signup">Sign Up</Nav.Link> }
                        <Nav.Link href="/posts">Posts</Nav.Link>
                        <Nav.Link href="/newpost">Share Post</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
        </div>
);}
}

export default NavBarComponent;
