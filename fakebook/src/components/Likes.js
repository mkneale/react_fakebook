import React, { Component } from 'react';

class Like extends Component {
    render () {
        return (
            <div> 
                 <p>Likes: {this.props.likes}</p>
                    
            </div>
        )
        }
}

export default Like;