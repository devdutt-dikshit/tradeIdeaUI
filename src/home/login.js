import React, { Component } from "react";
import { Link } from "react-router-dom";
import { utils } from "../utils";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        };
    }
    onlogin(){
        console.log(this.state.username)
        // if(!this.state.username || !this.state.password ){
        //     return "email or password is invalid"
        // }
        utils.loginAPI(this.state)
    }
    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <div className="py-4">
                            <h3>Login In</h3>

                            <div className="form-group my-4">
                                <label>username</label>
                                <input type="text" className="form-control" value={this.state.username} onChange={x=>this.setState({username: x.target.value })} placeholder="Enter username" />
                            </div>

                            <div className="form-group mb-4">
                                <label>Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={x=>this.setState({password: x.target.value })} placeholder="Enter password" />
                            </div>
                            <button onClick={this.onlogin.bind(this)} className="btn mb-3 btn-primary btn-block col-12">Login</button>
                            <p className="forgot-password text-right">
                                Don't have account <Link to="/register">Register</Link>

                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}