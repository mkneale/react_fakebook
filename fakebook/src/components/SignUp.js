import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

function SignUp() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        console.log("handleSubmit is fired");
        evt.preventDefault();
        setName(name);
        setEmail(email);
        setPassword(password);
        console.log(email, password);
        postUser(email, name, password);
    }

    

        async function postUser(user, name, password) {
            const url = 'http://localhost:3080/users'
            await fetch(url, {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify({email:email, name:name, password:password}),
              headers: {'Content-Type': 'application/json'},
             })
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
              console.log('Success', data);
            })
            .catch(function(error) {
            });
            }   


    return (
        <div className="SignUp" class="main-sign-box">
            <h2>Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    );
}

export default SignUp;
