import React, { localStorage, useState } from 'react';
import SinglePost from './SinglePost';


class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            user: null,
        };

    }


    componentDidMount() {

        this.setState({user: window.localStorage.getItem('user')})

          fetch("http://localhost:3080/posts", {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.posts.sort((a, b) => {
                  if (a.date > b.date) return -1;
                  if (a.date < b.date) return 1;
                  return 0;
                })
              });
              return result.posts;
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
        const { error, isLoaded, items, user } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else if (!user) {
            return <div class="main">Please log in</div>
        } else {
            return (
                <div className="main">
                    <ul>
                        {items.map(post => (
                          < SinglePost post={post}/>
                        ))}
                    </ul>
                </div>
            );
        }
    }

}
export default Posts;
