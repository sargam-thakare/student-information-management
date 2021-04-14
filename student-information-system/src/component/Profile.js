import React, { Component } from 'react'
import team1 from '../img/team2.png';


import {useSelector} from 'react-redux';

import './profile.css';
import axios from 'axios';
export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            pass:'',
            conpass:'',
            idnum:'123',
            phone: '',
            dept:'',
            errormessage: ''
        };
 
        this.handleChange=this.handleChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);

        console.log(" my id profile "+this.props.match.params.id)
    }

    componentDidMount() {
        console.log("component did mount")
        axios.get('http://localhost:8000/student/'+this.props.match.params.id)
          .then(response => {
              console.log("  rsp data "+response.data)
            this.setState({
              firstname: response.data.firstname,
              lastname: response.data.lastname,
              email: response.data.email,
              phone: response.data.phone,
              dept:response.data.dept,
              idnum:response.data.idnum
              
              
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
        }
        
    handleChange(e) {

        this.setState({[e.target.name]: e.target.value});
       
      }
      onSubmit(e) {
        e.preventDefault();
    
        const student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,         
            idnum:this.state.idnum,
            
            email:this.state.email    
        }
    
        console.log(student);
    
        axios.post('http://localhost:8000/student/update/' + this.props.match.params.id, student)
          .then(res => console.log(res.data));
    
        
      }
    render() {
        return (
            <div>
                <div>
                    <div id="content">
                        <div id="content3">
                            <div className="card">
                                <div class="row" >
                                    <div class="col-md-6 col-sm-8 col-xs-8 ">
                                        <div className="card" style={{ margin: "20px" }}>

                                            <img src={team1} class="center" ></img>
                                            <div class="card-body " style={{ marginLeft: '120px' }}>
                                                <h3>{this.state.firstname}  {this.state.lastname}</h3>
                                                <h6>ID Number :{this.state.idnum}</h6>
                                            </div>
                                        </div>




                                    </div>
                                    <div class="col-md-4 col-sm-8 col-xs-8 "  >

                                        <div className="card">

                                            <div class="profile-form">
                                                <form  onSubmit={this.onSubmit} method="post">
                                                    <h2>User Profile</h2>
                                                    <br />
                                                    <div className="form-group">
                                                        <div class="row">
                                                            <div className="profile" style={{ color: 'black' }}>First Name</div>
                                                            <div class="col-xs-6">
                                                                <div class="col-xs-2"><input type="text" class="form-control" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange}  required="required" /></div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div class="row">
                                                            <div class="profile">Last Name</div>
                                                            <div class="col-xs-6">
                                                                <div class="col-xs-2"><input type="text" class="form-control" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange}   required="required" /></div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div class="row">
                                                            <div class="profile">Email</div>
                                                            <div class="col-xs-6">
                                                                <div class="col-xs-2"><input type="text" class="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}  required="required" /></div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div class="row">
                                                            <div class="profile">Phone no</div>
                                                            <div class="col-xs-6">
                                                                <div class="col-xs-2"><input type="text" class="form-control" name="phone" placeholder="Phone Number"value={this.state.phone} onChange={this.handleChange} required="required" /></div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div class="row">
                                                            <div class="profile">Department</div>
                                                            <div class="col-xs-6">
                                                                <div class="col-xs-2"><input type="text" class="form-control" name="dept" placeholder="Department" value={this.state.dept} onChange={this.handleChange}  required="required" /></div>
                                                            </div>


                                                        </div>
                                                    </div>
 


                                                    <div class="form-group">
                                                        <button type="submit" className="btn btn-primary btn-lg">EDIT</button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div></div></div>

        )
    }
}

export default Profile
