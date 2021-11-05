import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form className="py-4 px-2">
                            <h3>Register</h3>

                            <div className="form-group my-4">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="username" />
                            </div>

                            <div className="form-group mb-4">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group mb-4">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary mb-3 btn-block col-12">Register</button>
                            <p className="forgot-password text-right">
                                Already registered <Link to="/login">login?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}