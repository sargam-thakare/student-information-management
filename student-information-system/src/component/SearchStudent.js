import React, { Component } from 'react'
import Footer from './Footer'
import axios from 'axios'



export class SearchStudent extends Component {
    constructor(props){
        super(props);
        this.state={
            dept:'',
            data:[]
        };

        this.handleChange=this.handleChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
        let nam=e.target.name;
        let val=e.target.value;
        let err='';

    }

    onSubmit(e) {
        e.preventDefault();
        console.log("inside submit "+ this.state.dept)

        const student={
            dept:this.state.dept
        }
        
        axios.post('http://localhost:8000/student/search/:dept',student)
          .then(res => {console.log(res.data)
            this.setState({
                data:res.data
            })
        });
      }
     
    render() {
        return (
            <body>
            <div class="signup-form">
            <div class="form-group">
                <br></br>
                <br></br>
			
                <form onSubmit={this.onSubmit}>
                    <h3>Search Students </h3>
                    <div class="row">
				<div class="col-xs-6"> <select className="form-control" name="dept" required onChange={this.handleChange} value={this.state.dept}>
                    
                        <option value="dept">Select Department</option>
                        <option value="computer">Computer</option>
                        <option value="IT">IT</option>
                        <option value="entc">Entc</option>
                    </select> {this.state.errormessage}</div>
				<div class="col-xs-6"> <button type="submit" className="btn btn-primary btn-lg">Search</button>
  </div>
			</div>
                   
                </form>
            </div>
            </div>      
            <div>
                
                <div class="container">
                    <div class="row col-md-12 ">

                        <table style={{color:'black'}} class="table table-striped custab">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Department</th>
                                    <th>Email id</th>
                                    <th>Phone no</th>
                                </tr>
                            </thead>
                           
                                {this.state.data.map((item, index) => (
                                <tr key={index}>
                                <td>{index+1}</td> 
                                <td>{item.firstname}</td>   
                                <td>{item.lastname}</td>   
                                <td>{item.dept}</td>                
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                </tr>))}
               
                        </table>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            </body>
                    
        )
    }
}

export default SearchStudent