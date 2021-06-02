import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreators} from './actions';

export const createUser = async (data) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });
    
    let result = await promise; 
    // const dispatch = useDispatch();
    // const history = useHistory();
    console.log('create user service');
    console.log(data);

}