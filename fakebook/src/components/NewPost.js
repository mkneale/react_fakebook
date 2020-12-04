import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function NewPost(){

  let history = useHistory();
  const [message, setMessage] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = (evt) => {
      console.log("handleSubmit is fired");
      evt.preventDefault();
      setMessage(message);
      var retrievedObject = localStorage.getItem('user');
      postPost(JSON.parse(retrievedObject)._id, JSON.parse(retrievedObject).name, message);
      history.push('/posts');
      refreshPage();
  }

  async function postPost(userId, author, message) {
      const url = 'http://localhost:3080/posts'
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({userId: userId, message: message, author: author}),
        headers: {'Content-Type': 'application/json'},
       })
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log('Success', data);
      })
      .catch(function(error) {
      });
      }


  if (!window.localStorage.getItem('user')) {
    return <div className='main'>Please sign in to post!</div>
  };

  return (
    <div className="main-sign-box">
        <h2>Share a Post</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type a post" value={message} onChange={e => setMessage(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit

                </Button>
            </Form>
    </div>

  );
}

export default NewPost;
