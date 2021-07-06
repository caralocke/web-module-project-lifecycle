import React from 'react'
import './App.css';
import UserForm from './components/UserForm';
import User from './components/User';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: null,
    formValues: ''
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/caralocke")
    .then(res => {
      console.log('App res.data:', res.data)
      this.setState({user: res.data})
  })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          <h1>Github User Cards</h1>
          <UserForm />
          {this.state.user && (
          <div className="users-container">
            <User user={this.state.user}/>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;
