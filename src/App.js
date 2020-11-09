import React from 'react';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap'
import Home from './Home'
import Users from './Users'
import About from './About'
import Messages from './Messages'
import NewMessage from './NewMesssage'
import {Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
            <Nav.Link><Link to="/messages">Messages</Link></Nav.Link>
            <Nav.Link><Link to="/newmessage">New Message</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
        <Route path="/about" component={About} ></Route>
        <Route path="/users" component={Users} ></Route>
        <Route path="/messages" component={Messages} ></Route>
        <Route path="/newmessage" component={NewMessage} ></Route>
        <Route path="/" component={Home} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
