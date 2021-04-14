import React, { Component } from 'react'
import Footer from './Footer'

export class DBMSAttendance extends Component {
    render() {
        return (
            <div>
                
                <div id="content">
                <div id="content3">
                    <div className="card">
                        <h3>DBMS Attendance</h3>
                        <div class="container">
                        
                    <div class="row col-md-12 ">

                        <table class="table table-striped custab">
                            <thead>

                                <tr>
                                    <th>No.</th>
                                    <th>Subject</th>
                                    <th>Date</th>
                                    <th>Attendance</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tr>
                            <td>1</td>
                                <td>DBMS</td>
                                <td>12-12-2020</td>
                                <td>Present</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> request change</a>  </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>DBMS</td>
                                <td>12-12-2020</td>
                                <td>Present</td>
                                
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span>  request change</a>  </td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>DBMS</td>
                                <td>12-12-2020</td>
                                <td>Present</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span>  request change</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
                        </div></div>
                        <Footer></Footer>
                        </div>
            </div>
        )
    }
}

export default DBMSAttendance
