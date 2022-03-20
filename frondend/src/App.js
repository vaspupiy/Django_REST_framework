import React from "react";
import logo from './logo.svg'
import './App.css'
import UserList from "./components/User";
import axios from 'axios'
import Footer from "./components/Footer";
import Navb from "./components/Navb";
import { HashRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data
        this.setState(
          {
            'users': users
          }
        )
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Navb />
        <HashRouter>
          <Switch>
            {/* <Route exact path='/' component={() => <UserList items={this.state.users} />} /> */}
            <Route exact path='/home' component={() => <UserList users={this.state.users} />} />
          </Switch>
        </HashRouter>
        <UserList users={this.state.users} />

        <Footer />
      </div >

    )
  }
}

export default App;