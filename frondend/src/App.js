import React from "react";
import logo from './logo.svg'
import './App.css'
import UserList from "./components/User";
import ProjectList from "./components/Projects";
import ToDoList from "./components/ToDo";
import axios from 'axios'
import Footer from "./components/Footer";
import Navb from "./components/Navb";
import { HashRouter, Route, Switch } from 'react-router-dom';

const NotFound404 = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todos': []
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
    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => {
        const projects = response.data
        this.setState(
          {
            'projects': projects
          }
        )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/todo')
      .then(response => {
        const todos = response.data
        this.setState(
          {
            'todos': todos
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
            <Route exact path='/' component={() => <UserList users={this.state.users} />} />
            <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects} />} />
            <Route exact path='/todo' component={() => <ToDoList todos={this.state.todos} />} />
            <Route component={NotFound404} />
          </Switch>
        </HashRouter>
        {/* <UserList users={this.state.users} /> */}

        <Footer />
      </div >

    )
  }
}

export default App;