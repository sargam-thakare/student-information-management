import './NavBar.css'
import $, { timers } from 'jquery';
import { Link, useHistory, Redirect } from 'react-router-dom';
import Footer from './Footer';
import 'font-awesome/css/font-awesome.min.css';
import { useSelector, useDispatch } from 'react-redux';
import logout from '../action/logout'
import logout_faculty from '../action/faculty_logout';
import user_name from '../action/user_name';
import Swal from 'sweetalert2';

function NavBar(props) {
    const dispatch = useDispatch();
    var history = useHistory();
    var side = false;
    function openNav() {
        if (document.getElementById('mySidepanel') !== null) {
            console.log(" mysidepanel xsscdscd " + document.getElementById('mySidepanel').value)
            document.getElementById("mySidepanel").style.width = "200px";
        }
    }

    /* Set the width of the sidebar to 0 (hide it) */
    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";

    }
    function log_out_s() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to logout',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(function (isConfirm) {
            console.log("inside")
            if (isConfirm.value) {
                console.log(" is confirm value  " + isConfirm.value)
                console.log(" dispatch inside")
                dispatch(user_name(''))
                dispatch(logout())
                history.push("/home")
            } else {
                console.log(" cancel ")
            }
        });
    }
    function log_out_f() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to logout',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(function (isConfirm) {
            console.log("inside")
            if (isConfirm.value) {
                console.log(" is confirm value  " + isConfirm.value)
                console.log(" dispatch inside")
                dispatch(user_name(''))
                dispatch(logout_faculty())
                history.push("/home")
            } else {
                console.log(" cancel ")
            }
        });
    }

    return (
        <div>
            <div className="wrapper  ">
                <nav className="navbar navbar-expand-lg   navbar-dark bg-dark  fixed-top">
                    <div className="container-fluid">

     {/* USED PROPS FOR DISPLAYING THOSE COMPONENT WHICH IS AVAILABLE ONLY WHEN USER HAS LOGGED IN */}


     {/* USED PROPS FOR DISPLAYING SIDEBAR ONLY WHEN USER HAS LOOGED IN WITH REDUX  */}
                        {(props.logged || props.Faculty) && <button type="button" id="sidebarCollapse" onClick={openNav} className="btn btn-info">
                 {/* SIDEBAR     */}
                        <a>   &#9776;   </a> 
                        </button>}
                        <button className="btn btn-light   d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav  ">
                                <li className="nav-item active">
                                    <Link to="/home"> <a className="nav-link" href="#">Home</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/photogallery">    <a className="nav-link" href="#">Photo Gallery</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact">    <a className="nav-link" href="#">Contact us</a></Link>
                                </li>
                            </ul>

                            <ul class="nav navbar-nav ml-auto">
    {/* USED PROPS FOR DISPLAYING SIDEBAR ONLY WHEN USER HAS LOOGED IN WITH REDUX  */}
                                {!(props.logged || props.Faculty) && <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Registration </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/RegisterStudent"><a class="dropdown-item"  >Student</a></Link>
                                        <Link to="/RegisterFaculty">  <a class="dropdown-item"  >Faculty</a></Link>
                                    </div>
                                </li>}
   {/* USED PROPS FOR DISPLAYING SIDEBAR ONLY WHEN USER HAS LOOGED IN WITH REDUX  */}

                                {props.user && <li className="nav-item  ">
                                    <Link to={"/profile/" + props.id}>   <a className="nav-link" href="#">Hi, {props.user}</a></Link>
                                </li>}
      {/* USED PROPS FOR DISPLAYING SIDEBAR ONLY WHEN USER HAS LOOGED IN WITH REDUX  */}

                                {!(props.logged || props.Faculty) &&
                                    <li class="nav-item dropdown ">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Login
                                 </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to="/StudentLogin">  <a class="dropdown-item" href="#">Student</a></Link>
                                            <Link to="/FacultyLogin">  <a class="dropdown-item" href="#">Faculty</a></Link>
                                        </div>
                                    </li>

                                }
   {/* USED PROPS FOR DISPLAYING SIDEBAR ONLY WHEN USER HAS LOOGED IN WITH REDUX  */}
                            
                                {(props.logged) &&
                                    <li className="nav-item">
                                <a className="nav-link " className="nav-link " href="#" onClick={log_out_s} >Logout</a>
 
                                    </li>
                                }
                                {(props.Faculty) &&
                                    <li className="nav-item">
                                         <a className="nav-link " href="#" onClick={log_out_f} >Logout</a>
                                     </li>}

                                {props.logged &&
                                    <li className="nav-item">
                                        <Link to={"/profile/" + props.id} >  <a><i class="fa fa-user-circle-o fa-2x nav-link" aria-hidden="true"></i></a></Link>
                                    </li>
                                }
                                {props.Faculty &&
                                    <li className="nav-item">
                                        <Link to={"/profilefaculty/" + props.id} >  <a><i class="fa fa-user-circle-o fa-2x nav-link" aria-hidden="true"></i></a></Link>
                                    </li>
                                }
                                <li>

                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        {/* USED PROPS FOR DISPLAYING SIDEBAR ONLY WHEN USER HAS LOOGED IN WITH REDUX  */}

            { props.logged &&
                <div id="mySidepanel" class="sidepanel">
                    <a href="javascript:void(0)" class="closebtn" onClick={closeNav} style={{ fontSize: "25px", right: "0px" }}>&times;</a>
                    <Link to={"/studentdashboard/" + props.id}><a href="#">Student Dashboard</a></Link>
                    <Link to="/studentclass"> <a href="#">Classes</a></Link>
                    <Link to="/studentattendance"><a>Attendance</a></Link>
                    <Link to="/ExerciseStud">  <a href="#">Assignment</a></Link>
                    <Link to="/SearchStudent">  <a href="#">Search Student</a></Link>
                    <Link to="/SearchFaculty"> <a href="#">Search Faculty</a></Link>
                </div>}

     {/* USED PROPS FOR DISPLAYING SIDEBAR ONLY WHEN USER HAS LOOGED IN WITH REDUX  */}
            {
                props.Faculty &&
                <div id="mySidepanel" class="sidepanel">
                    <a href="javascript:void(0)" class="closebtn" onClick={closeNav} style={{ fontSize: "25px", right: "0px" }}>&times;</a>
                    <Link to={"/facultydashboard/" + props.id}><a href="#">Faculty Dashboard</a></Link>
                    <Link to="/facultyclass"> <a href="#">Classes</a></Link>
                    <Link to="/FacultyAttendance"><a>Update Attendance</a></Link>
                    <Link to="/ExerciseList">  <a href="#"> Update Assignment</a></Link>
                    <Link to="/SearchStudent">  <a href="#">Search Student</a></Link>
                    <Link to="/SearchFaculty"> <a href="#">Search Faculty</a></Link>

                </div>}
        </div>
 );
}
export default NavBar;
