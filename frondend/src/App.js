import React from "react";
import logo from './logo.svg'
import './App.css'
import UserList from "./components/User";
import ProjectList from "./components/Projects";
import ProjectListItem from "./components/Project";
import ToDoList from "./components/ToDo";
import axios from 'axios'
import Footer from "./components/Footer";
import Navb from "./components/Navb";
import { HashRouter, Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import LoginForm from './components/Auth.js';
import Cookies from 'universal-cookie';


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
      'todos': [],
      'token': '',
      'username': ''
    }
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({ 'token': token }, () => this.load_data())
  }

  set_username(username) {
    const cookies = new Cookies()
    cookies.set('username', username)
    this.setState({ 'username': username })
  }

  is_authenticated() {
    return this.state.token != ''
  }

  logout() {
    this.set_token('')
    this.set_username('')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({ 'token': token }, () => this.load_data())
  }

  get_username_from_storage() {
    const cookies = new Cookies()
    const username = cookies.get('username')
    this.setState({ 'username': username })
  }


  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {
      username: username,
      password: password,
    }).then(response => {
      this.set_token(response.data['token'], this.set_username(username))
    }).catch(error => alert('Неверный логин или пароль'))
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }


  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/users', { headers })
      .then(response => {
        this.setState(
          {
            users: response.data
          }
        )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/projects', { headers })
      .then(response => {
        this.setState(
          {
            projects: response.data
          }
        )
      }).catch(error => console.log(error), this.setState({ projects: [] }))
    axios.get('http://127.0.0.1:8000/api/todo', { headers })
      .then(response => {
        this.setState(
          {
            todos: response.data
          }
        )
      }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.get_token_from_storage()
    this.get_username_from_storage()

    // this.load_data()
    // axios.get('http://127.0.0.1:8000/api/users')
    //   .then(response => {
    //     const users = response.data
    //     this.setState(
    //       {
    //         'users': users
    //       }
    //     )
    //   }).catch(error => console.log(error))
    // axios.get('http://127.0.0.1:8000/api/projects')
    //   .then(response => {
    //     const projects = response.data
    //     this.setState(
    //       {
    //         'projects': projects
    //       }
    //     )
    //   }).catch(error => console.log(error))
    // axios.get('http://127.0.0.1:8000/api/todo')
    //   .then(response => {
    //     const todos = response.data
    //     this.setState(
    //       {
    //         'todos': todos
    //       }
    //     )
    //   }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Navb />

        {/* <HashRouter> */}
        <BrowserRouter>
          <nav>
            {this.is_authenticated() ? 'пользователь: ' + this.state.username + ' ' : ''}
            {this.is_authenticated() ? <button onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
          </nav>
          <Switch>
            <Route exact path='/' component={() => <UserList users={this.state.users} />} />
            <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects} />} />
            <Route path='/project/:id' component={() => <ProjectListItem projects={this.state.projects} />} />
            <Route exact path='/todo' component={() => <ToDoList todos={this.state.todos} />} />
            <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
            <Route component={NotFound404} />
          </Switch>
        </BrowserRouter>
        {/* </HashRouter> */}
        <Footer />
      </div >

    )
  }
}

export default App;