import React, { localStorage, useState } from 'react';


class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            user: null
        };

    }


    componentDidMount() {

        // const loggedInUser = window.localStorage.getItem('user');
        this.setState({user: window.localStorage.getItem('user')})
        // console.log(this.user);

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
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

    }

    getCommentsByPost(postId) {

      fetch("http://localhost:3080/comments/" + postId, {mode: 'cors', method: 'GET'})
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result.comments)
              return result.comments
                //   return result.comments.sort((a, b) => {
                //   if (a.date > b.date) return -1;
                //   if (a.date < b.date) return 1;
                //   return 0;
                // })  
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
                                <li key={post._id}>
                                    <span>{post.message} <br></br>
                                    {post.author}{" "}
                                     @{" "}{(post.date.split("T")[1]).slice(0,5)},
                                     {" "}{(post.date.split("T")[0]).slice(-2)}/
                                     {(post.date.split("T")[0]).slice(-5, -3)}/
                                     {(post.date.split("T")[0]).slice(0, 4)}</span>
                                     <ul>
                                      {console.log(this.getCommentsByPost(post._id))}
                                      {this.getCommentsByPost(post._id).map(comment => (
                                        <li key={comment._id}>
                                          <span>{comment.comment} <br></br>
                                          {comment.author}{" "}
                                          @{" "}{(comment.date.split("T")[1]).slice(0,5)},
                                          {" "}{(comment.date.split("T")[0]).slice(-2)}/
                                          {(comment.date.split("T")[0]).slice(-5, -3)}/
                                          {(comment.date.split("T")[0]).slice(0, 4)}</span>
                                         </li>
                                        ))}
                                      </ul>
                                </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

}
export default Posts;
