import React from 'react'
import './App.css';
import UserForm from './components/UserForm';
import User from './components/User';
import Followers from './components/Followers';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: null,
    formValues: '',
    followers: []
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/caralocke")
    .then(res => {
      console.log('App res.data:', res.data);      
      this.setState({user: res.data})
  })
      .catch(err => {
        console.log(`Here's where you messed up:\n`, err)
      })
    axios.get(`https://api.github.com/users/caralocke/followers`)
        .then(res => {
          console.log('App followers res.data:\n', res.data)
          this.setState({followers: res.data})
        })
        .catch(err => {
          console.log(`Here's where you messed up:\n`, err)
        })  
  }

  handleChange = event => {
    console.log('App event target:\n', event.target.value)
    this.setState({
      formValues: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Github User Cards</h1>
          <UserForm formChange={this.handleChange}/>
          {this.state.user && (
          <div className="users-container">
            <User user={this.state.user}/>
            <h2>Followers:</h2>
            <Followers followers={this.state.followers}/>
          </div>
        )
        }
        </div>
    );
  }
}

export default App;
