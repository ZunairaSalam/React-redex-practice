import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreators, loginUser} from '../store/actions';
import "./Login.css";

const Login = () => {
    const [user, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const users=useSelector(state => state.persons);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const validateForm = () => {
        return user.length > 0 && pass.length > 0;
      }
    
      const handleLogin = (e) => {
        e.preventDefault();
        // console.log(users);
        // const x=users.filter(u => u.username==user && u.password===pass);
        // if(x.length>0){
        //     console.log(x);
            let flag=dispatch(loginUser(users,user,pass));
            //dispatch(ActionCreators.login(user,pass));
            console.log(flag)
            if(flag){
            history.push({pathname: "/home"});
        }
        else{
            console.log("alert!!");
            alert("You are not Registered!");
        }
      };
      const handleRegister = (e) => {
        e.preventDefault();
          
          dispatch({type:"register", person:{username:user,password:pass}});

          history.push({
        pathname: "/home"});
        };
     
    return (
        <div className="Login">
         
          <Form>
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
            <span className='flexContainer'>
            <Button block size="lg" type="submit" onClick={(e)=>handleLogin(e)} disabled={!validateForm()} >
            Login
            </Button>
            <Button block size="lg" type="submit" onClick={(e)=>handleRegister(e)} disabled={!validateForm()} >
            Register
            </Button>
            </span>
          </Form>
        </div>
      );
    }
    
    export default Login;