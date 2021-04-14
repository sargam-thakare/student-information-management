import React, { Component } from 'react';
import Footer from './Footer';

export class RegisterAs extends Component {
    render() {
        return (
            <div>
                <div className="login-form2">
                    <form action="" method="post">
                        <h2 className="text-center">Register as:</h2>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Student</button>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Faculty</button>
                        </div>
                    </form>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default RegisterAs
