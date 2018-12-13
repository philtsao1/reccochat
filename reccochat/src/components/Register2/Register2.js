import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			preferredMusicGenre: '',
      preferredMusicGenre2: '',
      preferredMusicGenre3: '',
      preferredArtist: '',
      preferredArtist2: '',
		};
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

  handlePreferredMusicGenre3(event) {
		const preferredMusicGenre3 = event.target.value;
		this.setState({
      ...this.state,
			preferredMusicGenre3,
		})
	}

  handlePreferredArtist(event) {
		const preferredArtist = event.target.value;
		this.setState({
      ...this.state,
			preferredArtist,
		})
	}



  handlePreferredArtist2(event) {
		const preferredArtist2 = event.target.value;
		this.setState({
      ...this.state,
			preferredArtist2,
		})
	}


	handleSubmit(event) {
		event.preventDefault();
		console.log("preferredMusicGenre: " + this.state.preferredMusicGenre);
    console.log("preferredMusicGenre2: " + this.state.preferredMusicGenre2);
    console.log("preferredMusicGenre3: " + this.state.preferredMusicGenre3);
    console.log("preferredArtist: " + this.state.preferredArtist);
    console.log("preferredArtist2: " + this.state.preferredArtist2);
	}

	render(){
		return(
			<div className="Register2">
        <h1>Register Continued </h1>
				<p>Enter your preferred music genre </p>
					<select>
    				<option value="" disabled="disabled" selected="selected">Choose One</option>
    				<option value="Hip-hop">Hip-hop</option>
    				<option value="2">R&B</option>
					</select>
        <input className="text" type="text" placeholder="Enter your preferred music genre" onChange={this.handlePreferredMusicGenre.bind(this)} value={this.state.preferredMusicGenre}/> <br/>
        <input className="text" type="email" placeholder="preferredMusicGenre2" onChange={this.handlePreferredMusicGenre2.bind(this)} value={this.state.preferredMusicGenre2}/> <br/>
        <input className="text" type="text" placeholder="preferredMusicGenre3" onChange={this.handlePreferredMusicGenre3.bind(this)} value={this.state.preferredMusicGenre3}/> <br/>
        <input className="text" type="text" placeholder="preferredArtist" onChange={this.handlePreferredArtist.bind(this)} value={this.state.preferredArtist}/> <br/>
        <input className="text" type="password" placeholder="preferredArtist2" onChange={this.handlePreferredArtist2.bind(this)} value={this.state.preferredArtist2}/> <br/>
        <input id="submit-button" type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} /> <br/>
      </div>
		);
	}
}

export default Register;
