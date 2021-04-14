import React, { Component } from 'react';
import axios from "axios";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from 'react-datepicker/dist/react-datepicker';
class EditExercise extends Component {
    constructor(props) {
        super();
        this.state = {
            Subject: "",
            Assignment_no: "",
            Start_Date: "",
            Submission_Date: "",
        }
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeAsssignment_no = this.onChangeAsssignment_no.bind(this);
        this.onChangeStart_Date = this.onChangeStart_Date.bind(this);
        this.onChangeSubmission_Date = this.onChangeSubmission_Date.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8000/exercises/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    Subject: res.data.Subject,
                    Assignment_no: res.data.Assignment_no,
                    Start_Date: res.data.Start_Date,
                    Submission_Date: res.data.Submission_Date,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeSubject(e) {
        this.setState({ Subject: e.target.value })
    }
    onChangeAsssignment_no(e) {
        this.setState({ Assignment_no: e.target.value })
    }
    onChangeStart_Date(e) {
        this.setState({ Start_Date: e.target.value })
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
        axios.post('http://localhost:8000/exercises/update/' + this.props.match.params.id, exercise)
            .then(res => console.log(res.data));
        // window.location = "/ExerciseList";
        this.props.history.push("/ExerciseList");
    }
    render() {
        return (
            <div className="container">
                <h3>Edit Exercise </h3>
                <br/><br/>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Subject: </label>
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
                            onChange={this.onChangeAsssignment_no}
                        />
                    </div>
                    <div className="form-group" style={{width:'200px'}}>
                        <label>Start Date: </label>
                        <input
                            type="date"
                            className="form-control"
                            value={this.state.Start_Date}
                            onChange={this.onChangeStart_Date}
                        />
                    </div>
                    <div className="form-group" style={{width:'200px'}}>
                        <label>Submission Date: </label>
                        <input
                            type="date"
                            className="form-control"
                            value={this.state.Submission_Date}
                            onChange={this.onChangeSubmission_Date}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
export default EditExercise;