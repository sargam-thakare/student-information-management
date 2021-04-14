import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import Footer from './Footer';
import NavBar from './NavBar';
import { useSelector, useDispatch } from 'react-redux';
import logged from '../action/action'
import logged_faculty from '../action/faculty_login'
import user_name from '../action/user_name'
import id_val from '../action/id_value'
import axios from 'axios'

function FacultyLogin() {
    var history = useHistory();
    const dispatch = useDispatch();

    const [student, setStudent] = useState([]);
    const [username, setUsername] = useState();
    const [pass, setpass] = useState();
    const [err,seterr]=useState();
    useEffect(() => {
         axios.get('http://localhost:8000/faculty/')
            .then(response => {
                setStudent(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

 function student_login() {
    
    const user={
        email:  document.getElementById('email').value,
        password:document.getElementById('password').value,
    }
    axios.post('http://localhost:8000/faculty/login',user)
    .then(response => {
        // setStudent(response.data)
        console.log(response.data)
        var username=response.data.user.firstname
        var student=response.data.user._id
        if(response.data.is==true){
            console.log("tertete")
            dispatch(user_name(username))
            dispatch(logged_faculty())
            console.log(student)
            dispatch(id_val(student))
            history.push("/facultydashboard/"+student);
        }
        else{
        seterr("Invalid credentials")
        }
    })
    .catch((error) => {
        console.log(error);
    })

    
    }
    function faculty_login() {
        var student = document.getElementById("faculty").value;
        if (student.length > 0) {
            dispatch(user_name(student))

            dispatch(logged_faculty())
            history.push("/home");
        }
    }

    function  stud(){

        var abc='computer'
        axios.post('http://localhost:8000/student/search',abc)
        .then(response => {
          console.log("helwowoowwww")
        })
        .catch((error) => {
            console.log(error);
        })
        
        }
    return (
        <div>
            <div id="content">
                <div id="content3">
                    <div className="card">
                        <div class="row" >
                            <div class="col-md-4 col-sm-8 col-xs-8 login-form  ">

                                <form>
                                    <h2 className="text-center">Login as Faculty</h2>
                                    <div className="form-group col" >
                                        <input type="email" className="form-control" placeholder="Email id" id="email" name="email" required />
                                    </div>

                                    <div className="form-group col">
                                        <input type="password" className="form-control" placeholder="Password" id="password" name="password" required />
                                      <span style={{color:'red',leftPadding:'20px'}}>{err}</span>  
                                    </div>

                                    <div className="form-group col">
                                        {/* <Link to="/home">   */}
                                       
                                        <button type="button" onClick={student_login} className="btn btn-primary btn-block">Log in</button>
                                        {/*k> */}
                                    </div>

                                    <div className="clearfix">
                                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                                    </div>
                                </form>
                            </div>
                            
                            
                        </div> </div>
                </div>
                <Footer></Footer>
            </div>
        </div>

    )
}

export default FacultyLogin