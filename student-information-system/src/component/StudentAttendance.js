

import React, { Component } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
import Footer from './Footer';

export class StudentAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StudentAttendance: [],
            totalclasses: 0,
            attendedclasses: 0,
            totalpercentage: 0


        }
    }


    componentDidMount() {
        console.log("comoun didid moutntn  ") 
        axios.get('http://localhost:8000/studentatt/')
            .then(response => {

                console.log("  rsp data " + response.data)
                this.setState({
                    StudentAttendance: response.data
                })

                this.state.StudentAttendance.map((rodata) => {
                    var c = parseInt(rodata.classes)
                    var a = parseInt(this.state.totalclasses)

                    var ca = parseInt(rodata.attended)
                    var aa = parseInt(this.state.attendedclasses)

                    var tp = parseInt(rodata.percentage)
                    var tpp = parseInt(this.state.totalpercentage)
                    console.log(a)
                    this.setState({ totalclasses: (c + a) })
                    this.setState({ attendedclasses: (ca + aa) })
                    this.setState({ totalpercentage: (tp + tpp) })
                })
                console.log("jjjj" + this.state.totalclasses)

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>

                <div id="content">
                    <div id="content3">


                        <div class="container">
                            <h2>Attendance</h2>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Subjects</th>
                                        <th>Classes Attended</th>
                                        <th>Total no. of Classes</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.StudentAttendance.map((rowData, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{rowData.subject}</td>
                                            <td>{rowData.classes}</td>
                                            <td>{rowData.attended}</td>
                                            <td>{rowData.percentage}</td>

                                        </tr>

                                    ))
                                    }

                                    <tr>
                                        <td style={{ backgroundColor: "white", borderColor: "white" }}></td>
                                        <td>Average   Attendance</td>
                                        <td style={{ color: 'blue' }}><h5>{this.state.totalclasses}</h5></td>
                                        <td style={{ color: 'blue' }}><h5>{this.state.attendedclasses}</h5></td>
                                        <td style={{ color: 'blue' }}> <h5>{((this.state.attendedclasses / this.state.totalclasses) * 100).toFixed(2)}</h5></td>
                                    </tr>


                                </tbody>


                            </table>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default StudentAttendance
