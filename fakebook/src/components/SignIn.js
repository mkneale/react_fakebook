import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState, localStorage} from 'react';


function SignIn() {

    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    const handleSubmit = (evt) => {
      console.log("handleSubmit is fired");
      evt.preventDefault();
      setName(name);
      setPassword(password);
      postUser(name, password);
      console.log('user: ', user);
    } 

    async function postUser(name, password) {
      const url = 'http://localhost:3080/users/login'
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({name:name, password:password}),
        headers: {'Content-Type': 'application/json'},
       })
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log('Success', data);
        setUser(data);
        window.localStorage.setItem('user', data);
        console.log(window.localStorage.getItem('user'));
      })
      .catch(function(error) {
        console.log('Error', error);
      });
      } //async

    if (user) {
      return <div class='main'>{user.name} is logged in </div>
    }
      
      return (
        <div className="SignIn" class="main-sign-box">
            <h2>Sign In</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
      )

} //class

export default SignIn;
