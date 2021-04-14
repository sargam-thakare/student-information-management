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

function StudentLogin() {
    var history = useHistory();
    const dispatch = useDispatch();

    const [student, setStudent] = useState([]);
    const [username, setUsername] = useState();
    const [pass, setpass] = useState();
    const [err, seterr] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/student/')
            .then(response => {
                setStudent(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    function student_login() {
        const user = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        }
        //AXIOS . POST METHOD USED FOR CALLING LOGIN API THATS RETURNING ISMATCH VALUE 
        axios.post('http://localhost:8000/student/login', user)
            .then(response => {
                console.log(response.data)
               //response.data.is=>true ? login 
               //response.data.is=>false? wrong password
                if (response.data.is == true) {
                    var username = response.data.user.firstname
                    var student = response.data.user._id
                     
         //dispatching event for logged succesfull and STORE VALUE OF USERNAME AND ID FOR DISPLAYING VALUE

         //DISPATCHER=>ACTION =>REDUCER=>STORE
                    dispatch(user_name(username))
                    dispatch(logged())
                    console.log(student)
                    dispatch(id_val(student))
                    history.push("/studentdashboard/" + student);
                }
                else {
                    // DISPLAY INVALID CREDENTIALS MSG FOR  WRONG CREDENTIALS
                    seterr("Invalid credentials")
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


    return (
        <div>
            <div id="content" >
                <div id="content3" >
                    <div className="card" >
                        <div class="row" >
                            <div class="col-md-4 col-sm-8 col-xs-8 login-form  " >
                                <form   >
                                    <h2 className="text-center">Login as Student</h2>
                                    {/* <div className="form-group col" >
                                        <input type="text" className="form-control" placeholder="Username" id="student" name="username_student" required />
                                    </div> */}
                                    <div className="form-group col" >
                                        <input type="email" className="form-control" placeholder="Email id" id="email" name="email" required />
                                    </div>
                                    {/* <div className="form-group col">
                                        <input type="password" className="form-control" placeholder="Password" id="student_pass" name="password_student" required />
                                     
                                    </div> */}

                                    <div className="form-group col">
                                        <input type="password" className="form-control" placeholder="Password" id="password" name="password" required />
                                    </div>
                                    <div style={{ textAlign: 'center', alignItems: 'center' }}><span style={{ color: 'red', textAlign: 'center', fontWeight: 600 }}>{err}</span>  </div>


                                    <div className="form-group col">
                                        {/* <Link to="/home">   */}

                                        <button type="button" onClick={student_login} className="btn btn-primary btn-block" onClick={student_login}>Log in</button>
                                        {/* </Link> */}
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

export default StudentLogin