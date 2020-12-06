import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import Button from 'react-bootstrap/Button';
import '../style.css';
import Like from './Likes';

class SinglePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        showCommentBox: false,
        comments: [],
    };
    this.changeCommentBox = this.changeCommentBox.bind(this);
  }

  changeCommentBox() {
    this.setState((prevState) => {
      return {
      showCommentBox: !prevState.showCommentBox
    }});
  }
    componentDidMount() {

          fetch(`http://localhost:3080/comments/${this.props.post._id}`, {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                comments: result.comments
              })

            },
            (error) => {
                throw error;
            }
          )
    }

    render () {
        return (
            <div className="postBorder">
                <li key={this.props.post._id}>
                     <span key={this.props.post._id} className="breaklines"><span className="messageBox">{this.props.post.message}<br></br></span>
                     {this.props.post.author}{" "}
                    @{" "}{(this.props.post.date.split("T")[1]).slice(0,5)},
                    {" "}{(this.props.post.date.split("T")[0]).slice(-2)}/
                    {(this.props.post.date.split("T")[0]).slice(-5, -3)}/
                    {(this.props.post.date.split("T")[0]).slice(0, 4)}</span><br></br> 
                    <div key={this.props.post._id}>
                      < Like likes={this.props.post.likes} post_id={this.props.post._id} user_id={this.props.user_id} user_name={this.props.user_name}/>
                      <Button key={this.props.post._id} onClick={this.changeCommentBox}>
                        {this.state.showCommentBox ? 'Hide Comments' : 'Show Comments'}</Button>
                        {this.state.showCommentBox && <AddComment postOfReqId={this.props.post._id} />}
                        </div>
                        {this.state.showCommentBox && this.state.comments.map((comment) => (
                          <Comment comment={comment} />
                        ))}
                </li>
            </div>
        )
        }
}

export default SinglePost;
