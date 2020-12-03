import React, { Component } from 'react';

class SinglePost extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;

        this.setState({user: window.localStorage.getItem('user')})

          fetch(`http://localhost:3080/posts/${params.postId}`, {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result.post);
              return result.post;
            },
            (error) => {
                throw error;
            }
          )
    }

    render () {
        return (
            <div>
                <Greeting greeting={{ text: 'Welcome to React' }} />
            </div>
        )
        }
}
const Greeting = ({ greeting }) => <h1>{greeting.text}</h1>;

export default SinglePost;