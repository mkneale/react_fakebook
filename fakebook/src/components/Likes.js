import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';



class Like extends Component {

    constructor(props) {
        super(props);
        this.likePost = this.likePost.bind(this);
    };

    likePost(postId, error) {

        console.log('The link was clicked from post id:', postId);
        console.log('This is the user_Id', this.props.user_id);
        console.log('This is the username', this.props.user_name);
        fetch(`http://localhost:3080/posts/${postId}/like`, {
        mode: 'cors',
        method: 'POST',
        body: {authorId: this.props.user_id, author: this.props.user_name}
    })
    window.location.reload();
    };


    render () {

        return (
            <div>
               <p>
                 Likes: {this.props.likes} &nbsp;&nbsp;
                <Button key={this.props.post_id} variant="primary" size="sm" onClick={() => { this.likePost(this.props.post_id) }}>
                  <img src={process.env.PUBLIC_URL + 'thumbs_up_icon.png'} width='25px' height='25px' alt="thumbs-up-image"/>  Like
                </Button></p>
            </div>
        )
        }
}

export default Like;
