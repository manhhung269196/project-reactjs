import logo from './logo.svg'
import './App.css'
import ListUser from './layout/users/list-user'
import Main from './layout/main/main'
import Header from './layout/partials/header/header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ListTodo from './layout/todo/list-todo'

function App() {
  return (
    <div className="content">
      <Router>
        <div>
          <nav class="navbar navbar-expand-sm bg-light">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/user">
                  User
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/todo">
                  Todo
                </Link>
              </li>
            </ul>
          </nav>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
