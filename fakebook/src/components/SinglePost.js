import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import '../style.css';
import Like from './Likes';

class SinglePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [],
    };
}
    componentDidMount() {

          fetch(`http://localhost:3080/comments/${this.props.post._id}`, {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result.comments
              })

            },
            (error) => {
                throw error;
            }
          )
    }

    render () {
      const { items } = this.state;
        return (
            <div className="postBorder">
                <li key={this.props.post._id}>
                     <span className="breaklines"><span className="messageBox">{this.props.post.message}<br></br></span>
                     {this.props.post.author}{" "}
                    @{" "}{(this.props.post.date.split("T")[1]).slice(0,5)},
                    {" "}{(this.props.post.date.split("T")[0]).slice(-2)}/
                    {(this.props.post.date.split("T")[0]).slice(-5, -3)}/
                    {(this.props.post.date.split("T")[0]).slice(0, 4)}</span><br></br>
                    <div className="boldText">< AddComment postOfReqId={this.props.post._id} />&nbsp;&nbsp;</div>
                    <div>< Like likes={this.props.post.likes} post_id={this.props.post._id} user_id={this.props.user_id} user_name={this.props.user_name}/></div>
                    {items.map(comment => (
                          < Comment comment={comment}/>
                        ))}
                </li>
            </div>
        )
        }
}

export default SinglePost;
