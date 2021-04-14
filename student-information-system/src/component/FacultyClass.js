import React, { Component } from 'react';
import './table.css'

export class FacultyClass extends Component {
    render() {
        return (
            <div>
                <br />  <br />  <br />  <br />
                <div class="container classes">
                    <h2>Time Table</h2>
                               
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th></th>
                            <th>8:30am to 9:30am</th>
                            <th>9:30am to 10:30am</th>
                            <th style={{backgroundColor:"yellow"}}></th>
                            <th>10:45am to 11:45am</th>
                            <th>11:45am to 12:45pm</th>
                            <th style={{backgroundColor:"yellow"}}></th>
                            <th>1:30pm to 2:30pm</th>
                            <th>2:30pm to 3:30pm</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{backgroundColor:"mediumpurple"}}><b>Monday</b></td>
                            <td style={{backgroundColor:"springgreen"}}>Wireless Sensor Networks (AS306) (AS306)</td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"yellow"}}><b>B</b></td>
                            <td style={{backgroundColor:"DodgerBlue"}} >Robotics (D104)</td>
                            <td style={{backgroundColor:"#80bfff"}} >Optical Networks (AS305)</td>
                            
                            <td style={{backgroundColor:"yellow"}}><b>R</b></td>
                            <td style={{backgroundColor:"#80bfff"}} colSpan="2">Lab Practice(ON) Power Lab</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"mediumpurple"}}><b>Tuesday</b></td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"yellow"}}><b>R</b></td>
                            <td style={{backgroundColor:"lightpink"}} colSpan="2">Lab Practice(IoT) IBM Lab</td>
                            <td style={{backgroundColor:"yellow"}}><b>E</b></td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            
                        </tr>
                        
                        <tr>
                            <td style={{backgroundColor:"mediumpurple"}}><b>Wednesday</b></td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"orchid"}}>IoT (D103)</td>
                            <td style={{backgroundColor:"yellow"}}><b>E</b></td>
                            <td style={{backgroundColor:"DodgerBlue"}} colSpan="2">Robotics (D104)</td>
                            
                            <td style={{backgroundColor:"yellow"}}><b>C</b></td>
                            <td style={{backgroundColor:"#99ffff"}}>Mentor Mentee meeting</td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"mediumpurple"}}><b>Thursday</b></td>
                            <td style={{backgroundColor:"orchid"}}>IoT (D103)</td>
                            <td style={{backgroundColor:"springgreen"}}>Wireless Sensor Networks (AS306)</td>
                            <td style={{backgroundColor:"yellow"}}><b>A</b></td>
                            
                            <td style={{backgroundColor:"lightyellow"}} colSpan="2">-</td>
                            <td style={{backgroundColor:"yellow"}}><b>E</b></td>
                            <td style={{backgroundColor:"lightpink"}} colSpan="2">Lab Practice(IoT) IBM Lab</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"mediumpurple"}}><b>Friday</b></td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"orchid"}}>IoT (D103)</td>
                            <td style={{backgroundColor:"yellow"}}><b>K</b></td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"DodgerBlue"}}>Robotics (D104)</td>
                            <td style={{backgroundColor:"yellow"}}><b>S</b></td>
                            <td style={{backgroundColor:"#80bfff"}} colSpan="2" >Lab Practice(ON) Power Lab</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"mediumpurple"}}><b>Saturday</b></td>
                            <td style={{backgroundColor:"#80bfff"}} colSpan="2">Optical Networks (AS305)</td>
                            <td style={{backgroundColor:"yellow"}}></td>
                            <td style={{backgroundColor:"springgreen"}}>Wireless Sensor Networks (AS306)</td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"yellow"}}><b>S</b></td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>
                            <td style={{backgroundColor:"lightyellow"}}>-</td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default FacultyClass