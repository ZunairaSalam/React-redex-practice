import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

export const ActionCreators = {
    register: (person) => ({type: 'register', person:person}),
    login: (user,pass) => ({type: 'login', username:user,password:pass}),
    logout: () => ({type: 'logout'}),
    remove: (index) => ({type: 'deletePerson', payload:index}),   
}
let flag=false;
export const loginUser = (users,user,pass) => {
    
    const x=users.filter(u => u.username==user && u.password===pass);
    if(x.length>0){
        flag=true;
    return(dispatch)=>{
        dispatch(ActionCreators.login(user,pass) );
        return flag;
    }}

}

