import React, { useState } from "react";
import {Row,Col,Container} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import {ActionCreators} from '../store/actions';
import  "./Login.css";

export default function Home(){
    const user = useSelector(state => state.username);
    const users=useSelector(state => state.persons);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout=(e)=>{
        e.preventDefault();
        
        dispatch(ActionCreators.logout());
          history.push({
        pathname: "/login"});
    }
    const handleUnregister=(e)=>{
        e.preventDefault();
        //deletePerson(user,users);
        const index=users.findIndex(u => u.username==user);
        console.log(index);
        dispatch(ActionCreators.remove(index));
        //dispatch({type:"deletePerson", payload:payload});
        history.push({
            pathname: "/login"});
    }
    return(
    <div className="flexContainer">
     
      <h2>Hello {user}</h2>
      
      <Button block size="sm" type="submit" onClick={(e)=>handleLogout(e)} >
            Logout
    </Button>
    <Button block size="sm" type="submit" onClick={(e)=>handleUnregister(e)} >
            UnRegister
    </Button>
            
    </div>);
}