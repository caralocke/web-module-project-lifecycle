import React from 'react'

class User extends React.Component {
render(){
    return(
        <div>
            <img src={this.props.user.avatar_url} alt='avatar'/>
            <h3>Name: {this.props.user.name}</h3>
        </div>
    )
}
}

export default User