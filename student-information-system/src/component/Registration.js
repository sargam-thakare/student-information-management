import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import App from '../App';
import $ from 'jquery';
import Footer from './Footer';

export class Registration extends Component {
    render() {
        return (
            <div>
                {/* <App></App> */}
                <div id="content">
                <div id="content3">
                    <br/>
                    <div className="card">
<br/><br/>
                        <div className=" ">
                            <div className="login-form2">
                                <form action="" method="post">
                                    <h2 className="text-center">Register as:</h2>
                                    <div className="form-group">
                                        <Link to="/RegisterStudent">  <button className="btn btn-primary btn-block">Student</button></Link>
                                    </div>
                                    <div className="form-group">
                                        <Link to="/RegisterFaculty">  <button className="btn btn-primary btn-block">Faculty</button></Link>
                                    </div>
                                   
                                </form>
                            </div> <br/> <br/>
                        </div>
                    </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
 

export default Registration
