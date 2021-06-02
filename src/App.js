import './App.css';
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Routes from "./Routes";
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";

function App() {
  const user = useSelector(state => state.username);
  const history = useHistory();
  console.log(history);
  return (
    <div className="App container py-3">
      
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          React Redux Management
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          {user?<Navbar.Text>{user}</Navbar.Text>:''}
          </Nav>
          <Nav.Link>Link</Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* calling routes to load first route */ }
      <Routes/>
    </div>
  );
}

export default App;
