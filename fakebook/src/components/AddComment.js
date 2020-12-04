import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

function AddComment({postOfReqId}){

  const [comment, setComment] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = (evt) => {
      console.log("handleSubmit is fired");
      evt.preventDefault();
      setComment(comment);
      var retrievedObject = localStorage.getItem('user');

       postComment(postOfReqId, JSON.parse(retrievedObject).name, comment);
       refreshPage();
  }

  async function postComment(postId, author, comment) {
      const url = 'http://localhost:3080/comments'
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({postId: postId, comment: comment, author: author}),
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
    return <div className='main'>Please sign in to comment!</div>
  };

  return (
    <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control style={{width: "20%"}} type="text" placeholder="Type a comment" value={comment} onChange={e => setComment(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit" size="sm">
                    Submit

                </Button>
            </Form>
    </div>

  );
};


export default AddComment;
