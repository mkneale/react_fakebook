import React, { Component } from 'react';

class Comment extends Component {
    render () {
        return (
            <div>
                <li key={this.props.comment._id}>
                     <span>{this.props.comment.comment} <br></br>
                    {this.props.comment.author}{" "}
                    @{" "}{(this.props.comment.date.split("T")[1]).slice(0,5)},
                    {" "}{(this.props.comment.date.split("T")[0]).slice(-2)}/
                    {(this.props.comment.date.split("T")[0]).slice(-5, -3)}/
                    {(this.props.comment.date.split("T")[0]).slice(0, 4)}</span>     
                </li>
            </div>
        )
        }
}


export default Comment;