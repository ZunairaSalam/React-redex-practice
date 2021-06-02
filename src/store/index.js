import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [
   thunk,
];
const initialState ={
    username:'',
    password:'',
    persons:[{username:'',
    password:''}]

}

const userReducer = (state=initialState, action) =>{
    if(action.type==='login'){
        return{
            ...state,
            username: action.username,
            password: action.password,
            persons:[...state.persons]
        }
    }
    if(action.type==='register'){
        console.log(action.person.username);
        return{
            ...state,
            username: action.person.username,
            password: action.person.password,
            persons:[...state.persons,action.person]
        }
    }
    if(action.type==='logout'){
        return{
            ...state,
            username: '',
            password: '',
            persons:[...state.persons]
        }
    }

    if(action.type==='deletePerson'){
        return{
            ...state,
            username: '',
            password: '',
            persons:[...state.persons.slice(0, action.payload),
                ...state.persons.slice(action.payload + 1)]
        }
    }
   return state;
}
const configureStore = () => {
  return createStore(
    userReducer, composeWithDevTools(
        applyMiddleware(...middleware),
    )
  );
};

export default configureStore;