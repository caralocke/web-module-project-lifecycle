import React from 'react'

class UserForm extends React.Component {
render(){
    return(
        <form>
            <input type='text' name='search' onChange={this.props.handleChange} value={this.props.value}/>
            <button>Search Users</button>
        </form>
    )
}
}

export default UserForm