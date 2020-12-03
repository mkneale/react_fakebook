import React, { Component } from 'react';
import Comment from './Comment';
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
            <div>
                <li key={this.props.post._id}>
                     <span>{this.props.post.message} <br></br>
                    {this.props.post.author}{" "}
                    @{" "}{(this.props.post.date.split("T")[1]).slice(0,5)},
                    {" "}{(this.props.post.date.split("T")[0]).slice(-2)}/
                    {(this.props.post.date.split("T")[0]).slice(-5, -3)}/
                    {(this.props.post.date.split("T")[0]).slice(0, 4)}</span>   
                    < Like likes={this.props.post.likes} post_id={this.props.post._id} user_id={this.props.user_id} user_name={this.props.user_name}/> 
                    {items.map(comment => (
                          < Comment comment={comment}/>
                        ))}          
                </li>
            </div>
        )
        }
}

export default SinglePost;