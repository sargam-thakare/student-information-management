import React, { Component } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import reg from '../img/reg.jpg'

export class RegisterStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            pass: '',
            conpass: '',
            idnum: '',
            phone: '',
            errormessage: '',
            _id: '',
            dept:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
         let nam=e.target.name;
        let val=e.target.value;
        let err="";

        if(nam==="firstname"){
          if(val!=""&& Number(val)){
            err=<strong style={{color:"red"}}>Please enter valid Name</strong>
          }else if(val==""){
            err=<strong style={{color:"red"}}>Please enter name</strong>
          }
          this.setState({errormessage1:err});
         // this.setState({[nam]:val});
        }
        if(nam==="lastname"){
          if(val!=""&& Number(val)){
            err=<strong style={{color:"red"}}>Please enter valid last name</strong>
          }else if(val==""){
            err=<strong style={{color:"red"}}>Please enter name</strong>
          }
          this.setState({errormessage2:err});
         // this.setState({[nam]:val});
        }

        if(nam==="idnum"){
          if(val==""){
            err=<strong style={{color:"red"}}>Please enter ID number</strong>
          }
          this.setState({errormessage3:err});
          //this.setState({[nam]:val});
        }

        if(nam==="email"){
          if(val==""){
            err=<strong style={{color:"red"}}>Please enter email</strong>
          }
          else if(val!='' && !val.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
            err=<strong style={{color:"red"}}>Please enter valid email</strong>;
          }
          this.setState({errormessage4:err});
          //this.setState({[nam]:val});
        }

        if (nam === "phone") {
          if (val != "" && !Number(val)) {
              err = <strong style={{color:"red"}}>Please enter valid phone number</strong>;
          }
          else if (val.length < 10 || val.length>10) {
            err = <strong style={{color:"red"}}>Phone number should be of 10 digits</strong>;
        }
          this.setState({ errormessage5: err });
         // this.setState({ [nam]: val });
      }
      if (nam === "pass") {
        if (val == "" ) {
            err = <strong style={{color:"red"}}>Please enter password</strong>;
        }
        else if (val.length < 6) {
          err = <strong style={{color:"red"}}>Password strength must be more than 6 characters.</strong>;
      }
        this.setState({ errormessage6: err });
        this.setState({pwd:e.target.value})
        }

        if (nam === "conpass") {
        if (e.target.value!=this.state.pwd ) {
            err = <strong style={{color:"red"}}>Password and confirm password do not match</strong>;
        }
        this.setState({ errormessage7: err });
        } 
    }

     
    onSubmit(e) {
        e.preventDefault();
        console.log("inside submit " + this.state.firstname)
        const student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            idnum: this.state.idnum,
            pass: this.state.pass,
            conpass: this.state.conpass,
            email: this.state.email,
            _id: this.state._id,
            dept:this.state.dept
        }

        console.log(student);

        axios.post('http://localhost:8000/student/add', student)
            .then(res => {console.log("res  "+res.status)
                if(res.status==204)
                console.log("res  "+res)
                if(res.status===204){
                     Swal.fire("Email exists"," Please enter another email id","error");

                }
                else{
                console.log(res)
                this.setState({ _id: res.data })
                console.log("  response  " + res.data)
                console.log("my new id  " + this.state._id)
                Swal.fire("Registration successful"," Student registration done","success");}

            });


    }

    render() {
        return (
            <div>
                <div id="content">
                    <div id="content3">
                        <div className="card-deck">
                            <div class="col-md-6 mb-5">


                                <div class="signup-form">
                                    <form onSubmit={this.onSubmit} >
                                        <h2>Student Registration</h2>

                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-xs-6"><input type="text" onChange={this.handleChange} value={this.state.firstname} class="form-control" name="firstname" placeholder="First Name" required="required" />
                                                {this.state.errormessage1}</div>
                                               
                                                <div class="col-xs-6"><input type="text" onChange={this.handleChange} value={this.state.lastname} class="form-control" name="lastname" placeholder="Last Name" required="required" />
                                                {this.state.errormessage2}</div>
                                               
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div class="row">
                                                <div class="col-xs-6">
                                                    <input type="number" className="form-control" onChange={this.handleChange} value={this.state.idnum} name="idnum" placeholder="ID number" required="required" />
                                                    {this.state.errormessage3}
                                                </div>
                                                <div class="col-xs-6">
                                                    <select className="form-control" name="dept" placeholder="Department"   onChange={this.handleChange} value={this.state.dept}required>
                                                        <option value="dept">Department</option>
                                                        <option value="computer">Computer</option>
                                                        <option value="IT">IT</option>
                                                        <option value="entc">Entc</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <input type="email" className="form-control" onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email" required="required" />
                                            {this.state.errormessage4}
                                        </div>

                                        <div class="form-group">
                                            <select className="form-control" name="year" required>
                                                <option value="yoj"> Year of joining</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                                <option value="2006">2006</option>
                                                <option value="2005">2005</option>
                                                <option value="2004">2004</option>
                                                <option value="2003">2003</option>
                                                <option value="2002">2002</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" name="phone" className="form-control" onChange={this.handleChange} placeholder="Phone number" value={this.state.phone} required="required" />
                                            {this.state.errormessage5}
                                        </div>

                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-xs-6"><input type="password" className="form-control" onChange={this.handleChange} value={this.state.pass} name="pass" placeholder="Password" required="required" />
                                                {this.state.errormessage6}</div>
                                               
                                               
                                                <div class="col-xs-6"><input type="password" className="form-control" onChange={this.handleChange} value={this.state.conpass} name="conpass" placeholder="Confirm Password" required="required" />
                                                {this.state.errormessage7}</div>
                                                
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                 <img class="card-img-top" src={reg}/>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>

        )

    }
}
export default RegisterStudent

