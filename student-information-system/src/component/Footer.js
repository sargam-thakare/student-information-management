// import React, { Component } from 'react'
// import './Footer.css'
// export class Footer extends Component {
//     render() {
//         return (
//             <div>
//                 <div >
//                 <div class="mt-5 pt-5 pb-5 footer">
//                     <div class="container">
//                         <div class="row">
//                             <div class="col-lg-5 col-xs-12 about-company">
//                                 <h3>MIT, Pune</h3>
//                                 <p class="pr-5 text-white-50">MIT,Pune offers four year degree courses in various branches of engineering. Admission to all courses is based on merit as per rules and norms laid by Director Technical Education(DTE), Maharashtra.  </p>
//                                 <p><a href="#"><i class="fa fa-facebook-square mr-1" style={{fontSize:'25px'}}></i></a><a href="#"><i class="fa fa-linkedin-square" style={{fontSize:'25px'}}></i></a></p>
//                             </div>
//                             <div class="col-lg-3 col-xs-12 links">
//                                 <h4 class="mt-lg-0 mt-sm-3">Links</h4>
//                                 <ul class="m-0 p-0">
//                                     <li>- <a href="/home">Home</a></li>
//                                     <li>- <a href="/login">Login</a></li>
//                                     <li>- <a href="/registration">Register</a></li>
                                   
//                                 </ul>
//                             </div>
//                             <div class="col-lg-4 col-xs-12 location">
//                                 <h4 class="mt-lg-0 mt-sm-4">Location</h4>
//                                 <p style={{color: '#919294'}}>Rambaug Colony,Kothrud,Pune-411038</p>
//                                 <p class="mb-0" style={{color: '#919294'}}><i class="fa fa-phone mr-3" style={{fontSize:'25px'}}></i>(020) 754-3010</p>
//                                 <p style={{color: '#919294'}}><i class="fa fa-envelope-o mr-3" style={{fontSize:'25px'}}></i>info@mitedu.com</p>
//                             </div>
//                         </div>
//                         <div class="row  ">
//                             <div class="col copyright">
//                                 <p class=""><small class="text-white-50">© 2021. All Rights Reserved.</small></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
                
//         )
//     }
// }

// export default Footer


import React, { Component } from 'react'
import './Footer.css'
import logo from '../img/mit-logo.jpg';
export class Footer extends Component {
    render() {
        return (
            <footer class="footer-distributed">

        <div class="footer-left">
            <img src={logo} />
            <h3>MIT,Pune</h3>

            <p class="footer-links">
                <a href="/home">Home </a>
                |
                <a href="/photogallery"> Photo Gallery </a>
                |
                <a href="/contact"> Contact Us </a>
                |
                <br/>
                <a href="/login"> Login </a>
                |
                <a href="/registration"> Register </a>
            </p>

            <p class=""><small class="text-white-50">© 2021 All Rights Reserved.</small></p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p>
                    
                    Rambaug Colony, Kothrud, Pune-411038
                </p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>020-27782183</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@eduonix.com">support@mitedu.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About Us</span>
                MIT,Pune offers four year degree courses in various branches of engineering. Admission to all courses is based on merit as per rules and norms laid by Director Technical Education(DTE), Maharashtra.
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa fa-facebook-square mr-1"></i></a>
                <a href="#"><i class="fa fa-twitter-square mr-1"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-linkedin-square mr-1"></i></a>
                <a href="#"><i class="fa fa-youtube-square mr-1"></i></a>
            </div>
        </div>
    </footer>
                
        )
    }
}

export default Footer