import './header.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ListUser from '../../users/list-user'
import ListTodo from '../../todo/list-todo'

function Header() {
  return (
    <div className="header-main">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>

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

export default Header
