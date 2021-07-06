import React from 'react'

class Follower extends React.Component {
    render(){
        return(
            <div className='follower'>
                <img src={this.props.follower.avatar_url} alt='avatar'/>
                <h4>Username: {this.props.follower.login}</h4>
            </div>
        )
    }
}

export default Follower