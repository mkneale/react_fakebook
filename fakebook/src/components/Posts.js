import React from 'react';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    

    componentDidMount() {
          
          fetch("http://localhost:3080/posts", {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.posts
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render () {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="main">
                    <ul>
                        {items.map(post => (
                                <li key={post._id}>
                                    <span>{post.message}</span>
                                </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
export default Posts;