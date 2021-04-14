import React, { Component } from 'react'
import './Home.css';
import Footer from './Footer';
import Slide from './Slide';
import sports from '../img/sports.jpg';
import library from '../img/library.jpg';
import auditorium from '../img/auditorium.jpg';


export class Home extends Component {
    render() {
        return (
            <div >
                {/* <App></App> */}
                <Slide></Slide>
                <div id="content2">
                    <div id="content3">
                        <div className="card" style={{ marginTop: "100px" }}>
                            <div className="card-title">
                                <div className="card-header" style={{ backgroundColor: 'lightblue' }}><h4 >Student Information System</h4> </div>
                            </div>
                            <div className="card-body abc ">
                                <div style={{ backgroundColor: 'white' }}>
                                    <h1 style={{ textAlign: 'center', backgroundColor: 'black', fontFamily: 'Garamond', color: 'white' }}>Notice Board</h1>

                                    <div style={{ backgroundColor: 'lightcyan', color: 'red', fontStyle: "italic" }} class="example1"><h6>Complying to Govt. of Maharashtra 'MISSION BEGIN AGAIN' guidelines provide Order No. DMU/2020/CR.92/DisM-I, dated 30th September 2020. </h6></div>
                                    <div style={{ backgroundColor: 'lightcyan', color: 'red', fontStyle: "italic" }} class="example1" ><h6>The Institute level allotment list seen initially on 1st Jan 2021 was incorrect owing to system bug. The correct allotment list is seen from 11am onwards on 2nd Jan 2021.</h6></div>
                                    <div style={{ backgroundColor: 'lightcyan', color: 'red', fontStyle: "italic" }} class="example1"><h6>Uploading the information of Academic year 2020-21 on MIS portal.</h6></div>
                                    <div style={{ backgroundColor: 'lightcyan', color: 'red', fontStyle: "italic" }} class="example1"><h6>Extension of date for submission of final year project for BE is 12th Jan 2021.</h6></div>
                                    <marque></marque>
                                </div>
                                <br />

                                <div class="card h-100">
                                    <div class="card-body">
                                        <h2 class="card-title">ABOUT US</h2><hr />
                                        <p class="card-text">MAEER'S Maharashtra Institute of Technology (MIT), established in 1983, is today amongst the top engineering colleges in India. The news magazine 'Outlook' has ranked MIT Pune as 1st in Maharashtra & 11th in India amongst the finest Private Engineering Colleges. MIT is affiliated to the University of Pune and recognized by the Government of Maharashtra and the All India Council of Technical Education (AICTE), New Delhi.

MIT, Pune Institutes offer four year degree courses in various branches of engineering and post graduate courses in select areas. Admission to all courses is based on merit as per rules and norms laid down by the Director Technical Education ( DTE), Maharashtra State.</p>
                                    </div></div><br />
                                <div class="row">
                                    <div class="col-md-6 mb-6">
                                        <div class="card h-100">


                                            <div class="card-body"  >
                                                <h2 class="card-title">VISION</h2>
                                                <hr />
                                                <p class="card-text">To be a leading University of Excellence, promoting the “Culture of Peace” through Value-based “Universal Education System”, with a firm belief that “Union of Science and Religion / Spirituality alone will bring peace to mankind”

To be a world class space of intellectual distinction in creating extensively trained professionals who will stand for eternal human values and world peace as complete global citizens</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-6">
                                        <div class="card h-100">


                                            <div class="card-body"  >
                                                <h2 class="card-title"> MISSION</h2>
                                                <hr />
                                                <p class="card-text">  To create a synergy of academics with technology, technology with research, research with industry, industry with economy and economy with social innovation, leading to world peace and positive change in the society

                                                To identify, enhance, hone and nurture the strength of every student to apply scientific knowledge to touch the life of human beings

To foster the spirit of inquiry and imagination in students, to push the envelope of human knowledge and come up with innovative and ground-breaking solutions for well-being of the world</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                                <div class="row">
                                    <div class="col-md-4 mb-5">
                                        <div class="card h-100">


                                            <div class="card-body"  >
                                                <h2 class="card-title"> Auditorium</h2>
                                                <hr />
                                                <img class="card-img-top" src={auditorium} alt="Card image cap"></img>
                                                <p class="card-text">A 500 Seater Air-conditioned Convention Facility with well engineered acoustics for conducting Seminars, Conferences and Training sessions</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-4 mb-5">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h2 class="card-title">Sports Club</h2>
                                                <hr />
                                                <img class="card-img-top" src={sports} alt="Card image cap"></img>
                                                <p class="card-text">We take every effort to encourage our students to participate in various social, cultural and sports activities. The college has its own cricket, football, volleyball grounds and twin basketball courts with flood lights.</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-4 mb-5">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h2 class="card-title">Library</h2>
                                                <hr />
                                                <img class="card-img-top" src={library} alt="Card image cap"></img>
                                                <p class="card-text">A separate digital library is available for accessing e-resources. There are two separate reading halls with a seating capacity of more than two hundred. The Reading Halls are open for extended hours.</p>
                                            </div>

                                        </div>
                                    </div>




                                </div>



                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>

            </div>

        )
    }
}

export default Home
