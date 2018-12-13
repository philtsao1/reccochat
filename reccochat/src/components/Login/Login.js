import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
      password: '',
		};
	}

	handleEmail(event) {
		const email = event.target.value;
		this.setState({
      ...this.state,
			email: email,
		})
	}

  handlePassword(event) {
    const password = event.target.value;
    this.setState({
      ...this.state,
      password,
    })
  }

	handleSubmit(event) {
		event.preventDefault();
		console.log("email: " + this.state.email);
    console.log("password: " + this.state.password);
	}

	render(){
		return(
			<div className="Login">
        <h1>Reccochat</h1>
        <input className="text" type="email" placeholder="email" onChange={this.handleEmail.bind(this)} value={this.state.email}/> <br/>
        <input className="text" type="password" placeholder="password" onChange={this.handlePassword.bind(this)} value={this.state.password}/> <br/>
        <input id="submit-button" type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} /> <br/>
        <button id="login-register" type="button" class="btn btn-dark"><Link to="/register">Register Here</Link></button>
      </div>
		);
	}
}

export default Login;
