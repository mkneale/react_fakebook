import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBarComponent() {
    return (
        <div className="NavBar">
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="/home">FakeBook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/posts">Posts</Nav.Link>
                        <Nav.Link href="/signout">Sign Out</Nav.Link>
                        <Nav.Link href="/newpost">Share Post</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
        </div>
);
}

export default NavBarComponent;
