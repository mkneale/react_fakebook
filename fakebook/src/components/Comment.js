import React, { Component } from 'react';

class Comment extends Component {
    render () {
        return (
            <div>
                <Greeting greeting={{ text: 'Welcome to React' }} />
            </div>
        )
        }
}
const Greeting = ({ greeting }) => <h1>{greeting.text}</h1>;

export default Comment;