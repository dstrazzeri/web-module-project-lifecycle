import React from 'react';
import axios from 'axios';

import FollowerList from './components/FollowerList';
import User from './components/User';


class App extends React.Component {
  state = {
    currentUser: '',
    user: {},
    followers: [],
    input: 'dstrazzeri',
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err =>{
        console.error(err)
      });
  }
      
  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user){
      console.log('we are updating the')
      // if(this.state.input ===  ){
      axios.get(`https://api.github.com/users/${this.state.input}/followers`)
      .then(res =>{
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
      .catch(err =>{
        console.error(err)
      })
      .finally(
        this.setState({
          ...this.state,
          input: ''
        })
      )
    }
  }
  
  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  handleClick = (e) =>{
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then( res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err =>{
        console.error(err)
      })
  }

  render() {
    return(
      <div className='App'>
        <h1>Github Card</h1>
        <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Find</button>
        </form>
        <div className='user'>
          <User user={this.state.user}/>
        </div>
        <h3>Users that <span>{this.state.user.name}</span> Follows:</h3>
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
