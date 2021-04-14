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

function Login() {
    var history = useHistory();
    const dispatch = useDispatch();

    const [student, setStudent] = useState([]);
    const [username, setUsername] = useState();
    const [pass, setpass] = useState();
    const [err,seterr]=useState();
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
    
        var username = document.getElementById("student").value;
        var pass = document.getElementById("student_pass").value;
        console.log("  student  " + student)
         var auth=false;
        student.map((student) => {
            if (student.firstname == username && student.pass == pass) {
                console.log("sucesss")
               
                auth=true;
                dispatch(user_name(username))
                dispatch(logged())
                console.log(student._id)
                dispatch(id_val(student._id))
                history.push("/studentdashboard");
              
            }
        } ,
        seterr("invalid credentials")
      
        
        )    
    }
    function faculty_login() {
        var student = document.getElementById("faculty").value;
        if (student.length > 0) {
            dispatch(user_name(student))


            dispatch(logged_faculty())
            history.push("/facultydashboard");
        }
    }



    return (
        <div>
            <div id="content">
                <div id="content3">
                    <div className="card">
                        <div class="row" >
                          
                            <div class="col-md-4 col-sm-8 col-xs-8 login-form  ">
                                <form   >
                                    <h2 className="text-center">Login as Student</h2>
                                    <div className="form-group col" >
                                        <input type="text" className="form-control" placeholder="Username" id="student" name="username_student" required />
                                    </div>

                                    <div className="form-group col">
                                        <input type="password" className="form-control" placeholder="Password" id="student_pass" name="password_student" required />
                                      <span style={{color:'red',leftPadding:'20px'}}>{err}</span>  
                                    </div>

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
                            <div class="col-md-4 col-sm-8 col-xs-8 login-form"  >
                                <form action="" method="post">
                                    <h2 className="text-center">Login as Faculty</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" name="username_faculty" id="faculty" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" name="password_faculty" required />
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={faculty_login}>Log in</button>
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

export default Login
