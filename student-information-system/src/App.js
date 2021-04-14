import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Link, Switch, history } from 'react-router-dom';
import Home from './component/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './component/Contact';
import ProfileFaculty from './component/ProfileFaculty';
import PhotoGallery from './component/PhotoGallery';
import Registration from './component/Registration';
import NavBar from './component/NavBar';
import Login from './component/Login';
import NotFound from './component/NotFound';
import Slide from './component/Slide';
import $, { extend } from 'jquery';
import Footer from './component/Footer';
import RegisterStudent from './component/RegisterStudent';
import RegisterFaculty from './component/RegisterFaculty';
import StudentAttendance from './component/StudentAttendance';
import StudentDashboard from './component/StudentDashboard';
import FacultyDashboard from './component/FacultyDashboard';
import table from './component/table';
import Profile from './component/Profile';

import { useSelector } from 'react-redux';
import CNAttendance from './component/CNAttendance';
import DBMSAttendance from './component/DBMSAttendance';
import Assignment from './component/Assignment';
import FacultyClass from './component/FacultyClass';
import StudentClass from './component/StudentClass';
import StudentLogin from './component/StudentLogin';
import FacultyLogin from './component/FacultyLogin';
import FacultyAttendance from './component/FacultyAttendance';
import ExercisesList from "./component/ExercisesList";
import EditExercise from "./component/EditExercise";
import CreateExercise from "./component/CreateExercise";
import FacultyAssignement from './component/FacultyAssignment';
import ExerciseStud from './component/ExerciseStud';
import SearchFaculty from './component/SeachFaculty';
import SearchStudent from './component/SearchStudent';


function App() {

  //CALLING ALL REDUCER TO EXTRACT  STORE VALUE  AND PASS THEM TO OTHER COMPONENTS AS PROPS
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);
  const Faculty = useSelector(state => state.Faculty);
  const user = useSelector(state => state.UserData);
  const id = useSelector(state => state.id_val)
  return (
    <div>
      <Router>
        <div>
          {/* LOGGED WILL BE TRUE IF STUDENT LOGS IN || FACULTY WILL BE TRUE IF FACULTY LOGS IN */}
          <NavBar logged={logged} Faculty={Faculty} user={user} id={id}></NavBar>
           <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/registration" component={Registration} />
            <Route path="/photogallery" component={PhotoGallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/StudentLogin" component={StudentLogin} />
            <Route path="/FacultyLogin" component={FacultyLogin} />
            <Route path="/RegisterStudent" component={RegisterStudent} />
            <Route path="/RegisterFaculty" component={RegisterFaculty} />
            <Route path="/studentattendance" component={StudentAttendance} />
            <Route path="/table" component={table} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/CNAttendance" component={CNAttendance} />
            <Route path="/DBMSAttendance" component={DBMSAttendance} />
            <Route path="/assignment" component={Assignment} />
            
            <Route path="/facultyclass" component={FacultyClass} />
            <Route path="/studentclass" component={StudentClass} />
            <Route path="/FacultyAttendance" component={FacultyAttendance} />
            <Route exact path="/ExerciseList" component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/createexercise" component={CreateExercise} />
            <Route path="/FacultyAssignement" component={FacultyAssignement}/>
            <Route path="/ExerciseStud" component={ExerciseStud}/>
            <Route path="/SearchStudent" component={SearchStudent}/>
            <Route path="/SearchFaculty" component={SearchFaculty}/>
            <Route path="/studentdashboard/:id" component={StudentDashboard}/>
            <Route path="/facultydashboard/:id" component={FacultyDashboard}/>
            <Route path="/profilefaculty/:id" component={ProfileFaculty}/>
            <Route component={NotFound} />
          </Switch>


        </div>

      </Router>

    </div>
  );
}

export default App
