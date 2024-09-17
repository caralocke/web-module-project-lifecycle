import React from 'react'
import Follower from './Follower'

class Followers extends React.Component {

    render(){
        return(
            <div className='followers'>
                {
                    this.props.followers.map(follower =>{
                        return(
                            <Follower key={follower.id} follower={follower}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Followers