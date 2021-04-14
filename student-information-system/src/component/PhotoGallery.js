 
import React, { Component } from 'react'
import one from '../img/Photogallery/Annual day/one.JPG';
import two from '../img/Photogallery/Annual day/two.JPG';
import three from '../img/Photogallery/Annual day/three.JPG';
import four from '../img/Photogallery/Annual day/four.JPG';
import five from '../img/Photogallery/Annual day/five.JPG';
import six from '../img/Photogallery/Annual day/six.JPG';
import one1 from '../img/Photogallery/Techfest/one1.JPG';
import two2 from '../img/Photogallery/Techfest/two2.JPG';
import three3 from '../img/Photogallery/Techfest/three3.JPG';
import four4 from '../img/Photogallery/Techfest/four4.JPG';
import five5 from '../img/Photogallery/Techfest/five5.JPG';
import six6 from '../img/Photogallery/Techfest/six6.JPG';
import one11 from '../img/Photogallery/Sports/one.JPG';
import two22 from '../img/Photogallery/Sports/two.JPG';
import three33 from '../img/Photogallery/Sports/three.JPG';
import four44 from '../img/Photogallery/Sports/four.JPG';
import five55 from '../img/Photogallery/Sports/five.JPG';
import six66 from '../img/Photogallery/Sports/six.JPG';
import './PhotoGallery.css';
import Footer from './Footer';

export class PhotoGallery extends Component {
  
    render() {
        return (
            <div>
                <div id="content">
                <div id="content3">
                    <div className="card">
                        <div className="card-title">
                            <div className="card-header" style={{backgroundColor:'lightblue'}}><h3>Photo Gallery</h3></div>
                        </div>
                        <div>
                          <h3 style={{margin:"10px"}}>Annual day</h3>
                          <div class="row" id="annual" data-toggle="modal" data-target="#exampleModal">
                            <div class="col-sm-2 ">
                              <img class="w-100 h-100" src={one} data-target="#carouselExample" data-slide-to="0" alt=""/>
                            </div>
                            <div class="col-sm-2 ">
                              <img class="w-100 h-100"  src={two} data-target="#carouselExample" data-slide-to="1" alt=""/>
                            </div>
                            <div class="col-sm-2">
                              <img class="w-100 h-100" src={three} data-target="#carouselExample" data-slide-to="2" alt=""/>
                            </div>
                            <div class="col-sm-2">
                              <img class="w-100 h-100"  src={four} data-target="#carouselExample" data-slide-to="3" alt=""/>
                            </div>
                            <div class="col-sm-2">
                              <img class="w-100 h-100" src={five} data-target="#carouselExample" data-slide-to="4" alt=""/>
                            </div>
                            <div class="col-sm-2">
                              <img class="w-100 h-100"  src={six} data-target="#carouselExample" data-slide-to="5" alt=""/>
                            </div>
                          </div>

                          {/* <!-- Modal markup: https://getbootstrap.com/docs/4.4/components/modal/ --> */}
                          <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                {/* <!-- Carousel markup: https://getbootstrap.com/docs/4.4/components/carousel/ --> */}
                                <div id="carouselExample" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img class="d-block w-100" src={one} alt="Hello"/>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="d-block w-100" src={two} alt=""/>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="w-100 h-100" src={three} alt=""/>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="w-100 h-100" src={four} alt=""/>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="w-100 h-100" src={five} alt=""/>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="w-100 h-100" src={six} alt=""/>
                                      </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 style={{margin:"10px"}}>Sports day</h3>
                            <div class="row" id="sports" data-toggle="modal" data-target="#exampleModal1">
                            <div class=" col-12 col-sm-2">
                                <img class="w-100 h-100" src={one11} data-target="#carouselExample1" data-slide-to="0" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100"  src={two22} data-target="#carouselExample1" data-slide-to="1" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100" src={three33} data-target="#carouselExample1" data-slide-to="2" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100"  src={four44} data-target="#carouselExample1" data-slide-to="3" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100" src={five55} data-target="#carouselExample1" data-slide-to="4" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100"  src={six66} data-target="#carouselExample1" data-slide-to="5" alt=""/>
                            </div>
                            </div>

                            {/* <!-- Modal markup: https://getbootstrap.com/docs/4.4/components/modal/ --> */}
                            <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                {/* <!-- Carousel markup: https://getbootstrap.com/docs/4.4/components/carousel/ --> */}
                                <div id="carouselExample1" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img class="d-block w-100" src={one11} alt="Hello"/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src={two22} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={three33} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={four44} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={five55} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={six66} alt=""/>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExample1" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExample1" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div>
                            <h3 style={{margin:"10px"}}>Tech Fest</h3>
                            <div class="row" id="tech" data-toggle="modal" data-target="#exampleModal2">
                            <div class=" col-12 col-sm-2">
                                <img class="w-100 h-100" src={one1} data-target="#carouselExample2" data-slide-to="0" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100"  src={two2} data-target="#carouselExample2" data-slide-to="1" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100" src={three3} data-target="#carouselExample2" data-slide-to="2" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100"  src={four4} data-target="#carouselExample2" data-slide-to="3" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100" src={five5} data-target="#carouselExample2" data-slide-to="4" alt=""/>
                            </div>
                            <div class="col-sm-2">
                                <img class="w-100 h-100"  src={six6} data-target="#carouselExample2" data-slide-to="5" alt=""/>
                            </div>
                            </div>

                            {/* <!-- Modal markup: https://getbootstrap.com/docs/4.4/components/modal/ --> */}
                            <div class="modal fade " id="exampleModal2" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                {/* <!-- Carousel markup: https://getbootstrap.com/docs/4.4/components/carousel/ --> */}
                                <div id="carouselExample2" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img class="d-block w-100" src={one1} alt="Hello"/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src={two2} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={three3} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={four4} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={five5} alt=""/>
                                        </div>
                                        <div class="carousel-item">
                                        <img class="w-100 h-100" src={six6} alt=""/>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExample2" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExample2" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                    </div>
                                </div>
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

export default PhotoGallery