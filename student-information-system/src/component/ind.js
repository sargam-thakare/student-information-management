import CounterReducer from '../reducer/CounterReducer';
 import  loggedReducer from '../reducer/loggedReducer';
 import FacultyReducer from '../reducer/FacultyReducer';
 import UserData from '../reducer/UserData'
 import id_val from '../reducer/id_val'
 


 import {combineReducers} from 'redux';

 const allReducers=combineReducers({
     counter:CounterReducer,
     logged:loggedReducer,
     Faculty:FacultyReducer,
    UserData:UserData,
    id_val:id_val
 });
 export default allReducers 