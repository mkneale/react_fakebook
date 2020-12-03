import React, { Component } from 'react';

class Like extends Component {

    render () {
        return (
            <div> 
               <p> <img src={process.env.PUBLIC_URL + 'thumbs_up_icon.png'} width='25px' height='25px' />
                 Likes: {this.props.likes}</p> 
                 Post ID: {this.props.post_id}   
                <p> User ID: {this.props.user_id} </p>
                <p> User name: {this.props.user_name} </p>
            </div>
        )
        }
}

export default Like;