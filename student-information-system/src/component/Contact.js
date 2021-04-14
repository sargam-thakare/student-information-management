 import React, { Component } from 'react'
import App from '../App';
import './Contact.css';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


export class Contact extends Component {

    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.success=this.success.bind(this)
      }
         
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }

        success() {

       
        
      }
      handleSubmit(event) {
        event.preventDefault();
      

        emailjs.sendForm('gmail', 'template_63ax7ru', event.target, 'user_Qnv5MAtP4fZdiZEb0AKW6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["subject"] = "";
            input["message"] = "";
            this.setState({input:input});
      
            Swal.fire(
              "Message has been sent!", "successful!", "success"
    
            )
        }
      }
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      
          if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
          }

          if(typeof input["name"] !== "undefined"){
            if(!input["name"].match(/^[a-zA-Z ]+$/)){
               isValid = false;
               errors["name"] = "Please enter valid name";
            }        
         }
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
           // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
           var pattern =new RegExp(/^[a-z0-9][\-\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/i)
         
           var re = /\S+@\S+\.\S+/;
           if (!re.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
      
          if (!input["message"]) {
            isValid = false;
            errors["message"] = "Please enter your message.";
          }
          if (!input["subject"]) {
            isValid = false;
            errors["subject"] = "Please enter subject.";
          }
      
          this.setState({
            errors: errors
          });
      
          return isValid;
      }
    render() {
        return (
            <div>

                <div id="content">
                <div id="content3">
                    <div className="card">

                        <div className="card-body">
                            <div class="contact-wrap">
                                <div class="contact-in">
                                    <h1>Contact Info</h1>
                                    <h2><i class="fa fa-phone" aria-hidden="true"></i> Phone</h2>
                                    <p>020-2775884</p>
                                    <h2><i class="fa fa-envelope" aria-hidden="true"></i> Email</h2>
                                    <p>support@mitedu.com</p>
                                    <h2><i class="fa fa-map-marker" aria-hidden="true"></i> Address</h2>
                                    <p>MIT, Rambaug Colony, Kothrud, Pune-411038</p>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                                <div class="contact-in">
                                    <h1>Send Us a Message</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div>
            <label for="name">First Name:</label><span style={{color:'red'}}>*</span>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="contact-in-input" 
              placeholder="Enter name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div >
            <label for="email">Email Address:</label><span style={{color:'red'}}>*</span>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="contact-in-input" 
              placeholder="Enter email" 
              id="email" />
   
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div >
            <label for="subject">Subject:</label><span style={{color:'red'}}>*</span>
            <input 
              type="text" 
              name="subject" 
              value={this.state.input.subject}
              onChange={this.handleChange}
              class="contact-in-input" 
              placeholder="Enter Subject" 
              id="subject" />
   
              <div className="text-danger">{this.state.errors.subject}</div>
          </div>
  
          <div >
            <label for="message">Message:</label><span style={{color:'red'}}>*</span>
            <textarea 
              name="message"
              value={this.state.input.comment} 
              onChange={this.handleChange}
              placeholder="Enter Your Message"
              class="contact-in-textarea" />
  
              <div className="text-danger">{this.state.errors.message}</div>
          </div>
             
          <input type="submit" value="Submit" class="contact-in-btn" />
          <p style={{fontWeight:"normal"}}>Mandatory fields are marked with (<span style={{color:"red"}}>*</span>)</p>
        </form>
                                   
                                </div>
                                <div class="contact-in">
                                    <iframe src="https://maps.google.com/maps?q=mit%20college%20of%20engineering%20pune&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="auto" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </div></div>
                        </div>
                        <Footer></Footer>
                        </div>
                        </div>

        )
    }
}

export default Contact
 