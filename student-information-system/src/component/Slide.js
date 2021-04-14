import React, { Component } from 'react';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';
import slider4 from '../img/slider4.jpg';
import './Slideshow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';


export class Slide extends Component {
    render() {

        return (
            <div>

                <div id="carouselExampleIndicators" className="carousel slide slideshow" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active  ">
                            <img className=" w-100 h-100  " src={slider2} alt="First slide"></img>
                        </div>
                        <div className="carousel-item  ">
                            <img className="w-100  h-100" src={slider1} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className=" w-100 h-100  " src={slider3} alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className=" w-100 h-100  " src={slider4} alt="Third slide"></img>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}


export default Slide
