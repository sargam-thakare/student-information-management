import React, { Component } from 'react'
import axios from 'axios'

export class FacultyAttendance extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student: [],
            subject: '',
            date:''
        }
        this.subject = this.subject.bind(this)
        this.date=this.date.bind(this)
    }

    componentDidMount() {
        var sub = document.getElementById('subject').value
        console.log(sub)
        this.setState({ subject: sub })

        this.setState(
            {date:new Date().toISOString().split('T')[0]}
        )

        axios.get('http://localhost:8000/student/')
            .then(response => {
                this.setState({ student: response.data })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })


    }

    subject() {

        var sub = document.getElementById('subject').value
        console.log(sub)
        this.setState({ subject: sub })

    }

    date(){

        var dat=document.getElementById('date').value
        this.setState({date:dat})
    }

    render() {
        return (
            <body>
                  <br/><br/><br/>
                <div class="signup-form">
                    <div class="form-group">
                      
                        <form   method="post"   style={{ color: 'black',border:'2px solid lightblue' }}>
                            <h3>Search subject </h3>
                            <div class="row" >
                                <div class="col-md-6"style={{ width: '50%'  }}>
                                    <select   style={{ color: 'black',border:'2px solid lightblue' }}className="form-control" name="subject" id="subject" onChange={this.subject} required>
                                        <option value="JAVA">JAVA</option>
                                        <option value="Computer Networks">Computer Network</option>
                                        <option value="DBMS">DBMS</option>
                                        <option value="Data Structure">Data Structure</option>
                                    </select>
                                    </div>
                                    <div class="col-md-5">
                                    <input    style={{ color: 'black',border:'2px solid lightblue' ,borderRadius:'2px'}} type="date" id="date" name="date" onChange={this.date}/>
                                        </div>  

                                    <div>
                                    </div>
                                  
                            </div>
                        </form>
                    </div>
                </div>
                <div>

                    <div class="container">
                        <div class="row col-md-12 ">

                            <table style={{ color: 'black',border:'2px solid lightblue' }} class="table table-striped custab">
                                <thead style={{backgroundColor:'lightblue'}}>

                                    <tr>
                                        <th>Roll No</th>
                                        <th>First name</th>
                                        <th>Last name</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Attendance</th>
                                    </tr>
                                </thead>



                                {this.state.student.map((rowData, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{rowData.firstname}</td>
                                        <td>{rowData.lastname}</td>
                                        <td>{this.state.subject}</td>
                                        <td> {this.state.date}</td>
                                        <td> <input type="radio" name={index+"pa"} value="present" checked="checked"/>Present<input type="radio"  value="absent" name={index+"pa"}/>Absent </td>

                                    </tr>

                                ))}





                            </table>
                        </div>
                    </div>
                </div>










            </body>
        )
    }
}

export default FacultyAttendance