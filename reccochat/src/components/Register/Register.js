import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
      email: '',
      age: '',
      gender: '',
      password: '',
      confirmPassword: '',
			preferredMusicGenre: '',
      preferredMusicGenre2: '',
      preferredArtist: '',
		};
	}

	handleName(event) {
		const name = event.target.value;
		this.setState({
      ...this.state,
			name: name,
		})
	}

  handleEmail(event) {
		const email = event.target.value;
		this.setState({
      ...this.state,
			email: email,
		})
	}

  handleAge(event) {
    const age = event.target.value;
    this.setState({
      ...this.state,
      age: age,
    })
  }

  handleGender(event) {
    const gender = event.target.value;
    this.setState({
      ...this.state,
      gender,
    })
  }



  handlePassword(event) {
    const password = event.target.value;
    this.setState({
      ...this.state,
      password,
    })
  }

  handleConfirmPassword(event) {
    const confirmPassword = event.target.value;
    this.setState({
      ...this.state,
      confirmPassword: confirmPassword,
    })
  }

	handlePreferredMusicGenre(event) {
		const preferredMusicGenre = event.target.value;
		this.setState({
			...this.state,
			preferredMusicGenre,
		})
	}

	handlePreferredMusicGenre2(event) {
		const preferredMusicGenre2 = event.target.value;
		this.setState({
			...this.state,
			preferredMusicGenre2,
		})
	}

	handlePreferredArtist(event) {
		const preferredArtist = event.target.value;
		this.setState({
			...this.state,
			preferredArtist,
		})
	}


	handleSubmit(event) {
		event.preventDefault();
		console.log("name: " + this.state.name);
    console.log("email: " + this.state.email);
    console.log("age: " + this.state.age);
    console.log("gender: " + this.state.gender);
    console.log("password: " + this.state.password);
    console.log("confirmPassword: " + this.state.confirmPassword);
		console.log("genre 1: " + this.state.preferredMusicGenre);
		console.log("genre 2: " + this.state.preferredMusicGenre2);
		console.log("artist: " + this.state.preferredArtist);
	}

	render(){
		return(
			<div className="Register">
				<h1>Register</h1>
        <input className="text" type="text" placeholder="name" onChange={this.handleName.bind(this)} value={this.state.name}/> <br/>
        <input className="text" type="email" placeholder="email" onChange={this.handleEmail.bind(this)} value={this.state.email}/> <br/>
        <input className="text" type="text" placeholder="age" onChange={this.handleAge.bind(this)} value={this.state.age}/> <br/>
        <input className="text" type="text" placeholder="gender" onChange={this.handleGender.bind(this)} value={this.state.gender}/> <br/>
        <input className="text" type="password" placeholder="password" onChange={this.handlePassword.bind(this)} value={this.state.password}/> <br/>
        <input className="text" type="password" placeholder="confirm password" onChange={this.handleConfirmPassword.bind(this)} value={this.state.confirmPassword}/> <br/>
					<select onChange={this.handlePreferredMusicGenre.bind(this)} value={this.state.preferredMusicGenre}>
    				<option value="" disabled="disabled" selected="selected">Enter your preferred music genre</option>
    				<option value="Hip-hop">Hip-hop</option>
    				<option value="2">R&B</option>
					</select>
						<select onChange={this.handlePreferredMusicGenre2.bind(this)} value={this.state.preferredMusicGenre2}>
	    				<option value="" disabled="disabled" selected="selected">Enter your second preferred music genre</option>
	    				<option value="Hip-hop">Hip-hop</option>
	    				<option value="R&B">R&B</option>
						</select>
						<select onChange={this.handlePreferredArtist.bind(this)} value={this.state.preferredArtist}>
	    				<option value="" disabled="disabled" selected="selected">Enter your favorite artist</option>
	    				<option value="Post Malone">Post Malone</option>
						</select>
        <input id="submit-button" type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} /> <br/>
			</div>
		);
	}
}

export default Register;
