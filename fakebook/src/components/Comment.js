import React, { Component } from 'react';
import '../style.css';
class Comment extends Component {
    render () {
        return (
            <div> <ul className="commentsList">
                <li className="italics" key={this.props.comment._id}>
                     <span>{this.props.comment.comment} <br></br>
                    {this.props.comment.author}{" "}
                    @{" "}{(this.props.comment.date.split("T")[1]).slice(0,5)},
                    {" "}{(this.props.comment.date.split("T")[0]).slice(-2)}/
                    {(this.props.comment.date.split("T")[0]).slice(-5, -3)}/
                    {(this.props.comment.date.split("T")[0]).slice(0, 4)}</span>
                </li>
                </ul>
            </div>
        )
        }
}


export default Comment;
