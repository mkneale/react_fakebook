import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignIn() {
  return(
    <div className="SignIn" class="main-sign-box">
        <h2>Sign In</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    </div>

  );

}

export default SignIn;
