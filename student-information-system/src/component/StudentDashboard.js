import React, { Component } from 'react'
import './dash.css'
import team1 from '../img/team1.png'
import cover from '../img/cover.jpg'
import Footer from './Footer'
import axios from 'axios'

export class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            dept:'',
            idnum:'',
            phone: '',
            errormessage: ''
        };
 
        this.handleChange=this.handleChange.bind(this);

        console.log(" my id profile  "+this.props.match.params.id)
    }

    componentDidMount() {
        console.log("component did mount ")
        axios.get('http://localhost:8000/student/'+this.props.match.params.id)
          .then(res => {
              console.log("  rsp data "+res.data)
            this.setState({
              firstname: res.data.firstname,
              lastname: res.data.lastname,
              email: res.data.email,
              phone: res.data.phone,
              dept:res.data.dept,
              idnum:res.data.idnum
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
        }
    handleChange(e) {

        this.setState({[e.target.name]: e.target.value});
       
      }
    render() {
        return (
            <div>
                <div class="card">
                    <div class="card-header">
                        <h2>Student Dashboard</h2>
                    </div>

                    <br></br>

                    <div class="row">
                        <div class="col-md-6 mb-4" style={{paddingLeft:"25px"}}>
                            <div class="card h-100" style={{backgroundColor:"lightyellow"}}>
                                <div class="card-body"  >
                                    <h2 class="card-header" style={{backgroundColor:"mediumpurple"}}>Information</h2>
                                    <hr/>
                                    <div class="card-text">
                                        <h3>Profile of student</h3>
                                        <div class="profile-form1">
                                        <div className="form-group1">
                                        <div className="card" style={{margin:"10px",backgroundImage:"url("+cover+")"}}>
                                           <img src={team1} class="center" ></img>
                                           <div class="card-body " style={{marginLeft:'0px'}}>
                                           <h3>{this.state.firstname} {this.state.lastname}</h3>
                                           <h6>ID Number :{this.state.idnum}</h6>
                                           </div>
                                       </div>
                                            <div class="row">
                                                <div className="profile1" style={{color:'black'}}>First Name</div>
                                                    <div class="col-xs-6">
                                                    <div class="col-xs-6"><input type="text" class="form-control" name="firstname" placeholder="First Name" onChange={this.handleChange} value={this.state.firstname}required="required" style={{width:"250px"}}/></div>
                                                    </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group1">
                                            <div class="row">
                                                <div class="profile1">Last Name</div>
                                                <div class="col-xs-6">
                                                    <div class="col-xs-6"><input type="text" class="form-control" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} required="required" style={{width:"250px"}}/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group1">
                                            <div class="row">
                                                <div class="profile1">Email</div>
                                                <div class="col-xs-6">
                                                    <div class="col-xs-6"><input type="text" class="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}required="required" style={{width:"250px"}} /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group1">
                                            <div class="row">
                                                <div class="profile1">Phone no</div>
                                                <div class="col-xs-6">
                                                    <div class="col-xs-6"><input type="text" class="form-control" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} required="required" style={{width:"250px"}}/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group1">
                                            <div class="row">
                                                <div class="profile1">Department</div>
                                                <div class="col-xs-6">
                                                    <div class="col-xs-6"><input type="text" class="form-control" name="dept" placeholder="Department" value={this.state.dept} onChange={this.handleChange} required="required" style={{width:"250px"}}/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-5" style={{paddingRight:"25px"}}>
                            <div class="card h-50" style={{backgroundColor:"lightyellow"}}>
                                <div class="card-body"  >
                                    <h2 class="card-header" style={{backgroundColor:"mediumpurple"}}>Upcoming Events</h2>
                                    <hr/>
                                    <div class="card-text">
                                    <marquee width="100%" direction="up" height="320px" scrollamount="3">
                                        <h4 style={{fontStyle:"italic"}}>Inter-Department Sports competition will be starting from 20th Feb 2021.</h4><br></br>
                                        <h4 style={{fontStyle:"italic"}}>Placement Cell Orientation to be held for Final year students on 5th Feb 2021.</h4><br></br>
                                        <h4 style={{fontStyle:"italic"}}>Auditions for Drama club are open now!</h4><br></br>
                                        <h4 style={{fontStyle:"italic"}}>Tree plantation drive by Team Aarohan to be held on 31st Jan 2021.</h4><br></br>
                                        <h4 style={{fontStyle:"italic"}}>Workshop on Artificial Intelligence by IBM will be held in IBM Lab on 2nd Feb 2021.</h4>
                                    </marquee>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="card h-50" style={{backgroundColor:"lightyellow"}}>
                                <div class="card-body">
                                    <h2 class="card-header" style={{backgroundColor:"mediumpurple"}}>Holiday List</h2>
                                    <hr/>
                                    <div class="card-text">
                                    <table class="table-bordered" style={{width:"100%",height:"350px"}}>
                                            <thead>
                                                <th style={{fontSize:"18px"}}>Holiday</th>
                                                <th style={{fontSize:"18px"}}>Date</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Makar Sankranti</td>
                                                    <td style={{fontSize:"15px"}}>14th Jan 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Republic Day</td>
                                                    <td style={{fontSize:"15px"}}>26th Jan 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Holi</td>
                                                    <td style={{fontSize:"15px"}}>29th March 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Good Friday</td>
                                                    <td style={{fontSize:"15px"}}>2nd April 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Eid-ul-Fitr</td>
                                                    <td style={{fontSize:"15px"}}>13th May 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Independence Day</td>
                                                    <td style={{fontSize:"15px"}}>15th Aug 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Janmashtami</td>
                                                    <td style={{fontSize:"15px"}}>30th Aug 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Ganesh Chaturthi</td>
                                                    <td style={{fontSize:"15px"}}>10th Sept 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Gandhi Jayanti</td>
                                                    <td style={{fontSize:"15px"}}>2nd Oct 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Dussehra</td>
                                                    <td style={{fontSize:"15px"}}>15th Oct 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Diwali</td>
                                                    <td style={{fontSize:"15px"}}>4th Nov 2021</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontSize:"15px"}}>Christmas</td>
                                                    <td style={{fontSize:"15px"}}>25th Dec 2021</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default StudentDashboard
