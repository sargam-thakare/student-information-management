import React, { Component } from 'react'
import Footer from './Footer'

export class Assignment extends Component {
    render() {
        return (
            <div>
                
                <div id="content">
                <div id="content3">
                    <div className="card">
                        <h3>Assignment</h3>
                        <div class="container">
                       
                    <div class="row col-md-12 ">

                        <table class="table table-striped custab">
                            <thead>

                                <tr>
                                    <th>No.</th>
                                    <th>Subject</th>
                                    <th>Task</th>
                                    <th>Date of assignemnt</th>
                                    <th>Date ofsubmission</th>                              
                                    <th class="text-center">ACTION</th>
                                </tr>
                            </thead>
                            <tr>
                            <td>1</td>
                                <td>Computer Networks</td>
                                <td>Complete the model using table</td>
                                <td>12-12-2020</td>
                                <td>12-12-2020</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span>submit</a>  </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Computer Networks</td>
                            <td>Complete the model using table</td>
                                <td>12-12-2020</td>
                                <td>12-12-2020</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span>submit</a>  </td>
                              </tr>
                            <tr>
                            <td>3</td>
                            <td>Computer Networks</td>
                            <td>Complete the model using table</td>
                                <td>12-12-2020</td>
                                <td>12-12-2020</td>
                                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span>submit</a>  </td>
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

export default Assignment
