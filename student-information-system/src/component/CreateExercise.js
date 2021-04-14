import React, { Component } from 'react';
import axios from "axios";
//import DatePicker from "react-datepicker";
//import DatePicker from 'react-datepicker/dist/react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
class CreateExercise extends Component {
    constructor(props) {
        super();
        this.state = {
            Subject: "",
            Assignment_no: "",
            Start_Date: "",
            Submission_Date: "",

        }
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeAssignment_no = this.onChangeAssignment_no.bind(this);
        this.onChangeStart_Date = this.onChangeStart_Date.bind(this);
        this.onChangeSubmission_Date = this.onChangeSubmission_Date.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeSubject(e) {
        this.setState({ Subject: e.target.value })
    }
    onChangeStart_Date(e) {
        this.setState({ Start_Date: e.target.value })
    }
    onChangeAssignment_no(e) {
        this.setState({ Assignment_no: e.target.value })
    }
    onChangeSubmission_Date(e) {
        this.setState({ Submission_Date: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            Subject: this.state.Subject,
            Assignment_no: this.state.Assignment_no,
            Start_Date: this.state.Start_Date,
            Submission_Date: this.state.Submission_Date
        }
        console.log(exercise);
        axios.post('http://localhost:8000/exercises/add', exercise)
            .then(res => console.log(res.data));
            this.props.history.push('/ExerciseList');
    }
    render() {
        return (
            <div id="content">
            <div id="content3">
                <div className="card">
                   
            <div className="container">
                <h3>Create New Assignement Log</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Subject </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.Subject}
                            onChange={this.onChangeSubject}
                        />
                    </div>

                    <div className="form-group">
                        <label>Assignment Details </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.Assignment_no}
                            onChange={this.onChangeAssignment_no}
                        />
                    </div>

                    <div className="form-group" style={{width:'200px'}}>
                        <label>Start_Date </label>
                        <input
                            type="date" required
                            className="form-control"
                            value={this.state.Start_Date}
                            onChange={this.onChangeStart_Date}
                        />
                    </div>

                    <div className="form-group" style={{width:'200px'}}>
                        <label>Submission_Date </label>
                        <input
                            type="date" required
                            className="form-control"
                            value={this.state.Submission_Date}
                            onChange={this.onChangeSubmission_Date}
                        />
                    </div>



                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div></div></div>

        );
    }
}
export default CreateExercise;