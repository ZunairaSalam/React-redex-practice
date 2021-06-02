import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
//import {ActionCreators} from '../../actions/userProfile';
import {createUser} from '../store/services';
import "./Login.css";

const Register = () => {
    
    const [user, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const username = useSelector(state => state.username);
    const password = useSelector(state => state.password);


    const dispatch = useDispatch();
    const history = useHistory();

    const validateForm = () => {
        return user.length > 0 && pass.length > 0;
      }
    
      const handleRegister = (e) => {
        e.preventDefault();
          createUser({person:{username:user,password:pass}});
          dispatch({type:"register", person:{username:user,password:pass}});
          history.push({
        pathname: "/home"});
        };
      
     
    return (
        <div className="Login">
          
          <Form>
          <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="user">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={user}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
    
            <Form.Group size="lg" controlId="pass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoFocus
                type="password"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            
    
            <Button block size="lg" type="submit" onClick={(e)=>handleRegister(e)} disabled={!validateForm()}>
              Register
            </Button>
          </Form>
        </div>
      );
    }
    
    export default Register;